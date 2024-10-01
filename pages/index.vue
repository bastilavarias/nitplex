<template>
    <section class="grid grid-cols-12 gap-5">
        <div class="col-span-9 space-y-10">
            <div class="space-y-8">
                <div class="flex items-center space-x-1">
                    <FlameIcon class="w-8 h-8" />
                    <h2 class="text-2xl font-bold">Popular Today</h2>
                </div>
                <div class="grid grid-cols-5 gap-4">
                    <PreviewCard v-for="n in 5" :key="n" />
                </div>
            </div>
            <FeaturedMovieHero />
            <div class="space-y-8">
                <div class="flex items-center">
                    <h2 class="text-2xl font-bold">Latest Movies</h2>
                </div>
                <div class="grid grid-cols-5 gap-4">
                    <PreviewCard v-for="n in 10" :key="n" />
                </div>
            </div>
            <FeaturedAnimeHero />
            <div class="space-y-8">
                <div class="flex items-center">
                    <h2 class="text-2xl font-bold">Latest Animes</h2>
                </div>
                <div class="grid grid-cols-5 gap-4">
                    <PreviewCard v-for="n in 10" :key="n" />
                </div>
            </div>
            <div class="space-y-8">
                <div class="flex items-center">
                    <h2 class="text-2xl font-bold">All Uploads</h2>
                </div>
                <div class="grid grid-cols-5 gap-4">
                    <PreviewCard v-for="n in 20" :key="n" />
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
import { PlayIcon, FlameIcon } from 'lucide-vue-next';
</script>
