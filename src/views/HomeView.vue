<template>
    
    
    <div class="modal">
        
        <CardDesc
        :it="$store.state.modalbasket"
        />
   
  </div>


    <ModalCall/>

  


      <div class="container">
        
        <HomeLand/>
      
      </div>

      
      

      <div class="container-card">
        <CardBlock
        v-for="it in items"
        :key="it.id"
        :it="it"
        
        />

        
        
        

    </div>

    

      <div class="container-card">
        <CardBlock
        v-for="it in items"
        :key="it.id"
        :it="it"
        />

        



    </div>


    <NotificationBlock/>



    
    
    
    
</template>

<script>
import CardBlock from '@/components/CardBlock.vue';
import CardDesc from '@/components/CardDesc.vue';
import HomeLand from '@/components/HomeLand.vue';
import ModalCall from '@/components/ModalCall.vue';
import NotificationBlock from '@/components/NotificationBlock.vue';
import items from '@/data/item';

// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    HomeLand,CardBlock,CardDesc,NotificationBlock,ModalCall
  },

  data(){
    return{
      items:items,
      
     
    }

    
    
  }

  
}
</script>


<style scoped>





.container{
  background-image: url('../assets/img/bgimage.png');
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
 
  
}

.container-card{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
  flex-wrap: wrap;
}


.modal{
  position: fixed;
  
  
  
  
}

</style>
