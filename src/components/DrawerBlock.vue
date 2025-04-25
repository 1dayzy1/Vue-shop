<template>


<div class="fixed w-full h-full top-0 left-0 bg-black z-10 opacity-70" >

</div>

<div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">

  <div class="flex items-center gap-5">

    <svg xmlns="http://www.w3.org/2000/svg" @click="closeDrawer" width="20" height="20" fill="currentColor" class="rotate-180 cursor-pointer opacity-50 transition hover:opacity-100   " viewBox="0 0 16 16">
      <path fill-rule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
    </svg>

    <h2 class="text-2xl font-bold ">Корзина</h2>

    
    


  </div>


      
        <img :src="item.imageUrl" class="img-home">
                
        <p class="name-home">{{item.title }}</p>
          
          <p class="price-home">{{ item.price }}</p>

  

</div>

</template>




<script>




export default{
    name:"DrawerBlock",
    components:{
      
    },

    methods:{
      closeDrawer(){
        this.$store.state.openDrawer = false;
      }
    },

    props:['item']
}


</script>



<style scoped>


.img-home{
  width: 200px;
  height: 150px;
}

</style>