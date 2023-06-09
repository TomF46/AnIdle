import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateInventory } from "../redux/actions/inventoryActions";
import { ItemTypes } from "../Data/itemTypes";
import { Fish } from "../Data/fish";
import { wrapForInventory } from "../tools/inventoryService";
import TaskProgressBar from "./Tasks/TaskProgressBar";

function Fishing({ inventory, updateInventory }) {
    const [fishStocks, setFishStocks] = useState([]);
    const [fishingTaskInProgress, setFishingTaskInProgress] = useState(false);

    useEffect(() => {
        var stocks = inventory.filter(item => item.type == ItemTypes.Fish);
        setFishStocks(stocks)
    }, [inventory]);

    function fish() {
        setFishingTaskInProgress(true);
    }

    function checkAndStoreCatch(){
        setFishingTaskInProgress(false);
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
                <TaskProgressBar taskInProgress={fishingTaskInProgress} taskRunningTime={5000} onTaskFinished={checkAndStoreCatch} />
                <button className="mt-8" onClick={() => fish()}>Fish</button>
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
