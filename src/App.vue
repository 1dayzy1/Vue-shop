<template>

  <div class="container-header">

    <LogoBlock/>

    <nav>
      <router-link to="/" class="itemHeader">Home</router-link> 
      <router-link to="/basket" class="itemHeader">Basket</router-link> 
      
     
      
    </nav>


    <CallNumber/>
    



</div>

<router-view/>
</template>

<script>
import CallNumber from './components/CallNumber.vue';
import LogoBlock from './components/LogoBlock.vue';



export default{
  name:"App",
  components:{
    LogoBlock, CallNumber
}
}


</script>



<style scoped>



nav a.router-link-exact-active{
  color:#000;
}



*{
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-decoration: none;
}

.container-header{
  display: flex;
  justify-content: space-around;
  align-items: center;




}


.itemHeader{
  margin-right: 24px;
  color: #0000002f;
  font-size: 18px;
}

@media (max-width:730px) {
  .container-header{
    display:none;
  }
}


</style>
