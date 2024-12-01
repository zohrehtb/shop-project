<template>
<v-app>
    <div v-show="show">
        <generalHeader/>
        <slot />
    </div>
</v-app>
</template>

<script>

export default {
    name: "layout",


    data() {
        return {
            show:false
        }
    },

    mounted() {
         this.show = true;
    },

}
</script>
