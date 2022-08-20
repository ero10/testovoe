import React from "react";
import { connect } from "react-redux";
import { setFromAll, setFromBRUB, setFromBUAH, setFromCash, setFromCrypto, setNowActiveCode } from "../../redux/directions";
import { setToAll, setToBRUB, setToBUAH, setToCash, setToCrypto } from "../../redux/filter";
import Selector from "./Selector";

const SelectorContainer = (props) => {
  return (
    <div>
      <Selector {...props}/>
    </div>
  )
};

const mapStateToProps = (state) => ({
  directions: state.directions.directions,
  filter: state.filter.filter,
  nowActiveCode: state.directions.nowActiveCode,
  nowActiveSelectorForTo: state.filter.nowActiveSelectorForTo,
  nowActiveSelectorForFrom: state.directions.nowActiveSelectorForFrom,
})

export default connect(mapStateToProps, {
  setNowActiveCode: setNowActiveCode,
  setToAll: setToAll,
  setToCrypto: setToCrypto,
  setToBRUB: setToBRUB,
  setToBUAH: setToBUAH,
  setToCASH: setToCash,
  setFromAll: setFromAll,
  setFromCrypto: setFromCrypto,
  setFromBRUB: setFromBRUB,
  setFromBUAH: setFromBUAH,
  setFromCASH: setFromCash
})(SelectorContainer);
