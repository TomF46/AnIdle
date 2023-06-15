import {produce} from "immer"
import * as types from "../actions/actionTypes";
import initialState from "../state/initialState";
import { Items } from "../../Data/items";
import { ItemTypes } from "../../Data/itemTypes";

export default produce((draft = initialState.equippedItems, action) => {
    switch (action.type) {
                case types.EQUIP_ITEM: {
                    let item = Items.find(x => x.id == action.item.id);
                    switch(item.type){
                        case ItemTypes.Rods:
                            draft.rod = item;
                            break;
                        default:
                            break;
                    }
                    return draft
                }
                case types.UNEQUIP_ITEM:
                    console.log(action.item);
                    switch(action.item.type){
                        case ItemTypes.Rods:
                            draft.rod = null;
                            break;
                        default:
                            break;
                    }
                    return draft;
                default:
                    return draft;
            }
});
