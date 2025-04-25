<template>

    <div class="container-Call">

        <p class="sale">По всем вопросам</p>
        <p class="number-sale">+7 495 123-45-67</p>


    </div>
    <div class="button-header" @click="OpenModalCall()" v>Заказать звонок</div>

    

</template>



<script>



export default{
    name:"CallNumber",
    methods:{
        OpenModalCall(){
            this.$store.state.OpenModalCall = true;
        }
    }

}


</script>



<style scoped>





.sale{
    color: #00000073;
    font-size: 13px;
    font-weight: 700;

}

.number-sale{
    color: #000;
    font-size: 18px;
    font-weight: 500;
    margin-top: 4px;
}


.button-header{
    width: 168px;
    height: 44px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    border-radius: 6px;
    margin-left:32px ;
    background-color:#FFA400 ;
    cursor: pointer;
}

</style>