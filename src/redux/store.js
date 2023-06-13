import { configureStore } from '@reduxjs/toolkit'
import InventoryReducer from './reducers/inventoryReducer';
import LogReducer from './reducers/logReducer';
import initialState from './state/initialState';


const loadState = () => {
  const saveData = localStorage.getItem("saveData");
  let state = saveData == null ? initialState : JSON.parse(saveData);
  return state;
};

let savedState = loadState();

export default configureStore({
  reducer: {
    inventory: InventoryReducer,
    log: LogReducer
  },
  preloadedState: savedState
})