import React from "react";
import classNames from "classnames";
import "../styles/DayListItem.scss";

export default function DayListItem(props) {
  let dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  });
  
  const formatSpots = () => {
    let spotsLeft;
    
    if (props.spots === 0) {
      spotsLeft = "no spots remaining"
    } else if (props.spots === 1) {
      spotsLeft = "1 spot remaining"
    } else {
      spotsLeft = `${props.spots} spots remaining`
    }
    return spotsLeft;
  }
  
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
