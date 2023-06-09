import {produce} from "immer"
import * as types from "../actions/actionTypes";
import initialState from "../state/initialState";

export default produce((draft = initialState.log, action) => {
    switch (action.type) {
                case types.ADD_LOG_ITEM:
                    draft.push(action.item);
                    return draft
                case types.CLEAR_LOG:
                    draft = [];
                    return draft;
                default:
                    return draft;
            }
});
