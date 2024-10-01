<template>
    <Alert>
        <RocketIcon class="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
            NITPLEX does not host any files on its servers. This site is
            intended solely for educational purposes regarding torrent
            technology. We do not promote piracy in any form. All content is
            provided by unaffiliated third parties.
        </AlertDescription>
    </Alert>
</template>

<script setup lang="ts">
import { RocketIcon } from 'lucide-vue-next';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
</script>
