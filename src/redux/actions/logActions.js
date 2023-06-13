import { saveData } from "../../tools/localStorage";
import * as types from "./actionTypes";

export function AddItemToLogAction(item) {
    return { type: types.ADD_LOG_ITEM, item };
}

export function ClearLogAction() {
    return { type: types.CLEAR_LOG};
}

export function addItemToLog(message) {
    return function (dispatch) {
        var item = {message: message, dateTime: Date.now()}
        dispatch(AddItemToLogAction(item));
        saveData();
    };
}

export function clearLog() {
    return function (dispatch) {
        dispatch(ClearLogAction());
        saveData();
    };
}
