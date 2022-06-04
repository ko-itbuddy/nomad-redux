import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const ADD = "ADD";
const MINUS = "MINUS";

// reducer
const countModifier = (count = 0, action) => {
  console.log(action);
  switch(action.type){
    case ADD:
      return count+1;
    case MINUS:
      return count-1;
    default:
    return count;
  }
};


const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const onClickAdd = () =>{
  countStore.dispatch({type: ADD})
}

const onClickMinus = () =>{
  countStore.dispatch({type: MINUS})
}


add.addEventListener("click", onClickAdd);
minus.addEventListener("click", onClickMinus);
