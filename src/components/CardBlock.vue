<template>


    <div class="container-card">

        <section class="section">

            <div class="block">
                

                <div class="block-slider">

                    <button @click="prevSlide()" class="button-slide prevSlide">
                        <i class="fas fa-chevron-left"></i>
                    </button>

                    <img :src="require('@/assets/img/' + indexImage[index].image)" class="img-home">

                    <button @click="nextSlide()" class="button-slide nextSlide">
                        <i class="fas fa-chevron-right"></i>
                    </button>


                </div>

                
                <p class="name-home">{{it.name  }}</p>
                <p class="street-home">{{ it.street }}</p>
                <p class="price-home">{{ it.price }}</p>

                <p v-if="productQuant" class="count-item">У вас в корзине:{{ productQuant }}</p>


                <div class="container-button">
                    <button class="button-add"  @click="AddToBasket()">Добавить в коризну</button>
                    <button class="button-open"  @click="OpenModal()">Доп.информация</button>

                </div>

                


            </div>

        </section>

    </div>



</template>



<script>
import { ref } from 'vue';




export default{
    name:"CardBlock",
    props:['it'],

    computed:{
        productQuant(){
            return this.$store.getters.productQuantity(this.it);
        }
    },

    methods:{
        AddToBasket(){
            this.$store.state.shownotification = true;
            this.$store.commit('AddToBasket',this.it)
            

            setTimeout(() => {
                this.$store.state.shownotification = false;
                
            }, 3000);
        },

        OpenModal(){
            this.$store.commit('OpenModal',this.it)
        },



    },

    setup(){
        const indexImage = ref([
            {image:'img-home1.png'},
            {image:'img-home2.png'},
            {image:'img-home3.png'}
            
        ]);


        let index = ref(0);

        const prevSlide = () => {
            index.value = (index.value - 1 + indexImage.value.length) % indexImage.value.length;
        }

        const nextSlide = () => {
            index.value = (index.value + 1) % indexImage.value.length;
        }

        return{
            indexImage,
            index,
            prevSlide,
            nextSlide
        }

    }



}

</script>


<style scoped>




.button-slide{
    
    
    border: none;
    background-color: transparent;
    cursor: pointer;
    top: 50px;
    display: none;
    

}



.block:hover .button-slide{
    display: inline-block;
}



.img-home{
    margin-top: 20px;
}

.container-button{
    display: flex;
    justify-content: space-around;
}

.container-card{
    display: flex;
    justify-content: space-around;
    align-items: center;

}

.name-home{
    font-size: 24px;
    font-weight: 500;
    
    color: #000;
    margin-top: 24px;


}

.street-home{
    color: #0000005d;
    font-weight: 13;
    font-weight: 700;
    margin-top: 8px;

}


.price-home{
    font-size: 18px;
    font-weight: 700;
    color:#241F20 ;
    margin-top: 8px;
}


.button-add{
    width: 114px;
    height: 40px;
    background-color:#FFA400 ;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 200ms;

}

.button-add:hover{
    background-color:#b69862 ;
}
.button-open:hover{
    background-color:#b69862 ;
}


.button-open{
    width: 114px;
    height: 40px;
    background-color:#FFA400 ;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 200ms;

}

.block{
    
    transition: 200ms;
    border-radius: 20px;
    width: 400px;
    text-align: center;
    height: 650px;
}

.block:hover{
    background-color: #575757;
}


.block:hover .price-home{
    color: #fff;
}


.block:hover .count-item{
    color: #fff;
}


.block:hover .street-home{
    color: #fff;
}
</style>