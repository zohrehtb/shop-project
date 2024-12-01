<template>
<div class="cart-sku-list">
    <header class="d-flex align-center justify-space-between mb-4">
        <div class="d-flex align-center">
            <span class="w700 t16">Cart</span>
        </div>
    </header>

    <div v-if="productList && productList.length">
        <template v-for="(product, index) in productList" :key="`product${index}`">
            <cartProductCard :content="product" class="pa-2 mb-3"/>
        </template>
    </div>
</div>
</template>

<script>
export default {
    props: {
        /**
         * Product list
         */
        productList: Array,
    },
}
</script>
