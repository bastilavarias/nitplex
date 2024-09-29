<template>
    <header
        id="header"
        ref="header"
        class="w-full transition-transform duration-300 md:py-12"
        :class="[isShow ? 'translate-y-0' : '-translate-y-96']"
    >
        <div :class="[isShow ? 'opacity-100' : 'opacity-0']"></div>
        <div class="flex items-center justify-between">
            <AppLogo />
            <nav class="hidden lg:block">
                <AppHeaderLinks type="desktop" />
            </nav>
            <!--
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
                <Button variant="outline">
                    <Icon
                        icon="radix-icons:moon"
                        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    />
                    <Icon
                        icon="radix-icons:sun"
                        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    />
                    <span class="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem @click="mode = 'light'">
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem @click="mode = 'dark'">
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem @click="mode = 'auto'">
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

-->
        </div>
    </header>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';

const mode = useColorMode();

mode.value = 'dark';

const isOpen = ref<boolean>(false);
const isShow = ref<boolean>(true);
const lastScrollTop = ref<number>(0);
const header = ref<HTMLElement | null>(null);
let timeout: ReturnType<typeof setTimeout>;

provide('isOpen', isOpen);

watch(isOpen, (value) => {
    if (value) document.addEventListener('click', detectClickOutside);
});

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
    document.body.classList.toggle('overflow-y-hidden');
};

const detectClickOutside = (event: Event) => {
    if (!(event.target as HTMLElement).closest('.hamburger')) {
        isOpen.value = false;
        document.body.classList.remove('overflow-y-hidden');
    }
};

const handleScroll = () => {
    clearTimeout(timeout);
    if (header.value?.classList.contains('hidden')) return;

    if (window.scrollY > lastScrollTop.value) {
        isShow.value = false;
    } else if (window.scrollY < lastScrollTop.value) {
        isShow.value = true;
    }
    lastScrollTop.value = window.scrollY <= 0 ? 0 : window.scrollY;

    timeout = setTimeout(() => {
        isShow.value = true;
    }, 500);
};
</script>
