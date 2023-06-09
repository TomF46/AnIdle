import PropTypes from "prop-types";
import { connect } from "react-redux";

function Player({inventory}) {
    return (
        <div className="bg-backgroundOffset p-4 shadow min-h-20vh">
            <h2 className="text-center text-primary text-2xl font-bold">Player</h2>
            <div>
                <p>Money: {inventory.money}</p>
            </div>
        </div>
    );
}

Player.propTypes = {
    inventory: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        inventory: state.inventory,
    };
};

export default connect(mapStateToProps)(Player);
