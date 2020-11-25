import { cubicIn } from 'svelte/easing'
    
export function openDoor(node, params) {
    const {
        delay = 0,
        duration = 1000,
        easing = cubicIn
    } = params

    return {
        delay,
        duration,
        easing,
        css: (t, v) => `
            clip-path: polygon(
                0 0,
                0 100%,
                ${100 * t}% ${100 - (20 * v)}%,
                ${100 * t}% ${20 * v}%
            );
            z-index: 1;
        `
    }
}