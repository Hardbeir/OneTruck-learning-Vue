import { HOURS_IN_DAY, NAV_ITEMS, MIDNIGHT_HOUR } from "./constants";

export function isPageValid(page) {

    return Object.keys(NAV_ITEMS).includes(page)

}

export function isTimelineItemValid({hour}){

    return isHourValid(hour)

}

export function validateSelectOptions(options){
    return options.every(isSelectOptionValid)
}

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
}