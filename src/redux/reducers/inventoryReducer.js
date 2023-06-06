import {produce} from "immer"
import * as types from "../actions/actionTypes";
import initialState from "../state/initialState";

export default produce((draft = initialState.inventory, action) => {
    switch (action.type) {
                case types.UPDATE_MONEY:
                    draft.money = action.value;
                    return draft
                case types.UPDATE_INVENTORY:
                    var existingEntryIndex = draft.items.findIndex(x => x.id == action.item.id);
                    if(existingEntryIndex !== -1) draft.items.splice(existingEntryIndex, 1);
                    draft.items.push(action.item);
                    return draft;
                default:
                    return draft;
            }
});
