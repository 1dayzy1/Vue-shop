<template>

    

    <div class="left-block">

        <h1 class="text-header">Купите<br> квартиру<br>
            своей мечты</h1>

        <p class="page-header">Мы продаём прекрасные квартиры в <br> вашем городе. Оставьте заявку или<br> ознакомьтесь с предложениями</p>

    </div>


    <div class="right-block">
        <div class="modal-block">
            <p class="mod-text">Ищите квартиру?<br>  Оставьте заявку на подбор квартиры <br> прямо сейчас и мы поможем!</p>

            <div class="button-modal" >Оставить заявку</div>
            <p class="beta-text">от 15 дней пробный период</p>
        </div>
    </div>


</template>


<script>

export default{
    name:"HomeLand"
}


</script>


<style scoped>




.text-header{
    color:#fff;
    font-size: 64px;
    font-weight: 700;

}

.page-header{
    margin-top: 24px;
    font-weight: 500;
    font-size: 24px;
    color: #ffffffab;
}

.modal-block{
    width: 445px;
    height: 268px;
    background-color: #fff;
    text-align: center;
    border-radius: 16px;


}

.mod-text{
    color: #000;
   font-size: 18px;
    font-weight: 500;
    padding-top: 40px;

}


.button-modal{
    width: 365px;
    height:56px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    border-radius: 6px;
    margin-left:32px ;
    background-color:#FFA400 ;
    margin-top: 16px;
    cursor: pointer;
}


.beta-text{
    margin-top: 24px;
    font-size: 15px;
    font-weight: 500;
    color: #00000073;

}


</style>