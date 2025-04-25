<template>


    <h1>Ваши товары:</h1>
    <div class="basket-counter">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
        <p class="counter">{{ $store.state.counter }}</p>
    </div>


    <div class="container-basket">

        <BasketBlock
        v-for="(it, index) in items"
        :key="it.id"
        :it="it"
        :index="index"
        />

    </div>


    
    <DeleteNotification/>

</template>



<script>
import BasketBlock from '@/components/BasketBlock.vue';
import DeleteNotification from '@/components/DeleteNotification.vue';



export default{
    name:"BasketView",
    components:{BasketBlock, DeleteNotification},
    computed:{

        items(){
            return this.$store.getters.openbasket 
        }
        
    },

    
}

</script>


<style scoped>


.bi-cart3{
    position: relative;
}

.counter{
    width: 10px;
    height: 10px;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom:740px;
    left: 15px;
    
}

h1{
    text-align: center;
}


.container-basket{
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px;
    

  
    
}
</style>