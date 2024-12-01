<template>
<section v-if="content" class="product-card product-card--order">
    <div>
        <div class="d-flex align-center">
            <div v-if="content?.content?.images && content?.content?.images.length" class="mr-2">
                <a class="d-flex justify-center" :title="content?.content?.title">
                    <img class="product-card__image" :src="content?.content.images[0]" :alt="content?.content?.title" />
                </a>
            </div>

            <div class="pl-2">
                <h3 class="t14 w700 mb-2">
                    {{ content?.content?.title }}
                </h3>
            </div>
        </div>
        <div class="d-flex align-center justify-space-between add-to-basket--minimal mt-4">
            <div v-if="content.count > 0 && content?.content.availabilityStatus === 'In Stock'" class="product-card__product-count bg-transparent d-flex align-center">
                <v-icon icon="mdi-plus" color="primary" @click="increaseCount()" />
                <span class="t14 w700  ">
                    {{count}}
                </span>

                <v-icon v-if="count === 1" @click="decreaseCount()" icon="mdi-trash-can-outline" color="primary" />
                <v-icon v-else icon="mdi-minus" color="primary" @click="decreaseCount()" />
            </div>

            <div>
                <div v-if="content.price" class="d-flex align-center justify-end">
                    <span class="t14 w700  product-card__price-info__price product-card__price-info__price--main ">
                       {{content.content.price}} $
                    </span>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            reloadingPage: false,
            screenType: 'desktop',
            count: 0
        }
    },

    props: {
        /**
         * Content
         */
        content: Object,
    },
    
    methods: {
        /**
         * Increase count of the product in the basket
         */
        increaseCount() {
            this.$store.commit("increase_count", this.content?.content.id);
            this.updateCount();
        },

        /**
         * Decrease count of the product in the basket
         */
        decreaseCount() {
            this.$store.commit("decrease_count", this.content?.content.id);
            this.updateCount();
        },

        /**
         * Update the count
         */
        updateCount() {
            const basket = this.$store.getters["get_basket"];

            const data = basket.find((item) => item ?.id === this.content?.content ?.id);

            if(data){
                this.count = data ?.count;
            }
        },
    },

    mounted() {
        this.updateCount();
    },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/components/product-card.scss';

$parent: 'product-card';

.#{$parent} {
    &--order {
        flex-direction: row;
        display: block !important;
    }
}
</style>
