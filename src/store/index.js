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
    not:0,
    openDrawer:false,
    
  },
  getters: {

    openbasket: state =>  { return state.basket},

    productQuantity:state => it => {
      let item = state.basket.find(i => i.id === it.id);
      if (item) return item.quantity;
      else return null;

    }


  },
  mutations: {
    AddToBasket(state, it){

      let item = state.basket.find(i => i.id === it.id);
      if (item){
        item.quantity++;
        state.counter++;
        
      }
      else{
        state.counter++;
        state.basket.push({...it, quantity:1});
        
        
      }
      
    },

    DeleteItem(){
      
      this.state.basket.splice(this.state.basketdelete,1);
      
      
    },

    OpenModal(state, it){
      this.state.modalbasket = it
      this.state.checkModal = true;
    },

    CloseModal(){
      this.state.checkModal = false;
    },


    RemoveItem(state, it){

      let item = state.basket.find(i => i.id === it.id);

      if(item.quantity > 1){
        item.quantity--;
        state.counter--;
       
        } 
        else{
          
          state.basket = state.basket.filter(i => i.id !== it.id);
      }

     

    }

  }
})
