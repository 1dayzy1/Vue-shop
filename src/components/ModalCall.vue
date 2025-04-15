<template>

<div class="modalcall animate__animated animate__fadeInDown" v-if="this.$store.state.OpenModalCall">


    <div class="close-modal" @click="CloseModal()">X</div>


    
        <form action="https://api.web3forms.com/submit" method="POST">

       
        <input type="hidden" name="access_key" value="d45e86d2-9a71-45c8-a765-ffd70dfd2d29">

            
        <p class="username">Введите ваше имя</p>
        <input type="text" name="Имя" class="input-name" required>
        <p class="user-info">Введите суть вашего вопроса</p>
        <input type="text" name="Тема" class="input-info" required><br>
       

       
       
    

        <button type="submit" class="button-form">Отправить</button>

        </form>


</div>

</template>



<script>


export default{
    name:"ModalCall",
    methods:{
        CloseModal(){
            this.$store.state.OpenModalCall = false;
        }
    }
}


</script>


<style scoped>

.modalcall{
    position: fixed;
    width: 36vw;
    height: 45vh;
    border-radius: 20px;
    background-color: #cfcfcfc9;
    left: 30vw;
    top: 250px;
    
}

form{
    margin-left: 5vw;
    
}


.close-modal{
    margin-left: 30vw;
    margin-top: 1vh;
    transition: 300ms;
}

.close-modal:hover{
    color: red;
    cursor: pointer;
}


.username{
    font-size: 24px;
    font-weight: 600;
}

.input-name{
    width: 20vw;
    height: 5vh;
    border: none;
    margin-left: 10px;
    border-radius: 5px;
}


.user-info{
    font-size: 24px;
    font-weight: 600;
}


.input-info{
    width: 20vw;
    height: 5vh;
    border: none;
    margin-left: 10px;
    border-radius: 5px;
}


.button-form{
    border: none;
    
    margin-top: 20px;
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