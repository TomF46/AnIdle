import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateMoney } from "./redux/actions/inventoryActions"
function App({money, updateMoney}) {

  function addMoney(){
    updateMoney(money + 1);
  }

  return (
    <>
      <h1 className='text-primary text-4xl'>Vite + React</h1>
      <div className="card">
        <button onClick={() => addMoney()}>
          count is {money}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

App.propTypes = {
  money: PropTypes.number.isRequired,
  updateMoney: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    money: state.inventory.money
  }
}

const mapDispatchToProps = {
  updateMoney
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
