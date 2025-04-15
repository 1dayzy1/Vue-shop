<template>

    <div class="container-slider">
        <button @click="prevSlide()" class="button-slide prevSlide">
            <i class="fas fa-chevron-left"></i>
        </button>

        

        <div class="block-slider animate__animated animate__fadeInRight" v-if="feedback[indeximage]">
            <img :src="require('@/assets/img/' + feedback[indeximage].image)" class="image-slider">
            <pre class="desc">{{ feedback[indeximage].description }}</pre>
            <p class="name-slide">{{ feedback[indeximage].name }}</p>
            <p class="prof-slide">{{ feedback[indeximage].prof }}</p>


        </div>


        <button @click="nextSlide()" class="button-slide nextSlide">
            <i class="fas fa-chevron-right"></i>
        </button>

    </div>


</template>



<script>
import { ref } from 'vue';



export default{
    name:"SliderBlock",

    setup(){
        const feedback = ref([


            {
                id:1,
                image:'people1.png',
                description:"Работа с сервисом приносит радость, потому что высочайший \n  профессионализм, удобство, оперативность, и просто \n приятные люди!",
                name:'Александра Титова',
                prof:"Фотограф"

            },

            {

                id:2,
                image:'people1.png',
                description:"Уверенность в результате - вот что приносит мне сотрудничество с вами.\n Четкость, внимание к деталям\n и дружелюбный подход - это ваш фирменный стиль!",
                name:'Мария Иванова',
                prof:"Веб-дизайнер"
            },

            {

                id:1,
                image:'people1.png',
                description:"За годы работы в сфере рекламы редко встречала таких ответственных и креативных партнеров.\n Ваши идеи всегда свежи, а сроки - всегда соблюдены!\n Огромное спасибо!",
                name:'Алексей Петров',
                prof:"Маркетолог"
            }
        ])

        const indeximage = ref(0);

        const prevSlide = () => {
            indeximage.value = (indeximage.value - 1 + feedback.value.length) % feedback.value.length;
        }


        const nextSlide = () => {
            indeximage.value = (indeximage.value  + 1) % feedback.value.length;
        }


        return{
            feedback,
            indeximage,
            prevSlide, 
            nextSlide
        }
    }

}

</script>



<style scoped>

i{
    width: 21px;
    height: 11px;
}


.button-slide:hover{
    color: #FE3268;
}


.container-slider{
    margin-top: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;

}


.image-slider{
    margin-left: 15vw;

}

.button-slide{
    border: none;
    cursor: pointer;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
}


.desc{
    color: #000;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-top: 32px;
    text-align-last: center;

}


.name-slide{
    margin-top: 32px;
    font-size: 18px;
    color: #000;
    font-weight: 600;
    text-align: center;

}

.prof-slide{
    color: #00000066;
    font-size: 13px;
    font-weight: 500;    
    margin-top: 4px;
    text-align: center;
}



</style>