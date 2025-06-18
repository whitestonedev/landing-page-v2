---
title: "Criando uma API simples com Flask, Docker, PostgreSQL, Swagger e boas práticas"
date: "2025-06-15"
author: "Vitor Stahelin"
tags: [Flask, Python, Docker, PostgreSQL, Swagger, API, Backend, Boas Práticas]
thumb: /img/blog/posts/python_flask_docker.png
short_description: "Aprenda a criar uma API do zero com Flask, Docker, PostgreSQL e documentação automática, seguindo boas práticas de desenvolvimento."
---

Neste post, vamos construir juntos uma API RESTful completa, partindo do zero. Usaremos um conjunto de tecnologias poderosas e muito populares no mercado: **Flask** para o servidor, **PostgreSQL** como banco de dados, e **Docker** para criar um ambiente de desenvolvimento consistente e portátil. Para garantir a qualidade, aplicaremos **Ruff** e **Black** para formatação e linting de código, e geraremos uma documentação interativa com **Swagger (flasgger)**.

O objetivo é claro: entender não apenas o "como", mas principalmente o "porquê" de cada decisão técnica, resultando em um projeto limpo, escalável e profissional. 🚀

## Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas em sua máquina:
* **Python 3.8+**
* **Docker** e **Docker Compose**

---

## 🏗️ Estrutura do Projeto

Uma boa organização de arquivos é o primeiro passo para um projeto sustentável. Vamos criar uma estrutura que separa as responsabilidades, facilitando a manutenção e o crescimento da API.

Abra seu terminal e execute os seguintes comandos:

```bash
mkdir flask-api-tutorial && cd flask-api-tutorial
mkdir -p app/static app/templates
touch app/__init__.py app/models.py app/routes.py app/config.py
touch requirements.txt Dockerfile docker-compose.yml pyproject.toml run.py
```

Ao final, sua estrutura de diretórios ficará assim:

```
flask-api-tutorial/
├── app/
│   ├── __init__.py         # Inicializa a aplicação Flask (fábrica de apps)
│   ├── config.py           # Configurações da aplicação (ex: banco de dados)
│   ├── models.py           # Modelos de dados do SQLAlchemy
│   └── routes.py           # Definição das rotas (endpoints) da API
├── Dockerfile              # Receita para construir a imagem Docker da nossa API
├── docker-compose.yml      # Orquestra os contêineres (API e banco de dados)
├── requirements.txt        # Lista de dependências Python
├── pyproject.toml          # Configuração de ferramentas como Black e Ruff
└── run.py                  # Ponto de entrada para executar a aplicação
```

---

## 🐍 Configurando o Ambiente Python

Vamos começar definindo e instalando as dependências do nosso projeto. É uma boa prática usar um ambiente virtual para isolar as bibliotecas.

### 1.  **Crie e ative o ambiente virtual:**
```bash
python -m venv venv
source venv/bin/activate  # No Linux/macOS
# venv\Scripts\activate   # No Windows
```

### 2.  **Instale as bibliotecas:**
* `Flask`: O microframework web.
* `psycopg2-binary`: O driver para conectar o Python ao PostgreSQL.
* `Flask-SQLAlchemy`: Facilita a interação com o banco de dados.
* `flasgger`: Gera a documentação Swagger a partir do código.
* `ruff` e `black`: Ferramentas para manter o código limpo e padronizado.

```bash
pip install flask psycopg2-binary flask-sqlalchemy flasgger ruff black python-dotenv
```

### 3.  **Gere o `requirements.txt`:**
Este arquivo é essencial para que o Docker saiba quais pacotes instalar.
```bash
pip freeze > requirements.txt
```

### Configurando o Linter e o Formatador

Agora, vamos configurar o `Ruff` e o `Black` no arquivo `pyproject.toml`. Isso garante que qualquer pessoa que trabalhe no projeto use as mesmas regras de estilo de código.

**`pyproject.toml`**
```toml
[tool.black]
line-length = 88
target-version = ['py38']

[tool.ruff]
line-length = 88
select = ["E", "F", "W", "I", "C90"]
ignore = ["E501"]
```

