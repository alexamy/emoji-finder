<script>
  import ScrollBottom from './ScrollBottom.svelte';
  import Input from './Input.svelte';
  import Emoji from './Emoji.svelte';
  import getEmojis from './helpers/getEmojis';

  export let maxLength = 20;

  const emojisFull = [...getEmojis()];
  let emojis = emojisFull;

  $: emojisView = emojis.slice(0, maxLength);

  const handleInput = e => {
    const { value } = e.target;
    emojis =
      value
        ? emojisFull.filter(e => e.slug.includes(value))
        : emojisFull;
    window.scrollTo(0, 0);
  }

  const addEmojis = e => {
    emojisView = emojis.slice(0, emojisView.length + maxLength);
  }
</script>

<ScrollBottom precision={50} on:scrollToBottom={addEmojis}>
  <main>
    <Input on:input={handleInput} />
    <div class="wrapper">
      {#if emojisView.length}
        {#each emojisView as emoji (emoji.codePoint)}
          <Emoji character={emoji.character} slug={emoji.slug}/>
        {/each}
      {:else}
        No emojis found.
      {/if}
    </div>

    {#if emojisView.length < emojis.length }
      Loading...
    {/if}
  </main>
</ScrollBottom>

<style>
  .wrapper {
    margin: 10px 0;
  }
</style>
