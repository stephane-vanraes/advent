<script>
    import { createEventDispatcher } from 'svelte'
    import { scale } from 'svelte/transition'
    import { items } from '../store'
    import { openDoor } from '../transitions/openDoor'

    export let id
    export let image
    export let open

    const dispatch = createEventDispatcher()
    const handleClick = () => dispatch('click', image)

</script>

<div on:click={() => items.open(id)} class:open>
    {#if open}
        <img 
            in:scale={{ delay: 500, duration: 1000 }} 
            src={image} 
            alt=""
            on:click={handleClick}
        >
    {:else}
        <div class="door" out:openDoor>
            <span>{id + 1}</span>
        </div>
    {/if}
</div>

<style>
    div {
        background-color: var(--primary);
		cursor: pointer;
		flex: 0 0 calc(20% - .25em);
		height: calc(20% - .25em);
		position: relative;
    }
    div.open {
        background-color: transparent;
    }
	img {
        height: 100%;
        object-fit: scale-down;
        pointer-events: all;
        width: 100%;
    }
    
	.door {
		align-items: center;
		background-color: var(--primary);
		display: flex;
		justify-content: center;
		flex: 1 0;
		font-size: 5vw;
		height: 100%;
		position: absolute;
		width: 100%;
    }
</style>
