<script setup>

import TimeLineItem from "@/components/TimeLineItem.vue"
import { isTimelineItemValid } from "@/validators";

defineProps({

    timelineItems: {
        required: true,
        type: Array,
        validator(timelineItems) {

            return timelineItems.every(isTimelineItemValid)

        }
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