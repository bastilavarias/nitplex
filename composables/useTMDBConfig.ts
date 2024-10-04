export function useTMDBConfig() {
    const config = useRuntimeConfig();

    return {
        baseURL: 'https://api.themoviedb.org/3',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTllNTFkY2FlMzk5YzUzY2UyMzJhZDI1N2YyNWM5NSIsIm5iZiI6MTcyODA0MjA2Mi4yNTc5NTksInN1YiI6IjYzZGY3YmIyZTU1OTM3MDA3Yjc3ZGQ3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sDQwb4plwTeVQtPxhzpU7KNZqZRlNjCXDPzx9_R_V-Q`,
        },
    };
}
