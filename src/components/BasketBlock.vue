<template>


    <div class="container-card">

        <section class="section">

            <div class="block">

                <img :src="it.imageUrl" >
                 
                <p class="name-home">{{it.title  }}</p>
                
                <p class="price-home">{{ it.price }}</p>
                
                
                <button class="btn-delete" @click="DeleteItem()">Удалить</button>
                <button class="btn-delete" @click="RemoveItem()">Уменьшить</button>
                
                


            </div>

        </section>

    </div>



</template>



<script>



export default{
    name:"CardBlock",
    props:['it', 'index'],
    methods:{
        DeleteItem(){
            this.$store.state.shownotification = true;

            this.$store.state.basketdelete = (this.index);

            this.$store.commit("DeleteItem", this.it);

            setTimeout(() => {
                this.$store.state.shownotification = false;
                
            }, 3000);
        },


        RemoveItem(){
            this.$store.commit('RemoveItem',this.it)
        }

        }
    }

    
   





</script>


<style scoped>

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


.btn-delete{
    width: 114px;
    height: 40px;
    background-color:#FFA400 ;
    border: none;
    border-radius: 4px;
    cursor: pointer;

}





</style>