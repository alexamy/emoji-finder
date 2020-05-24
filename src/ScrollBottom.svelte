<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let precision;
  let scrollY, innerHeight;

  const handleScroll = e => {
    const scrollEnd = scrollY + innerHeight;
    const { scrollHeight } = document.body;

    const windowEnd = Math.abs(scrollHeight - scrollEnd) < precision;
    if(windowEnd) {
      dispatch('scrollToBottom');
    }
  }
</script>

<svelte:window bind:scrollY bind:innerHeight on:scroll={handleScroll}/>
<slot>
</slot>