---

## 💻 Construindo a Aplicação Flask

Agora vamos escrever o código da nossa API, arquivo por arquivo.

### 1. Configuração (`app/config.py`)
Aqui, definimos as configurações da aplicação, como a URL de conexão com o banco de dados. Usar variáveis de ambiente é uma ótima prática para não expor dados sensíveis no código.

```python
import os
from dotenv import load_dotenv

load_dotenv() # Carrega variáveis de ambiente do arquivo .env

class Config:
    """Configurações base da aplicação."""
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'uma-chave-secreta-muito-dificil'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'postgresql://user:password@localhost:5432/mydatabase'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
```

### 2. Fábrica de Aplicação (`app/__init__.py`)
Este arquivo transforma o diretório `app` em um pacote Python e contém a função "fábrica" que cria e configura a instância da aplicação Flask.

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flasgger import Swagger
from app.config import Config

# Inicialização das extensões
db = SQLAlchemy()
migrate = Migrate()

def create_app(config_class=Config):
    """Cria e configura a aplicação Flask."""
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Inicializa as extensões com a app
    db.init_app(app)
    migrate.init_app(app, db)
    Swagger(app)

    # Registra os blueprints (rotas)
    from app.routes import main_bp
    app.register_blueprint(main_bp)

    return app
```

### 3. Modelo de Dados (`app/models.py`)
Aqui definimos a estrutura da nossa tabela de usuários usando o ORM (Mapeamento Objeto-Relacional) do SQLAlchemy.

```python
from app import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)

    def to_dict(self):
        """Converte o objeto User para um dicionário."""
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email
        }
```

### 4. Rotas (`app/routes.py`)
Aqui ficam os endpoints da nossa API. Vamos criar um CRUD (Create, Read, Update, Delete) completo para os usuários. Note como os comentários em formato YAML são usados pelo `flasgger` para gerar a documentação.

```python
from flask import Blueprint, request, jsonify
from app.models import db, User

main_bp = Blueprint('main', __name__)

