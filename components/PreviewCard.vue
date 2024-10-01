<template>
    <div class="flex h-full w-fit flex-col">
        <NuxtLink :to="`/${slug}/${media.id}`" class="group grow">
            <img
                class="h-full grow rounded-lg object-cover object-center drop-shadow-2xl transition-opacity group-hover:opacity-70"
                :src="media.posterPath"
                :alt="title"
                width="auto"
            />
        </NuxtLink>
        <div class="mt-2 flex items-center justify-between gap-x-1">
            <NuxtLink
                :to="`/${slug}/${media.id}`"
                class="w-24 truncate text-lg transition-colors hover:text-primary sm:w-36"
                :title="title"
            >
                {{ title }}
            </NuxtLink>
            <Badge v-if="rating" class="text-sm font-medium">
                {{ rating }}
            </Badge>
        </div>
        <p class="text-custom-foreground-secondary text-sm">
            {{ releaseDate }}
        </p>
    </div>
</template>

<script setup lang="ts">
// import type { Movie, TV } from '~/types/media';
//
// const props = defineProps({
//     media: {
//         type: Object as PropType<Movie | TV>,
//         required: true,
//     },
// });

const isMovie = Math.random() < 0.5;

const slug = isMovie ? 'deadpool-and-wolverine' : 'one-piece';
const title = isMovie ? 'Deadpool & Wolverine' : 'One Piece';
const releaseDate = isMovie ? '2024' : '1999';
const rating = isMovie ? '6.9' : '8.5';
const media = {
    id: 5,
    title: isMovie ? 'Deadpool & Wolverine' : 'One Piece',
    overview:
        'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.',
    posterPath: isMovie
        ? 'https://image.tmdb.org/t/p/w342/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg'
        : 'https://i2.wp.com/9anime.by/wp-content/uploads/2024/03/One-Piece-1.jpg',
};

/*
function onNavigate() {
    navigateTo({ path: `/${slug}/${props.media.id}` });
}
*/
</script>
