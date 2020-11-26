import { writable } from 'svelte/store'
import shuffle from './shuffle'
import images from '../advent.json'

const states = window.localStorage.xmas 
    ? JSON.parse(window.localStorage.xmas)
    : Array(25).fill(false)

states[24] = true

const initial = shuffle(images.map((image, i) => ({
    id: i,
    image,
    open: states[i]
})))

const today = (new Date()).getDate()

const checkDate = number => number <= today

export const items = (() => {
    const { subscribe, update } = writable(initial)

    const open = id => {
        if (checkDate(id+1)) { // +1 because dates start from 1
            update(old => old.map(item => item.id === id ? {...item, open: true} : item))
        }
    }

    subscribe(v => {
        const states = [...v].sort((a, b) => a.id < b.id ? -1 : 1).map(i => i.open)
        window.localStorage.xmas = JSON.stringify(states)
    })

    return {
        open,
        subscribe
    }
})()
