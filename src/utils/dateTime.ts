/**
 * Calculates the estimated reading time of a text based on word count.
 * Uses an average of 200 words per minute, which is the standard for Brazilian adult readers.
 * 
 * @param content - The text content to calculate reading time for
 * @returns The estimated reading time in minutes (minimum 1 minute)
 * 
 * @example
 * ```typescript
 * const readingTime = calculateReadingTime("This is an example text...");
 * console.log(readingTime); // 3
 * ```
 */
export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  
  const wordCount = content.trim().split(/\s+/).length;
  
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  return Math.max(1, readingTime);
};

/**
 * Formats reading time in minutes for display.
 * Returns "1min" for 1 minute or "Xmin" for multiple minutes.
 * 
 * @param minutes - The number of reading minutes
 * @returns Formatted string of reading time
 * 
 * @example
 * ```typescript
 * formatReadingTime(1);  // "1min"
 * formatReadingTime(5);  // "5min"
 * formatReadingTime(15); // "15min"
 * ```
 */
export const formatReadingTime = (minutes: number): string => {
  if (minutes === 1) {
    return "1min";
  }
  return `${minutes}min`;
};

/**
 * Formats a date in Brazilian abbreviated format "DD MMM, YY".
 * Uses 'pt-BR' locale to get month names in Portuguese.
 * 
 * @param dateString - Date string in ISO format or any valid date format
 * @returns Formatted date in "29 jul, 24" format
 * 
 * @example
 * ```typescript
 * formatDate("2024-07-29"); // "29 jul, 24"
 * formatDate("2025-01-15"); // "15 jan, 25"
 * ```
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '');
  const year = date.getFullYear().toString().slice(-2);
  
  return `${day} ${month}, ${year}`;
};

/**
 * Combines date formatting and reading time into a single string.
 * Useful for displaying blog post metadata information in a consolidated format.
 * 
 * @param dateString - The post date string
 * @param content - The post content to calculate reading time
 * @returns Formatted string with date and reading time
 * 
 * @example
 * ```typescript
 * const metadata = formatDateAndReadingTime("2024-07-29", "Post content...");
 * console.log(metadata); // "29 jul, 24 | Leitura: 9min"
 * ```
 */
export const formatDateAndReadingTime = (dateString: string, content: string): string => {
  const formattedDate = formatDate(dateString);
  const readingTime = calculateReadingTime(content);
  const formattedReadingTime = formatReadingTime(readingTime);
  
  return `${formattedDate} | Leitura: ${formattedReadingTime}`;
}; 