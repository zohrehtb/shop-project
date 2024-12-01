<template>
  <main class="product">
      <v-container>
            <div class="main-col">
                <div class="product__contents">
                    <v-row v-if="productListData?.length" class="ma-0">
                        <v-col cols="6" md="2" v-for="(item, index) in productListData" :key="`card-${index}`" class="product__content d-flex">
                            <generalProductCard :content="item" class="mb-4 flex-grow-1" />
                        </v-col>
                    </v-row>
                </div>
            </div>
      </v-container>
  </main>
  </template>
      
  <script>
  import PLP from '@/composables/PLP.js'
  export default {
      data() {
          return {
              productList: [],
              screenType: null,
          }
      },
  
      setup() {
          const title = ref('Sopping site | Product list')
  
          const {
              productList,
          } = new PLP()

          useHead({
              title,
          });
          return {
              productList,
              title
          }
      },

      computed:{
        /** 
         * Return data product list  
         */
         productListData() {
            try {
                return this.productList.data.products
            } catch (e) {
                return []
            }
        },
      },
  }
  </script>
      
  <style lang="scss">
  @import '~/assets/scss/views/products.scss';
  </style>
  