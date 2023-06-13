import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateMoney, updateInventory } from "../../../redux/actions/inventoryActions";
import { Items } from "../../../Data/items";
import RodShop from "./RodShop";
import { wrapForInventory } from "../../../tools/inventoryService";


function Buy({inventory, updateMoney, updateInventory}) {

    function handleBuyItem(item){
        if(canAfford(item)){
            giveMoney(item);
            recieveItem(item);
        } else {
            console.log("Cant afford");
        }
    }

    function canAfford(item){
        var itemData = Items.find(x => x.id == item.itemId);
        return inventory.money >= itemData.price;
    }

    function giveMoney(item){
        var itemData = Items.find(x => x.id == item.itemId);
        updateMoney(inventory.money - itemData.price);
    }

    function recieveItem(item){
        let amount = 1;
        let current = inventory.items.find(x => x.id == item.itemId);
        // addItemToLog(`Caught ${amount} ${fish.name}`);
        if(current == null){
            updateInventory(wrapForInventory(item, amount));
        } else {
            let newAmount = current.quantity + amount;
            updateInventory(wrapForInventory(item, newAmount));
        }
    }

    return (
        <>
            <h2 className="text-primary text-xl">Buy</h2>
            <RodShop onBuyItem={handleBuyItem} />
        </>
    );
}

Buy.propTypes = {
    inventory: PropTypes.object.isRequired,
    updateMoney: PropTypes.func.isRequired,
    updateInventory: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        inventory: state.inventory,
    };
};

const mapDispatchToProps = {
    updateMoney,
    updateInventory
};

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
