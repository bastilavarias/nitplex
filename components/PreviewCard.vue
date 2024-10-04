<template>
    <div class="flex h-full w-fit flex-col" v-if="size === 'small'">
        <NuxtLink :to="`/${slug}/${media.id}`" class="group grow">
            <img
                class="h-full grow rounded-lg object-cover object-center drop-shadow-2xl transition-opacity group-hover:opacity-70"
                :src="poster"
                :alt="media.title"
                width="auto"
            />
        </NuxtLink>
        <div class="mt-2 flex items-center justify-between gap-x-1">
            <NuxtLink
                :to="`/${slug}/${media.id}`"
                class="w-24 truncate text-lg transition-colors hover:text-primary sm:w-36"
                :title="media.title"
            >
                {{ media.title }}
            </NuxtLink>
            <Badge v-if="rating" class="text-sm font-medium">
                {{ rating }}
            </Badge>
        </div>
        <p class="text-custom-foreground-secondary text-sm">
            {{ rating }}
        </p>
    </div>
    <div class="flex gap-4" v-if="size === 'full'">
        <img
            class="h-[12.rem] w-28 cursor-pointer rounded-lg object-cover drop-shadow-2xl transition-opacity hover:opacity-70 xs:h-52 xs:w-32 md:h-56 md:w-36 xl:h-60 2xl:h-64"
            :src="poster"
            :alt="media.title"
            role="link"
        />
        <div>
            <NuxtLink
                :to="`/${slug}/${media.id}`"
                class="w-24 truncate text-lg transition-colors hover:text-primary sm:w-36"
                :title="media.title"
            >
                {{ media.title }}
            </NuxtLink>
            <p class="mt-1 space-x-4 text-sm sm:text-base">
                <span class="text-custom-foreground-secondary">{{
                    media.release_date
                }}</span>
                <Badge v-if="rating" class="text-sm font-medium">
                    {{ rating }}
                </Badge>
            </p>
            <p
                v-if="media.overview"
                :title="media.overview"
                class="mt-2 line-clamp-2 text-xs font-light sm:line-clamp-5 sm:text-sm md:line-clamp-2 xl:line-clamp-4 2xl:line-clamp-5"
            >
                {{ media.overview }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSlugify } from '@/composables/useSlugify';
import { useTMDBImage } from '@/composables/useTMDBImage';
import { useFormatRating } from '@/composables/useFormatRating';

const props = defineProps({
    media: {
        type: Object,
        required: true,
    },
    size: {
        type: String,
        default: 'small',
    },
});

const slug = useSlugify(props.media.title);
const poster = useTMDBImage(props.media.poster_path);
const rating = useFormatRating(props.media.vote_average);
</script>
