<script setup>

import TimeLineItem from "@/components/TimeLineItem.vue"
import { validateTimelineItems } from "@/validators";

defineProps({

    timelineItems: {
        required: true,
        type: Array,
        validator: validateTimelineItems
    }

})

</script>


<template>

    <div class=" mt-7">

<TimeLineItem 
    v-for="timelineItem in timelineItems"
    :key="timelineItem.hour" 
    :timeline-item="timelineItem"/>

    </div>

    
</template>