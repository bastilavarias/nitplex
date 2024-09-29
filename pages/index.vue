<template>
    <section
        class="w-full relative bg-[url('https://image.tmdb.org/t/p/original/peVe0NQNdZMXwtTohnv8iwJQb2d.jpg')] bg-no-repeat bg-center bg-cover"
        style="height: 40rem"
    >
        <div
            class="absolute top-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black z-0"
        ></div>
        <div
            class="absolute top-0 bottom-0 w-full h-full flex flex-col justify-between"
        >
            <div></div>
            <div class="flex justify-between items-center px-10">
                <div class="space-y-3 pb-10">
                    <a
                        href="#"
                        class="text-2xl font-bold tracking-tight transition-colors hover:text-primary xs:text-3xl sm:text-6xl"
                    >
                        Movie name
                    </a>
                    <p class="text-md">
                        2024 | Action, Thriller, Drama
                        <Badge class="text-md">6.6</Badge>
                    </p>
                </div>
                <Button class="space-x-2"
                    ><PlayIcon class="w-5 h-5" /> <span>Watch now</span></Button
                >
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { PlayIcon } from 'lucide-vue-next';

const featuredMovieImageURL =
    'https://image.tmdb.org/t/p/original/peVe0NQNdZMXwtTohnv8iwJQb2d.jpg';
</script>
