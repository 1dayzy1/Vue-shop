import { createStore } from 'vuex'

export default createStore({
  state: {
    basket:[],
    counter:0,
    checkModal:false, 
    basketdelete:0,
    shownotification:false,
    modalbasket:0,
    OpenModalCall:false,
    
  },
  getters: {

    openbasket: state =>  { return state.basket}

  },
  mutations: {
    AddToBasket(state, it){
      this.state.basket.push(it);
      this.state.counter++;
      console.log(this.state.basket);
    },

    DeleteItem(){
      
      this.state.basket.splice(this.state.basketdelete,1);
      this.state.counter--;
    },

    OpenModal(state, it){
      this.state.modalbasket = it
      this.state.checkModal = true;
    },

    CloseModal(){
      this.state.checkModal = false;
    }

  }
})
