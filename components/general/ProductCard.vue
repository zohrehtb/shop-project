<template>
<div v-if="content" class="product-card pa-2">

    <a v-if="content?.images && content?.images.length " class="product-card__image mb-3 mt-4" :title="content?.title">
        <img :src="content?.images[0]" :title="content.title" :alt="content?.title" width="130" height="130" />
    </a>

    <p v-if="content?.title" class="w-100 flex-grow-1 t12 l21 w500  product-card__title card-title text-left">
        {{content?.title}}
    </p>

    <div class="product-card__price-info mb-2 d-flex align-center justify-space-between">
        <div>
            <generalAddToBasket :content="content" />
        </div>

        <div>
            <span v-if="content.price" class="t16 w700 product-card__price-info__price product-card__price-info__price--main">{{content.price}} $</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        /**
         * Content
         */
        content: Object,
    },
}
</script>

<style scoped>
@import '~/assets/scss/components/product-card.scss';
</style>
