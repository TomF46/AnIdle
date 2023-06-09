import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateInventory } from "../redux/actions/inventoryActions";
import { addItemToLog } from "../redux/actions/logActions";
import { ItemTypes } from "../Data/itemTypes";
import { Fish } from "../Data/fish";
import { wrapForInventory } from "../tools/inventoryService";
import TaskProgressBar from "./Tasks/TaskProgressBar";

function Fishing({ inventory, updateInventory, addItemToLog}) {
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
        let fish = Fish[0]; // Get first fish for now
        let amount = 1;
        let currentFishStock = fishStocks.find(item => item.id == fish.itemId);
        addItemToLog(`Caught ${amount} ${fish.name}`);
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
                <button className="bg-primary text-white rounded py-2 px-4 mt-4 hover:opacity-75" onClick={() => fish()}>Fish</button>
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
    addItemToLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        inventory: state.inventory.items,
    };
};

const mapDispatchToProps = {
    updateInventory,
    addItemToLog
};

export default connect(mapStateToProps, mapDispatchToProps)(Fishing);
