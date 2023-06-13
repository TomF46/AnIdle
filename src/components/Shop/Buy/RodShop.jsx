import PropTypes from "prop-types";
import { Rods } from "../../../Data/rods";
import { Items } from "../../../Data/items";

function RodShop({onBuyItem}){

    function getPrice(item){
        var itemData = Items.find(x => x.id == item.itemId);
        return itemData.price;
    }

    return (
        Rods.map((item) => {
            return (
                <div key={item.id}>
                    <p>{item.name} :  {getPrice(item)} gold
                        <button className="bg-primary text-white rounded py-2 px-4 mt-4 hover:opacity-75 ml-2" onClick={() => onBuyItem(item)}>Buy</button>
                    </p>
                </div>
            )}
        )
    )
}

RodShop.propTypes = {
    onBuyItem: PropTypes.func.isRequired,
};

export default RodShop;