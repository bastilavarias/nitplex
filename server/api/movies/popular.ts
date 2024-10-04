import { useTMDBConfig } from '@/composables/useTMDBConfig';

export default defineEventHandler(async () => {
    const config = useTMDBConfig();

    return await $fetch(
        `/movie/popular?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        config
    );
});
