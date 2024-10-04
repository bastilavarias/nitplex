<template>
    <section class="grid grid-cols-12 gap-5">
        <div class="col-span-9 space-y-10">
            <div class="space-y-8">
                <div class="flex items-center space-x-1">
                    <FlameIcon class="w-8 h-8" />
                    <h2 class="text-2xl font-bold">Popular Today</h2>
                </div>
                <div class="grid grid-cols-5 gap-4">
                    <PreviewCard
                        v-for="(media, index) in movies.popular"
                        size="small"
                        :media="media"
                        :key="index"
                    />
                </div>
            </div>
            <div class="space-y-8">
                <h2 class="text-2xl font-bold">In Theatres</h2>
                <FeaturedMovieHero :movies="movies.nowPlaying" />
            </div>
            <div class="space-y-8">
                <div class="flex items-center">
                    <h2 class="text-2xl font-bold">Top Rated</h2>
                </div>
                <div class="grid grid-cols-5 gap-4">
                    <PreviewCard
                        v-for="(media, index) in movies.topRated"
                        size="small"
                        :media="media"
                        :key="index"
                    />
                </div>
            </div>
            <FeaturedAnimeHero />
            <div class="space-y-8">
                <div class="flex items-center">
                    <h2 class="text-2xl font-bold">Latest Animes</h2>
                </div>
                <div class="grid grid-cols-5 gap-4">
                    <PreviewCard
                        v-for="(media, index) in movies.animes"
                        size="small"
                        :media="media"
                        :key="index"
                    />
                </div>
            </div>
            <div class="space-y-8">
                <div class="flex items-center">
                    <h2 class="text-2xl font-bold">All Uploads</h2>
                </div>
                <div class="grid grid-cols-5 gap-4">
                    <PreviewCard
                        v-for="(media, index) in movies.all"
                        size="small"
                        :media="media"
                        :key="index"
                    />
                </div>
                <div class="text-center py-5">
                    <Button>Next </Button>
                </div>
            </div>
        </div>
        <div class="col-span-3 space-y-5">
            <EducationalAlert />
            <!--
            <FilterCard />
-->
        </div>
    </section>
</template>

<script setup lang="ts">
import { FlameIcon } from 'lucide-vue-next';

useHead({
    title: 'Home',
});

const nowPlayingMovies = ref([]);
const popularMovies = ref([]);
const topRatedMovies = ref([]);

const getNowPlayingMovies = await useFetch('/api/movies/now-playing');
const getPopularMovies = await useFetch('/api/movies/popular');
const getTopRatedMovies = await useFetch('/api/movies/top-rated');

nowPlayingMovies.value = getNowPlayingMovies.data.value;
popularMovies.value = getPopularMovies.data.value;
topRatedMovies.value = getTopRatedMovies.data.value;

const movies = computed(() => {
    return {
        nowPlaying: nowPlayingMovies.value.results.slice(0, 5),
        popular: popularMovies.value.results.slice(0, 5),
        topRated: topRatedMovies.value.results.slice(0, 10),
        animes: popularMovies.value.results.slice(0, 5),
        all: popularMovies.value.results,
    };
});
</script>
