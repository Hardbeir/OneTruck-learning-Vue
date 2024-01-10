<script setup>

import TimeLineItem from "@/components/TimeLineItem.vue"

defineProps(['timelineItems'])

</script>


<template>

    <div class=" mt-7">

<TimeLineItem 
    v-for="timelineItem in timelineItems"
    :key="timelineItem.hour" 
    :timeline-item="timelineItem"/>

    </div>

    
</template>