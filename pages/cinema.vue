<template>
    <section class="grid grid-cols-12 gap-5">
        <div class="col-span-9 space-y-5">
            <div class="space-y-8">
                <div class="flex items-center space-x-2">
                    <MonitorIcon class="w-8 h-8" />
                    <h2 class="text-2xl font-bold">Showing</h2>
                </div>
            </div>
            <div
                class="bg-secondary flex flex-col items-center py-2 px-5 w-full"
                style="height: 40rem"
            ></div>
        </div>
        <div class="col-span-3 space-y-5">
            <div class="space-y-8">
                <div class="flex items-center space-x-1">
                    <ListVideoIcon class="w-8 h-8" />
                    <h2 class="text-2xl font-bold">Up Next</h2>
                </div>
                <PreviewCard size="full" v-for="n in 3" :key="n" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ListVideoIcon, MonitorIcon } from 'lucide-vue-next';
</script>
