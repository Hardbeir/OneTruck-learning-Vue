import { 
    PAGE_TIMELINE, 
<<<<<<< HEAD
    HOURS_IN_DAY ,
=======
    HOURS_IN_DAY,
>>>>>>> bdd51f6ce37f76fbc2c840f85211017f8679a9e8
    MIDNIGHT_HOUR
} from './constants'
import { isPageValid } from './validators'

export function normalizePageHash() {
    const page = window.location.hash.slice(1)

    if(isPageValid(page)) {

        return page

    }

    window.location.hash = PAGE_TIMELINE

    return PAGE_TIMELINE


}

export function generateTimelineItems (){

    const timelineItems = []

        for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++){

    timelineItems.push({hour})

    }

    return timelineItems

}