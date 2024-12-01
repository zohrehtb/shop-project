<template>
<div class="stepper">
    <div class="stepper__content">
        <v-row class="">
            <v-col md="9">
                <div class="py-8 px-6 bg-white br16 s-shadow--medium s-border s-border--dark-gray">
                    <template v-if="activeStep === 1">
                        <cartSkuListStep :productList="data" />
                    </template>
                </div>
            </v-col>

            <v-col md="3">
                <div class="py-6 px-4 bg-white br16 s-border s-border--dark-gray">
                    <div class="d-flex align-center justify-space-between mb-2">
                        <span class="t14 w500 ">Final Price</span>

                        <span class="t12 w700  ">
                               {{ totalPrice }}$
                        </span>
                    </div>

                    <v-btn @click="nextStep()" height="44" block class="s-btn s-btn--fill s-btn--fill-primary br12 mt-4">
                        <span class="t14 w700 text-white">Go to Next Step</span>
                    </v-btn>
                </div>
            </v-col>
        </v-row>
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
            console.log('Go to next Step')
        },
    },
}
</script>

<style lang="scss">
.stepper {
    margin-top: 80px;
}
</style>
