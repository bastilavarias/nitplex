export function useSlugify(text: string): string {
    return text
        .toLowerCase()
        .trim()
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple hyphens with a single hyphen
        .replace(/^-+/, '') // Trim hyphens from the start
        .replace(/-+$/, ''); // Trim hyphens from the end
}