@main_bp.route('/users', methods=['POST'])
def create_user():
    """
    Cria um novo usuário.
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          id: User
          required:
            - name
            - email
          properties:
            name:
              type: string
              description: O nome do usuário.
            email:
              type: string
              description: O email do usuário.
    responses:
      201:
        description: Usuário criado com sucesso.
    """
    data = request.get_json()
    if not data or not data.get('name') or not data.get('email'):
        return jsonify({'error': 'Dados insuficientes'}), 400

    new_user = User(name=data['name'], email=data['email'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.to_dict()), 201

@main_bp.route('/users', methods=['GET'])
def get_users():
    """Retorna uma lista de todos os usuários."""
    users = User.query.all()
    return jsonify([user.to_dict() for user in users]), 200

@main_bp.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    """Retorna um único usuário pelo seu ID."""
    user = User.query.get_or_404(user_id)
    return jsonify(user.to_dict()), 200

@main_bp.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    """Atualiza um usuário existente."""
    user = User.query.get_or_404(user_id)
    data = request.get_json()
    user.name = data.get('name', user.name)
    user.email = data.get('email', user.email)
    db.session.commit()
    return jsonify(user.to_dict()), 200

@main_bp.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    """Deleta um usuário."""
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return '', 204

@main_bp.route('/status', methods=['GET'])
def api_status():
    """Verifica o status da API."""
    return jsonify({"status": "API está no ar!"}), 200
```

### 5. Ponto de Entrada (`run.py`)
Este script na raiz do projeto será responsável por criar a aplicação e as tabelas do banco de dados na primeira vez que for executado.

```python
from app import create_app, db

app = create_app()

@app.cli.command("create-db")
def create_db():
    """Cria as tabelas do banco de dados."""
    with app.app_context():
        db.create_all()
    print("Banco de dados criado com sucesso!")

if __name__ == '__main__':
    app.run(host='0.0.0.0')

```

---

## 🐳 Dockerizando a Aplicação

Agora, vamos criar os arquivos para "containerizar" nossa API e o banco de dados.

### 1. Dockerfile
Este arquivo contém as instruções para construir a imagem Docker da nossa aplicação Flask. Usaremos uma abordagem *multi-stage build* para criar uma imagem final menor e mais segura.

**`Dockerfile`**
```dockerfile
# --- Estágio de Build ---
FROM python:3.9-slim as builder

WORKDIR /usr/src/app

# Previne que o Python gere arquivos .pyc
ENV PYTHONDONTWRITEBYTECODE 1
# Garante que a saída do Python seja exibida imediatamente
ENV PYTHONUNBUFFERED 1

# Instala as dependências
COPY requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /usr/src/app/wheels -r requirements.txt


# --- Estágio Final ---
FROM python:3.9-slim

WORKDIR /usr/src/app

# Copia as dependências pré-compiladas do estágio de build
COPY --from=builder /usr/src/app/wheels /wheels
COPY --from=builder /usr/src/app/requirements.txt .

# Instala as dependências a partir dos wheels locais
RUN pip install --no-cache /wheels/*

# Copia o código da aplicação
COPY . .

# Expõe a porta que a aplicação vai rodar
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["flask", "run", "--host=0.0.0.0"]
```

### 2. Docker Compose
O `docker-compose.yml` orquestra a execução dos nossos contêineres: a API (`web`) e o banco de dados (`db`). Ele configura a rede, os volumes e as variáveis de ambiente necessárias para que eles se comuniquem.

**`docker-compose.yml`**
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "5000:5000"
    environment:
      - FLASK_APP=run.py
      - FLASK_ENV=development
      - DATABASE_URL=postgresql://user:password@db:5432/mydatabase
    volumes:
      - .:/usr/src/app
    depends_on:
      - db
    command: >
      sh -c "
        flask db init &&
        flask db migrate -m 'Initial migration' &&
        flask db upgrade &&
        flask run --host=0.0.0.0
      "

  db:
    image: postgres:13
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydatabase
    volumes:
      - postgres_data:/var/lib/postgresql/data/
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

---

## 🚀 Executando e Testando

Com todos os arquivos no lugar, o grande momento chegou!

### 1.  **Suba os contêineres:**
    No terminal, na raiz do projeto, execute:
    ```bash
    docker-compose up --build
    ```
    O `--build` força a reconstrução da imagem da sua API. Na primeira vez, o Docker baixará a imagem do PostgreSQL e construirá a imagem da sua aplicação. Você verá os logs de ambos os serviços.

### 2.  **Teste a API:**
Abra seu navegador ou uma ferramenta como Postman/Insomnia.

**Verifique o status:** Vá para `http://localhost:5000/status`  
Você deve ver: `{"status": "API está no ar!"}`

**Documentação Swagger:** Acesse `http://localhost:5000/apidocs/`  
Você verá uma interface interativa onde pode testar todos os endpoints do CRUD de usuários diretamente do navegador. Experimente criar, listar e deletar um usuário!

**Teste com cURL (opcional):**
Criar um usuário
> curl -X POST -H "Content-Type: application/json" -d '{"name":"Vitor Stahelin","email":"vitor@example.com"}' http://localhost:5000/users 

Listar usuários
> curl http://localhost:5000/users

---

## Próximos Passos

Parabéns! Você construiu uma base sólida para uma API profissional. A partir daqui, as possibilidades são enormes. Aqui estão algumas sugestões:

* **Autenticação e Autorização:** Implemente JWT (JSON Web Tokens) para proteger seus endpoints.
* **Testes Automatizados:** Escreva testes unitários e de integração usando `pytest` para garantir a confiabilidade do seu código.
* **Validação de Dados:** Use bibliotecas como `Marshmallow` ou `Pydantic` para validar os dados de entrada e saída.
* **Estrutura com Blueprints:** Para projetos maiores, organize suas rotas em diferentes arquivos usando mais Blueprints do Flask.

Espero que este guia detalhado tenha sido útil! Construir projetos do zero é a melhor forma de solidificar o conhecimento.
