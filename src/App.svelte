<script>
  import Input from './Input.svelte';
  import Emoji from './Emoji.svelte';
  import getEmojis from './helpers/getEmojis';

  export let maxLength = 20;
  let scrollY, innerHeight, body;

  const emojisFull = [...getEmojis()];
  let emojis = emojisFull;

  $: emojisView = emojis.slice(0, maxLength);

  const handleInput = e => {
    const { value } = e.target;
    emojis =
      value
        ? emojisFull.filter(e => e.slug.includes(value))
        : emojisFull;
  }

  const addEmojis = e => {
    emojisView = emojis.slice(0, emojisView.length + maxLength);
  }

  const handleScroll = e => {
    const scrollEnd = scrollY + innerHeight;
    const { scrollHeight } = document.body;
    const windowEnd = Math.abs(scrollHeight - scrollEnd) < 50;
    if(windowEnd) addEmojis();
  }
</script>

<svelte:window bind:innerHeight bind:scrollY on:scroll={handleScroll}/>

<main>
  <Input on:input={handleInput} />
  {#if emojisView.length}
    {#each emojisView as emoji (emoji.codePoint)}
      <Emoji character={emoji.character} slug={emoji.slug}/>
    {/each}
  {:else}
    No emojis found.
  {/if}

  {#if emojisView.length < emojis.length }
    <button on:click={addEmojis}>Show more</button>
  {/if}
</main>
