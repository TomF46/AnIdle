import * as types from "./actionTypes";

export function updateMoneyAction(value) {
    return { type: types.UPDATE_MONEY, value };
}

export function updateInventoryAction(item) {
    return { type: types.UPDATE_INVENTORY, item };
}

export function updateMoney(newValue) {
    return function (dispatch) {
        dispatch(updateMoneyAction(newValue));
    };
}

export function updateInventory(item) {
    return function (dispatch) {
        dispatch(updateInventoryAction(item));
    };
}
