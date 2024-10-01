<template>
    <BaseCarousel ref="carouselEl" :options="options" autoplay>
        <BaseCarouselSlide v-for="n in 5" :key="n">
            <Card class="w-full border-0 rounded">
                <div
                    class="bg-[url('https://img.bunnyccdn.co/_r/1366x768/100/d0/57/d057bc74b98214c7fd9ca6192aa3ce50/d057bc74b98214c7fd9ca6192aa3ce50.jpg')] bg-no-repeat bg-center bg-cover"
                    style="height: 15rem"
                ></div>
                <CardFooter class="bg-primary flex justify-between py-5">
                    <div class="space-y-1">
                        <a
                            href="#"
                            class="text-2xl font-bold tracking-tight transition-colors hover:underline"
                        >
                            Anime name
                        </a>
                        <p class="text-md">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aspernatur blanditiis expedita in mollitia
                            nostrum obcaecati perferendis porro sapiente totam
                            unde.
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <Button
                            variant="secondary"
                            class="space-x-2 bg-white text-black rounded-full h-16 px-12 hover:bg-secondary hover:text-white"
                        >
                            <span class="text-xl font-bold"
                                >Watch now</span
                            ></Button
                        >
                    </div>
                </CardFooter>
            </Card>
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
        classes: {
            list: 'f-carousel__dots dots-container',
            hasDots: '',
        },
        dynamicFrom: 2,
    },
    transition: 'classic',
    Autoplay: {
        timeout: 3000,
        showProgress: false,
    },
});
</script>
