<script>
  import Input from './Input.svelte';
  import Emoji from './Emoji.svelte';
  import getEmojis from './helpers/getEmojis';

  const emojisFull = getEmojis();
  let emojis = [...emojisFull];

  const handleInput = e => {
    const { value } = e.target;
    emojis = value
      ? emojisFull.filter(e => e.slug.includes(value))
      : [...emojisFull];
  }
</script>

<main>
  <Input on:input={handleInput} />
  {#each emojis as emoji (emoji.codePoint)}
    <Emoji character={emoji.character} slug={emoji.slug}/>
  {/each}
</main>
