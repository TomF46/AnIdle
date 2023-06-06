import * as types from "../actions/actionTypes";
import initialState from "../state/initialState";

export default function InventoryReducer(
    state = initialState.inventory,
    action
) {
    switch (action.type) {
        case types.UPDATE_MONEY:
            var inventory = { ...state};
            inventory.money = action.value;
            return inventory;
        case types.UPDATE_INVENTORY:
            //Implement
            return state;
        default:
            return state;
    }
}
