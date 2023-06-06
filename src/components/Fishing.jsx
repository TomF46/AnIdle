import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateInventory } from "../redux/actions/inventoryActions";
import { ItemTypes } from "../Data/itemTypes";
import { Fish } from "../Data/fish";
import { wrapForInventory } from "../tools/inventoryService";

function Fishing({ inventory, updateInventory }) {
    const [fishStocks, setFishStocks] = useState([]);

    useEffect(() => {
        var stocks = inventory.filter(item => item.type == ItemTypes.Fish);
        setFishStocks(stocks)
    }, [inventory]);

    function fish() {
        var fish = Fish[0]; // Get first fish for now
        var currentFishStock = fishStocks.find(item => item.id == fish.itemId);
        if(currentFishStock == null){
            updateInventory(wrapForInventory(fish, 1));
        } else {
            let newAmount = currentFishStock.quantity + 1;
            updateInventory(wrapForInventory(fish, newAmount));
        }
    }

    return (
        <>
            <div className="card">
                <button onClick={() => fish()}>Fish</button>
            </div>
            <div>
                <h2 className="text-primary">Fish stocks</h2>
                <ul>
                    {fishStocks.map((fishStock) => {
                        return (
                            <li key={fishStock.id}>{fishStock.name} : {fishStock.quantity}</li>
                        )}
                    )}
                </ul>
            </div>
        </>
    );
}

Fishing.propTypes = {
    inventory: PropTypes.array.isRequired,
    updateInventory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        inventory: state.inventory.items,
    };
};

const mapDispatchToProps = {
    updateInventory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Fishing);
