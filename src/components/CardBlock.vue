<template>


    <div class="container-card">

        <section class="section">

            <div class="block">

                <img :src="require('@/assets/img/' + it.img)" class="img-home">
                <p class="name-home">{{it.name  }}</p>
                <p class="street-home">{{ it.street }}</p>
                <p class="price-home">{{ it.price }}</p>

                <div class="container-button">
                    <button class="button-add"  @click="AddToBasket()">Добавить в коризну</button>
                    <button class="button-open"  @click="OpenModal()">Доп.информация</button>
                </div>

            </div>

        </section>

    </div>



</template>



<script>



export default{
    name:"CardBlock",
    props:['it'],

    methods:{
        AddToBasket(){
            this.$store.commit('AddToBasket',this.it)
        },

        OpenModal(){
            this.$store.commit('OpenModal',this.it)
        }
    }



}

</script>


<style scoped>


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
    height: 580px;
}

.block:hover{
    background-color: #575757;
}


.block:hover .price-home{
    color: #fff;
}


.block:hover .street-home{
    color: #fff;
}
</style>