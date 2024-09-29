<template>
    <section class="grid grid-cols-12 gap-4">
        <div class="col-span-9 space-y-10">
            <div>
                <div
                    class="w-full relative bg-[url('https://image.tmdb.org/t/p/original/peVe0NQNdZMXwtTohnv8iwJQb2d.jpg')] bg-no-repeat bg-center bg-cover"
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
                            <Button class="space-x-2" size="lg"
                                ><PlayIcon class="w-5 h-5" />
                                <span>Watch now</span></Button
                            >
                        </div>
                    </div>
                </div>
                <div>
                    <Card class="w-full border-0">
                        <div
                            class="bg-[url('https://img.bunnyccdn.co/_r/1366x768/100/d0/57/d057bc74b98214c7fd9ca6192aa3ce50/d057bc74b98214c7fd9ca6192aa3ce50.jpg')] bg-no-repeat bg-center bg-cover"
                            style="height: 15rem"
                        ></div>
                        <CardFooter
                            class="bg-primary flex justify-between py-5"
                        >
                            <div class="space-y-1">
                                <a
                                    href="#"
                                    class="text-2xl font-bold tracking-tight transition-colors hover:text-primary"
                                >
                                    Anime name
                                </a>
                                <p class="text-md">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Aspernatur blanditiis
                                    expedita in mollitia nostrum obcaecati
                                    perferendis porro sapiente totam unde.
                                </p>
                            </div>
                            <div class="flex justify-center">
                                <Button
                                    variant="secondary"
                                    class="space-x-2 bg-white text-black rounded-full h-20 px-12"
                                >
                                    <span class="text-2xl"
                                        >Watch now</span
                                    ></Button
                                >
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div class="space-y-8">
                <div class="flex items-center space-x-1">
                    <FlameIcon class="w-10 h-10" />
                    <h2 class="text-4xl">Popular</h2>
                </div>
                <div class="flex justify-between">
                    <PreviewCard v-for="n in 4" :key="n" />
                </div>
            </div>
            <div class="space-y-8">
                <div class="flex items-center space-x-2">
                    <ClockIcon class="w-10 h-10" />
                    <h2 class="text-4xl">Recently Uploaded</h2>
                </div>
                <div class="flex justify-between flex-wrap gap-4">
                    <PreviewCard v-for="n in 12" :key="n" />
                </div>
            </div>
        </div>
        <div class="col-span-3">Filter here</div>
    </section>
</template>

<script setup lang="ts">
import { PlayIcon, FlameIcon, ClockIcon } from 'lucide-vue-next';
</script>
