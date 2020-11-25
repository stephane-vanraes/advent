import { writable } from 'svelte/store'
import images from '../advent.json'

const states = window.localStorage.xmas 
    ? JSON.parse(window.localStorage.xmas)
    : Array(24).fill(false)

const initial = images.map((image, i) => ({
    image,
    open: states[i]
}))

const today = (new Date()).getDate()
const checkDate = number => number <= today

export const items = (() => {
    const { subscribe, update } = writable(initial)

    const open = i => {
        if (checkDate(i)) {
            update(old => old.map((item, idx) => idx === i ? {...item, open: true} : item))
        }
    }

    subscribe(v => {
        const states = v.map(i => i.open)
        window.localStorage.xmas = JSON.stringify(states)
    })

    return {
        open,
        subscribe
    }
})()
