import React from "react";
import { useEffect } from "react";
import s from './Selector.module.css'

const Selector = (props) => {

  const newDirections = props.directions.filter(el => props.nowActiveSelectorForFrom[el.code] == undefined);
  const directionsElement = newDirections.map(el => {
    return (
      <option value={el.code}>{el.name}</option>
    )
  })

  const newFilter = props.filter.filter(el => el.from.code === props.nowActiveCode);
  const newFilterAfterSelect = newFilter[0].to.filter(el => props.nowActiveSelectorForTo[el.code] == undefined);
  let filterElement = newFilterAfterSelect.map(el => {
    return (
      <option value={el.code} key={el.code}>{el.name}</option>
    )
  })

  if (filterElement.length === 0) {
    filterElement = [
      <option value={null} key={'n'}>Нету</option>
    ]
  }

  useEffect(() => {
    
  }, [props.nowActiveCode, props.nowActiveSelectorForTo, props.nowActiveSelectorForFrom])

  return (
   <div className={s.mainBox}>
      <div className={s.mainBox__selector}>
        <div className={s.selector__name}>Отдаёте</div>
        <div className={s.selector__buttonBox}>
          <button onClick={() => { props.setFromAll() }}>Все</button>
          <button onClick={() => { props.setFromCrypto() }}>Криптовалюта</button>
          <button onClick={() => { props.setFromCASH() }}>Наличные</button>
          <button onClick={() => { props.setFromBRUB() }}>Банки RUB</button>
          <button onClick={() => { props.setFromBUAH() }}>Банки UAH</button>
        </div>
        <div className={s.selector__select}>
          <input type='text' placeholder='0.24891 - 12.061'></input>
          <select 
            onChange={(e) => {
              props.setToAll();
              props.setNowActiveCode(e.target.value);
            }}>
            {directionsElement}
            </select>
        </div>
      </div>
      <div className={s.mainBox__selector}>
        <div className={s.selector__name}>Получаете</div>
        <div className={s.selector__buttonBox}>
        <button onClick={() => { props.setToAll() }}>Все</button>
          <button onClick={() => { props.setToCrypto() }}>Криптовалюта</button>
          <button onClick={() => { props.setToCASH() }}>Наличные</button>
          <button onClick={() => { props.setToBRUB() }}>Банки RUB</button>
          <button onClick={() => { props.setToBUAH() }}>Банки UAH</button>
        </div>
        <div className={s.selector__select}>
        <input type='text' placeholder='365446.37 - 17707800.62'></input>
          <select>
            {filterElement}
          </select>
        </div>
      </div>
   </div>
  )
}

export default Selector
