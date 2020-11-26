<script>
	import { fade } from 'svelte/transition'
	import { items } from './store'
	import Item from './components/Item.svelte'

	let innerHeight = 0
	let innerWidth = 0
	let popup

	$: dimension = Math.min(innerHeight - 12, innerWidth - 12)

	const openPopup = ev => popup = ev.detail
	const closePopup = () => popup = false
	const handleKey = ev => {
		if (popup && ev.key === 'Escape') {
			closePopup()
		} 
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth on:keyup={handleKey}></svelte:window>

<main style="--dimension: {dimension}px" >
	{#each $items as item}
		<Item {...item} on:click={openPopup} />
	{/each}

	{#if popup}
		<div on:click={closePopup}>
			<img src={popup} alt="0" in:fade >
		</div>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: .25em;
		height: var(--dimension);
		width: var(--dimension);
	}

	div {
		align-items: center;
		display: flex;
		height: 100vh;
		justify-content: center;
		left: 0;
		position: fixed;
		top: 0;
		width: 100vw;
	}

	img {
		background: white;
		height: var(--dimension);
		width: var(--dimension);
	}
</style>
