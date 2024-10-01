<template>
    <div ref="carouselEl" class="f-carousel">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.css';
import { Autoplay } from '@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.autoplay.css';

const props = defineProps<{
    options?: unknown;
    autoplay?: boolean;
}>();

const carousel = ref(null);
const carouselEl = ref(null);

const initCarousel = () => {
    carousel.value = new Carousel(
        carouselEl.value,
        props.options,
        props.autoplay ? { Autoplay } : null
    );
};
const destroyCarousel = () => {
    carousel.value?.destroy();
};
const slideNext = () => {
    carousel.value?.slideNext();
};
const slidePrev = () => {
    carousel.value?.slidePrev();
};

defineExpose({
    carousel,
    initCarousel,
    destroyCarousel,
    slideNext,
    slidePrev,
});

onMounted(() => {
    initCarousel();
});
</script>
