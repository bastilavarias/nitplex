<template>
    <BaseCarousel ref="carouselEl" :options="options">
        <BaseCarouselSlide v-for="(movie, index) in movies" :key="index">
            <div
                :style="{
                    backgroundImage: `url('${useTMDBImage(movie.backdrop_path, 'cover')}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '30rem',
                }"
                class="w-full rounded relative"
            >
                <div
                    class="absolute top-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black z-0"
                ></div>
                <div
                    class="absolute top-0 bottom-0 w-full h-full flex flex-col justify-between"
                >
                    <div></div>
                    <div class="flex justify-between items-center px-10">
                        <div class="pb-10">
                            <a
                                href="#"
                                class="text-4xl font-bold tracking-tight transition-colors hover:text-primary"
                            >
                                {{ movie.title }}
                            </a>
                            <p class="text-md">
                                2024 | Action, Thriller, Drama
                                <Badge class="text-md">{{
                                    useFormatRating(movie.vote_average)
                                }}</Badge>
                            </p>
                        </div>
                        <Button class="space-x-2" size="lg"
                            ><PlayIcon class="w-5 h-5" />
                            <span>Watch now</span></Button
                        >
                    </div>
                </div>
            </div>
            <div class="dots-container"></div>
        </BaseCarouselSlide>
    </BaseCarousel>
</template>

<script setup lang="ts">
import { PlayIcon } from 'lucide-vue-next';
import { useTMDBImage } from '@/composables/useTMDBImage';
import { useFormatRating } from '@/composables/useFormatRating';
import { cn } from '@/lib/utils';

const props = defineProps({
    movies: {
        type: Array,
        required: true,
    },
});

const options = reactive({
    Panzoom: {
        touch: false,
    },
    Navigation: true,
    Dots: {
        minCount: 2,
    },
    transition: 'classic',
    Autoplay: {
        timeout: 3000,
        showProgress: false,
    },
});
</script>
