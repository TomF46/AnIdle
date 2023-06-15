import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateInventory } from "../redux/actions/inventoryActions";
import { addItemToLog } from "../redux/actions/logActions";
import { ItemTypes } from "../Data/itemTypes";
import { Fish } from "../Data/fish";
import { wrapForInventory } from "../tools/inventoryService";
import TaskProgressBar from "./Tasks/TaskProgressBar";
import { defaultRod } from "../Data/defaults";
import { Rods } from "../Data/rods";

function Fishing({ inventory, updateInventory, addItemToLog, rod}) {
    const [fishStocks, setFishStocks] = useState([]);
    const [fishingTaskInProgress, setFishingTaskInProgress] = useState(false);
    const [rodStats, setRodStats] = useState(defaultRod);


    useEffect(() => {
        var stocks = inventory.filter(item => item.type == ItemTypes.Fish);
        setFishStocks(stocks)
    }, [inventory]);

    useEffect(() => {
        if(rod == null){
            setRodStats(defaultRod);
        } else {
            var stats = Rods.find(x => x.itemId == rod.id);
            setRodStats(stats);
        }
    }, [rod]);

    function fish() {
        setFishingTaskInProgress(true);
    }

    function checkAndStoreCatch(){
        setFishingTaskInProgress(false);
        let fish = Fish[0]; // Get first fish for now
        let amount = rodStats.power;
        let currentFishStock = fishStocks.find(item => item.id == fish.itemId);
        addItemToLog(`Caught ${amount} ${fish.name}`);
        if(currentFishStock == null){
            updateInventory(wrapForInventory(fish, amount));
        } else {
            let newAmount = currentFishStock.quantity + amount;
            updateInventory(wrapForInventory(fish, newAmount));
        }
    }

    return (
        <div className="bg-backgroundOffset p-4 shadow">
            <h2 className="text-center text-primary text-2xl mb-2 font-bold">Fishing</h2>
            <div className="card">
                <TaskProgressBar taskInProgress={fishingTaskInProgress} taskRunningTime={5000} onTaskFinished={checkAndStoreCatch} />
                <button className="bg-primary text-white rounded py-2 px-4 mt-4 hover:opacity-75" onClick={() => fish()}>Fish</button>
                <p>Using {rodStats.name} {`(${rodStats.power} power)`}</p>
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
        </div>
    );
}

Fishing.propTypes = {
    inventory: PropTypes.array.isRequired,
    updateInventory: PropTypes.func.isRequired,
    addItemToLog: PropTypes.func.isRequired,
    rod: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        inventory: state.inventory.items,
        rod: state.equippedItems.rod
    };
};

const mapDispatchToProps = {
    updateInventory,
    addItemToLog
};

export default connect(mapStateToProps, mapDispatchToProps)(Fishing);
