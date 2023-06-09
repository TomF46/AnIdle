import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateMoney, updateInventory } from "../../redux/actions/inventoryActions";
import { Items } from "../../Data/items";


function Shop({inventory, updateMoney, updateInventory}) {

    function sell(item){
        removeItem(item);
        recieveMoney(item)
    }

    function removeItem(item){
        let saleItem = { ...item};
        saleItem.quantity--;
        updateInventory(saleItem)
    }

    function recieveMoney(item){
        var itemData = Items.find(x => x.id == item.id);
        updateMoney(inventory.money + itemData.price)
    }

    function isItemForSale(item){
        var itemData = Items.find(x => x.id == item.id);
        return itemData.forSale;
    }

    function getPrice(item){
        var itemData = Items.find(x => x.id == item.id);
        return itemData.price;
    }

    return (
        <div className="bg-backgroundOffset p-4 shadow mt-4">
            <h2 className="text-center text-primary text-2xl mb-2 font-bold">Shop</h2>
            <div>
                <h2 className="text-primary text-xl">Sell</h2>
                {inventory.items.map((item) => {
                    return (
                        <div key={item.id}>
                            {item.quantity > 0 && isItemForSale(item) && (
                                <p>{item.name} : {item.quantity} at {getPrice(item)} gold  <button className="bg-primary text-white rounded py-2 px-4 mt-4 hover:opacity-75" onClick={() => sell(item)}>Sell</button></p>
                            )}
                        </div>
                    )}
                )}
            </div>
        </div>
    );
}

Shop.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
