<script>
  import getEmojis from './helpers/getEmojis';

  const emojis = getEmojis();
</script>

<main>
  {#each emojis as emoji (emoji.codePoint)}
    <p>{emoji.character}</p>
  {/each}
</main>
