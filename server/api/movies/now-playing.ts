import { useTMDBConfig } from '@/composables/useTMDBConfig';

export default defineEventHandler(async () => {
    const config = useTMDBConfig();

    return await $fetch(
        `/movie/now_playing?include_adult=true&include_video=false&language=en-US&page=1`,
        config
    );
});
