<script>
	import { fade, scale } from 'svelte/transition'
	import { items } from './store'
	import { clickOutside } from './clickOutside'
	import { openDoor } from './openDoor'

	let innerHeight = 0
	let innerWidth = 0
	let modalImage

	$: dimension = Math.min(innerHeight - 12, innerWidth - 12)
</script>

<svelte:window bind:innerHeight bind:innerWidth></svelte:window>

<main style="--dimension: {dimension}px" >
	{#each $items as item, i}
		<div on:click={() => items.open(i)}>
			{#if item.open}
				<img 
					in:scale={{ delay: 500, duration: 1000 }} 
					src={item.image} 
					alt=""
					on:click={() => modalImage = item.image}
				>
			{:else}
				<div class="door" out:openDoor>
					<span>{i + 1}</span>
				</div>
			{/if}
		</div>
	{/each}
	<img src="/images/xmas.png" alt="" />
</main>

{#if modalImage}
	<div in:fade class="modal" 
		 use:clickOutside 
		 on:click={() => modalImage = false}
		 on:clickOutside={() => modalImage = false}
		 style="--dimension: {dimension}px">
		<img src={modalImage} alt=""> 
	</div>
{/if}

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
		cursor: pointer;
		flex: 0 0 calc(20% - .25em);
		height: calc(20% - .25em);
		position: relative;
	}

	div > img {
		height: 100%;
		width: 100%;
	}

	img {
		flex: 0 0 20%;
		height: 20%;
		object-fit: scale-down;
	}
	.door {
		align-items: center;
		background-color: white;
		display: flex;
		justify-content: center;
		flex: 1 0;
		font-size: 5vw;
		height: 100%;
		position: absolute;
		width: 100%;
	}

	.modal {
		background: white;
		height: var(--dimension);
		left: 50%;
		position: fixed;
		top: 50%;
		transform: translate(-50%, -50%);
		width: var(--dimension);
	}
</style>
