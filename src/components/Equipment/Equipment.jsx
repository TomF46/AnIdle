import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { equipItem, unequipItem} from "../../redux/actions/equippedItemActions";


function Equipment({inventory, equippedItems, equipItem, unequipItem}) {
    const [equippableInventory, setEquippableInventory] = useState([]);

    useEffect(() => {
        var items = inventory.items.filter(item => item.equippable);
        setEquippableInventory(items);
    }, [inventory.items]);

    return (
        <div className="bg-backgroundOffset p-4 shadow mt-4">
            <h2 className="text-center text-primary text-2xl mb-2 font-bold">Equipment</h2>
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <h3 className="text-primary text-lg mb-1 font-bold">Equipped</h3>
                    {equippedItems.rod ? (
                        <>
                            <p>{equippedItems.rod.name} <button className="bg-primary text-white rounded py-2 px-4 mt-4 hover:opacity-75 ml-2" onClick={() => unequipItem(equippedItems.rod)}>Unequip</button></p>
                        </>
                    ) : (
                        <p>None</p>
                    )}
                </div>
                <div className="col-span-12">
                    <h3 className="text-primary text-lg mb-1 font-bold">Inventory</h3>
                    {equippableInventory.map((item) => {
                    return (
                        <div key={item.id}>
                            {/* {item.quantity > 0 && isItemForSale(item) && (
                                <p>{item.name} : {item.quantity} at {getPrice(item)} gold
                                    <button className="bg-primary text-white rounded py-2 px-4 mt-4 hover:opacity-75 ml-2" onClick={() => sell(item, false)}>Sell 1</button>
                                    <button className="bg-primary text-white rounded py-2 px-4 mt-4 hover:opacity-75 ml-2" onClick={() => sell(item, true)}>Sell All</button>
                                </p>
                            )} */}
                            <p>{item.name} <button className="bg-primary text-white rounded py-2 px-4 mt-4 hover:opacity-75 ml-2" onClick={() => equipItem(item)}>Equip</button></p>
                        </div>
                        )}
                    )}
                </div>
            </div>
        </div>
    );
}

Equipment.propTypes = {
    inventory: PropTypes.object.isRequired,
    equippedItems: PropTypes.object.isRequired,
    equipItem: PropTypes.func.isRequired,
    unequipItem: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        inventory: state.inventory,
        equippedItems: state.equippedItems
    };
};

const mapDispatchToProps = {
    equipItem,
    unequipItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);
