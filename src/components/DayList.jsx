import React from 'react';
import DayListItem from './DayListItem';

export default function DayList(props) {
  const daysInfo = props.days.map((days) => {
    return (
      <DayListItem
        key={days.id}
        name={days.name}
        spots={days.spots}
        selected={days.selected}
        setDay={days.setDay}
      />
    );
  })
  
  return (
    <ul>
      {daysInfo}
    </ul>
  );
}