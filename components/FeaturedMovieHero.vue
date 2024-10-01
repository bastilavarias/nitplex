<template>
    <BaseCarousel ref="carouselEl" :options="options">
        <BaseCarouselSlide v-for="n in 5" :key="n">
            <div
                class="w-full bg-[url('https://image.tmdb.org/t/p/original/peVe0NQNdZMXwtTohnv8iwJQb2d.jpg')] bg-no-repeat bg-center bg-cover rounded relative"
                style="height: 30rem"
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
                                Movie name
                            </a>
                            <p class="text-md">
                                2024 | Action, Thriller, Drama
                                <Badge class="text-md">6.6</Badge>
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
