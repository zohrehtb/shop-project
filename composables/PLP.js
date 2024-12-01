/**
 * Product list composable
 */
import {ref} from 'vue';
import axios from 'axios'

export default function setup() {
    const productList = ref([]);

    useAsyncData(
        async () => {
            try {
                const response = await axios({
                    method: 'get',
                    url: 'https://dummyjson.com/products',
                }).catch(error=>{
                    console.log('error', error)
                });

                if(response){
                    productList.value = response;
                }

            } catch (error) {
                console.log("🚀 ~ error:", error)
            }
        }
    );
        

    return {
        productList
    }
}

