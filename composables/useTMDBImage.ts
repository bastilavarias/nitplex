export function useTMDBImage(path: string, type: string = 'poster'): string {
    const url = {
        poster: 'https://image.tmdb.org/t/p/w342',
        cover: 'https://image.tmdb.org/t/p/original',
    };

    return `${url[type]}${path}`;
}
