import { configureStore } from '@reduxjs/toolkit'
import { loadState } from '../tools/localStorage';
import InventoryReducer from './reducers/inventoryReducer';
import LogReducer from './reducers/logReducer';
let savedState = loadState();

export default configureStore({
  reducer: {
    inventory: InventoryReducer,
    log: LogReducer
  },
  preloadedState: savedState
})