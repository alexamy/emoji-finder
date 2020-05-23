<script>
  import Emoji from './Emoji.svelte';
  import getEmojis from './helpers/getEmojis';

  const emojis = getEmojis();
</script>

<main>
  {#each emojis as emoji (emoji.codePoint)}
    <Emoji character={emoji.character} slug={emoji.slug}/>
  {/each}
</main>
