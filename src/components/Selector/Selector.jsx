import React from "react";
import { useEffect } from "react";

const Selector = (props) => {

  const directionElement = props.directions.map(el => {
    return (
      <option value={el.code}>{el.name}</option>
    )
  })

  const newFilter = props.filter.filter(el => el.from.code === props.nowActiveCode)
  const filterElement = newFilter[0].to.map(el => {
    return (
      <option value={el.code}>{el.name}</option>
    )
  })

  useEffect(() => {
    
  }, [props.nowActiveCode])

  return (
   <div>
      <div>
        <div>Отдаёте</div>
          <select onChange={(e) => {props.setNowActiveCode(e.target.value)}}>
            {directionElement}
          </select>
      </div>
      <div>
        <div>Получаете</div>
          <select>
            {filterElement}
          </select>
      </div>
   </div>
  )
}

export default Selector
