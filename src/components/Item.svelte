<script>
    export let day
    export let isOpen = false
    export let image 
</script>

<div>
    {#if isOpen}
        <!--<img src={image} alt="">-->
        <span>Day {day}</span>
    {:else}
        <span>{day}</span>
    {/if}
</div>
