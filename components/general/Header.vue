<template>
    <client-only>
        <header
            class="header header--desktop w-100"
            id="header--desktop">
            <v-container>
                <div class="header__inner d-flex align-center justify-space-between">
                    <div class="logo t16 w700">
                        Shopping Site
                    </div>
                    <div class="header__col2 d-flex align-center justify-end">
                        <a class="header__item header__item--basket cur-p" href="/cart" id="toggle-basket">
                            <v-badge
                                v-if="userBasket && userBasket.length"
                                color="primary"
                                class=""
                                :content="userBasket.length"
                                inline />
                            <v-icon icon="mdi-cart-minus" />
                        </a>
                    </div>
                </div>
            </v-container>
        </header>
    </client-only>
</template>
<script>

export default {
    name: "Desktop Header",

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
};
</script>
    
<style lang="scss">

$parent: 'header';

.#{$parent} {
    &--desktop {
        z-index: 10;
        padding: 4px;
        padding-bottom: 0 !important;
        box-shadow: 0px 2px 4px 0px rgba(97, 97, 97, 0.10);
        background: #fff;
        transition: opacity 0.3s ease-in-out;
        top: 0;
        right: 0;
        position: fixed;

        .#{$parent} {
            &__item {
                .v-icon {
                    color: #AEAEAE;
                }
                &--basket{
                    position: relative;
                    .v-badge{
                        position: absolute;
                        z-index: 2;
                        left: 5px;
                        top: -5px;
                    }
                }
            }
        }
    }
}
</style>
