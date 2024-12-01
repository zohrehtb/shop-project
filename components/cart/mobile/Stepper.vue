<template>
<div class="stepper__content stepper__content--mobile">
    <template v-if="activeStep === 1">
        <cartSkuListStep :productList="data" />
    </template>
</div>

<div class="cart-mobile-stepper d-flex align-center justify-space-between">
    <div class="d-flex align-center justify-space-between mb-2">
        <span class="t14 w500 ">Final Price: </span>

        <span class="t12 w700">
            {{totalPrice}}$
        </span>
    </div>

    <div>
        <v-btn @click="nextStep()" height="44" block class="s-btn s-btn--fill s-btn--fill-primary br12">
            <span class="t14 w700 text-white">Go to Next Step</span>
        </v-btn>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            activeStep: 1,
        }
    },

    props: {
        /**
         * Basket data
         */
        data: Array
    },

    computed:{
        totalPrice(){
            let sumPrice = 0;
            
            if(this.data){
                this.data.forEach(element => {
                    sumPrice = sumPrice + element?.content?.price
                });
            }

            return Number(sumPrice).toFixed(2);
        }
    },

    methods: {
        nextStep() {
            console.log('go to next step')
        },
    },
}
</script>

<style lang="scss">

.stepper__content--mobile{
    margin-bottom: 80px;
    margin-top: 80px !important;
}

.cart-mobile-stepper {
    background: #FFF;
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100%;
    padding: 12px 16px;
    z-index: 22;
    box-shadow: 0px -2px 2px 0px rgba(97, 97, 97, 0.10);
}
</style>
