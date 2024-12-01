<template>
<main class="v-cart">
    <h1 class="ov-h h-0">Cart</h1>
    <v-container class="pt-0">
        <cartStepper v-if="screenType === 'desktop'" :data="userBasket" />
        <CartMobileStepper v-if="screenType === 'mobile'" :data="userBasket" />
    </v-container>
</main>
</template>

<script>
export default {
    data() {
        return {
            screenType: 'desktop',
        }
    },

    computed: {
        userBasket() {
            try {
                const basket = this.$store.getters['get_basket']
                return basket
            } catch (e) {
                return []
            }
        },
    },

    setup() {
          const title = ref('Sopping site | Cart page')

          useHead({
              title,
          });
          return {
              title
          }
      },


    mounted() {
        /**
         * Check screen size
         */
        window.innerWidth < 769 ? this.screenType = 'mobile' : this.screenType = 'desktop';
    },
}
</script>
