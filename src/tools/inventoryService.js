import { Items } from "../Data/items"

export function wrapForInventory(item, quantity){
    var parent = Items.find(obj => obj.id == item.itemId);
    return {
        id: item.itemId,
        name: item.name,
        type: parent.type,
        quantity: quantity,
        equippable: parent.equippable
    };
}