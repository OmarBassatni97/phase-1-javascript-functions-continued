// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(effect = "*") {
    return function (anything = 'special'){
        return `You are ${effect}${anything}${effect}!`
    }
}