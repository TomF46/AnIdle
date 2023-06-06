import { configureStore } from '@reduxjs/toolkit'
import { loadState } from '../tools/localStorage';
import InventoryReducer from './reducers/inventoryReducer';
let savedState = loadState();

export default configureStore({
  reducer: {
    inventory: InventoryReducer
  },
  preloadedState: savedState
})