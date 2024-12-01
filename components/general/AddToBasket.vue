<template>
<v-row class="add-to-basket add-to-basket--minimal ma-0">
    <div v-if="content?.availabilityStatus === 'In Stock'" class="d-flex justify-end">
        <template v-if="count === 0 || notSelected">
            <v-btn @click="addToCard(content)" height="24" icon="mdi-plus-box" color="primary" class="btn btn--submit minimal" />
        </template>

        <template v-else>
            <div class="product-card__product-count d-flex align-center">
                <v-icon icon="mdi-plus" color="primary" @click="increaseCount()" />
                <span class="t14 text-black mx-2">
                    {{count}}
                </span>
                <v-icon v-if="count === 1" @click="decreaseCount()" icon="mdi-trash-can-outline" color="primary" />
                <v-icon v-else icon="mdi-minus" color="primary" @click="decreaseCount()" />
            </div>
        </template>
    </div>
    
    <div v-else>
        <span class="t13 text-grey">Sold out</span>
    </div>
</v-row>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            notSelected: false,
            reloadingPage: false,
            count: 0
        }
    },

    props: {
        content: Object,
    },

    methods: {
        /**
         * Add to basket
         * @param {*} content 
         */
        addToCard(content) {
            const product = {
                id: content.id,
                content: content,
                count: 1,
            };
            this.$store.commit("set_basket", product);
            this.updateCount();
        },

        /**
         * Increase count of the product in the basket
         */
        increaseCount() {
            this.$store.commit("increase_count", this.content.id);
            this.updateCount();
        },

        /**
         * Decrease count of the product in the basket
         */
        decreaseCount() {
            this.$store.commit("decrease_count", this.content.id);
            this.updateCount();
        },

        /**
         * Update the count
         */
        updateCount() {
            const basket = this.$store.getters["get_basket"];
            const data = basket.find((item) => item ?.id === this.content ?.id);

            if (!data) {
                this.notSelected = true;
                this.count = 0;
            } else {
                this.notSelected = false;
                this.count = data ?.count;
            }
        },
    },

    mounted() {
        this.updateCount();
    },
}
</script>

<style lang="scss">
@import '~/assets/scss/components/product-card.scss';

.add-to-basket--minimal {
    .product-card__product-count {
        width: 80px;
        height: 30px;
        border-color: #9E9E9E;
        border-radius: 8px !important;
        box-shadow: 0px 4px 8px 0px rgba(97, 97, 97, 0.08);
        justify-content: center;

        .v-icon {
            font-size: 20px !important;
        }

        span {
            font-weight: 700 !important;
        }
    }
}
</style>
