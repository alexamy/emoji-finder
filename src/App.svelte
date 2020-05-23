<script>
  import Input from './Input.svelte';
  import Emoji from './Emoji.svelte';
  import getEmojis from './helpers/getEmojis';

  export let maxLength = 20;

  const emojisFull = getEmojis();
  let emojis = emojisFull;

  $: emojisView = emojis.slice(0, maxLength);

  const handleInput = e => {
    const { value } = e.target;
    emojis =
      value
        ? emojisFull.filter(e => e.slug.includes(value))
        : emojisFull;
  }
</script>

<main>
  <Input on:input={handleInput} />
  {#if emojisView.length}
    {#each emojisView as emoji (emoji.codePoint)}
      <Emoji character={emoji.character} slug={emoji.slug}/>
    {/each}
  {:else}
    No emojis found.
  {/if}
</main>
