<template>

    <div class="modal animate__animated animate__fadeInDown" :class="{show:$store.state.checkModal}  ">

        <button class="button-close "  @click="CloseModal()">X</button>
        <div class="left-block">
            <img :src="`../img/${it.img}`" alt="">
        </div>

        
        <div class="right-block">

            <p class="name-home">{{it.name  }}</p>
            <p class="street-home">{{ it.street }}</p>
            <p class="price-home">{{ it.price }}</p>

            <pre class="desc-home">{{ it.description }}</pre>
            <button class="button-add"  @click="AddToBasket()">Добавить в коризну</button>

        </div>


        




    </div>



</template>



<script>

export default{

    
    name:"CardDesc",
    props:['active', 'it'],
    methods:{
        CloseModal(){
            this.$store.commit('CloseModal',this.it)
        },
        AddToBasket(){
            this.$store.state.shownotification = true;
            this.$store.commit('AddToBasket',this.it);
            setTimeout(() => {
                this.$store.state.shownotification = false;
                
            }, 3000);
        },
    }

}

</script>


<style scoped>




.desc-home{
    font-size: 20px;
    font-weight: 600;
    color:#eff1f1;
}


.button-close{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 97%;
    top: 10px;
    cursor: pointer;
    border: none;
    
    

    
}


.modal{
    padding: 50px;
    background-color: hsla(0, 0%, 0%, 0.5);
    position: fixed;
    display: none;

    
    
    
}

.modal.show{
    
    display: block;
    display: flex;

    position: absolute;
    
    bottom: -900px;
    left: 10%;

    
    
    
    
}


.right-block{
    margin-left: 150px;
}

.name-home{
    font-size: 24px;
    font-weight: 500;
    
    color: #fff;
    margin-top: 24px;


}

.street-home{
    color: #fff;
    font-weight: 13;
    font-weight: 700;
    margin-top: 8px;

}


.price-home{
    font-size: 18px;
    font-weight: 700;
    color:#fff ;
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



/* @media (max-width:730px) {
    .modal{
        
        flex-direction: column;
    }
} */


</style>