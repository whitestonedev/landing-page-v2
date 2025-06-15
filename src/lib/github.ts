export interface GitHubStats {
  stars: number;
  contributors: number;
}

/**
 * Given a GitHub repository URL (e.g., "https://github.com/owner/repo"),
 * fetches the number of stars and contributors.
 */
export async function getGitHubStats(repoUrl: string): Promise<GitHubStats> {
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)(?:\.git)?$/);
  if (!match) {
    throw new Error(`Invalid GitHub URL: ${repoUrl}`);
  }
  const [, owner, repo] = match;

  // Fetch repository info
  const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  if (!repoRes.ok) {
    throw new Error(
      `GitHub API error (${repoRes.status}) fetching repo ${owner}/${repo}`
    );
  }
  const repoData = await repoRes.json();
  const stars = repoData.stargazers_count ?? 0;

  // Fetch contributors list (up to 100)
  const contribRes = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contributors?per_page=100`
  );
  if (!contribRes.ok) {
    throw new Error(
      `GitHub API error (${contribRes.status}) fetching contributors for ${owner}/${repo}`
    );
  }
  const contributorsList = await contribRes.json();
  const contributors = Array.isArray(contributorsList)
    ? contributorsList.length
    : 0;

  return { stars, contributors };
}
