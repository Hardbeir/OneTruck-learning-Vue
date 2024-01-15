import { HOURS_IN_DAY, NAV_ITEMS, MIDNIGHT_HOUR } from "./constants";

export function isPageValid(page) {

    return Object.keys(NAV_ITEMS).includes(page)

}

export function validateTimelineItems(timelineItems){
    return timelineItems.every(isTimelineItemValid)
}

export function isTimelineItemValid({hour}){

<<<<<<< HEAD
    return isHourValid(hour)
=======
    return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOURS_IN_DAY
>>>>>>> bdd51f6ce37f76fbc2c840f85211017f8679a9e8

}

export function validateSelectOptions(options){
    return options.every(isSelectOptionValid)
}

<<<<<<< HEAD
function isSelectOptionValid({value, label}) {
    return isNumber(value) && isString(label)
}

export function isUndefindeOrNull(value){
    return isUndefined(value) || isNull(value)
}

export function isNumberOrNull (value) {
        return isNumber(value) || isNull(value)
}

function isNull(value){
    return value === null
}

function isUndefined(value){
    return value === undefined
}

function isNumber(value){
    return typeof value === 'number'
}

function isString(label) {
    return typeof label =='string'
}

function isBetween(value, start, end){
    return value >= start && value <= end
}

function isHourValid(hour) {
    return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
=======
    return options.every(isSelectOptionValid)

}

function isSelectOptionValid({value, label}){

    return typeof value ==='number' && typeof label =='string'
>>>>>>> bdd51f6ce37f76fbc2c840f85211017f8679a9e8
}