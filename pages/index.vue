<template>
  <div>
      <section class="POKEDEX">
        <div class="columns board is-centered">
          <input
            type="text"
            placeholder="Procurar"
            class="input is-medium"
          />
<!--          <button></button> -->
        </div>
      </section>
    </div>
</template>

<script>
import Card from '~/components/Card'
import '~/components/app.js'
import '~/components/style.css'

export default {
  name: 'IndexPage',
  components: {
    Card,
  },
}
</script>
