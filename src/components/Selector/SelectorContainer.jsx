import React from "react";
import { connect } from "react-redux";
import { setNowActiveCode } from "../../redux/directions";
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
  nowActiveCode: state.directions.nowActiveCode
})

export default connect(mapStateToProps, {setNowActiveCode: setNowActiveCode})(SelectorContainer);
