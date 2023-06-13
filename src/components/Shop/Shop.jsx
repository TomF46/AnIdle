import Sell from "./Sell/Sell";
import Buy from "./Buy/Buy";


function Shop() {

    return (
        <div className="bg-backgroundOffset p-4 shadow mt-4">
            <h2 className="text-center text-primary text-2xl mb-2 font-bold">Shop</h2>
            <div className="grid grid-cols-12">
                <div className="col-span-6 pr-2">
                    <Sell />
                </div>
                <div className="col-span-6 pl-2">
                    <Buy />
                </div>
            </div>
        </div>
    );
}

export default Shop;
