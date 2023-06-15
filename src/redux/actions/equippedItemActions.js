import { saveData } from "../../tools/localStorage";
import * as types from "./actionTypes";

export function equipItemAction(item) {
    return { type: types.EQUIP_ITEM, item };
}

export function unequipItemAction(item) {
    return { type: types.UNEQUIP_ITEM, item};
}

export function equipItem(item) {
    return function (dispatch) {

        dispatch(equipItemAction(item));
        saveData();
    };
}

export function unequipItem(item) {
    return function (dispatch) {
        dispatch(unequipItemAction(item));
        saveData();
    };
}