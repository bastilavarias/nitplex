<template>
    <ul :class="[`flex ${navLinksClass}`]">
        <li
            class="text-xl lg:text-base xl:text-lg"
            v-for="link in links"
            :key="link.text"
            :link="link"
        >
            <NuxtLink
                :to="link.url"
                class="transition-colors hover:text-primary"
                active-class="text-primary font-medium"
            >
                {{ link.text }}
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        type?: string;
    }>(),
    {
        type: 'mobile',
    }
);

const links = ref([
    {
        text: 'Home',
        url: '/',
    },
    {
        text: 'Cinema',
        url: '/cinema',
    },
    {
        text: 'About',
        url: '/about',
    },
]);

const navLinksClass = computed<string>(() => {
    return props.type === 'mobile'
        ? 'flex-col space-y-6 h-screen px-8 py-28 landscape:justify-around'
        : 'items-center gap-x-8 xl:gap-x-14';
});
</script>
