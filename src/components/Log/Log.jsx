import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearLog } from "../../redux/actions/logActions";


function Log({log, clearLog}) {

    function clear(){
        clearLog();
    }

    return (
        <div className="bg-backgroundOffset p-4 shadow min-h-40vh">
            <h2 className="text-center text-primary text-2xl font-bold">Logs</h2>
            <ul>
                {log.map((item, i) => {
                    return (
                        <li key={i}>{item.message}</li>
                    )}
                )}
            </ul>
            <button onClick={() => {clear()}}>Clear</button>
        </div>
    );
}

Log.propTypes = {
    log: PropTypes.array.isRequired,
    clearLog: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        log: state.log,
    };
};

const mapDispatchToProps = {
    clearLog
};

export default connect(mapStateToProps, mapDispatchToProps)(Log);
