<template>

<div class="notification animate__animated animate__fadeInRight" v-if="this.$store.state.shownotification">


      <div class="left-block">
        <div class="circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
          </svg>
        </div>
      </div>


      <div class="right-block">
        
        <p class="text-not">Товар добавлен в коризну</p>

        
        
      </div>

      <div class="close-block">
          <p @click="closeNot()" class="close">X</p>
        </div>
    
</div>

</template>



<script>

export default{
    name:"NotificationBlock",
    methods:{
      closeNot(){
        this.$store.state.shownotification = false;
      }
    }
}


</script>


<style scoped>



.close{
  cursor: pointer;
}

.notification{
  width: 250px;
  height: 50px;
  border-radius: 10px;
  background-color: #b8b5b5;
  position: fixed;
  top: 50px;
  right: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
 

}



.circle{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

}


p{
  color: #000;
  
}

</style>