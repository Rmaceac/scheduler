import React from 'react';
import DayListItem from './DayListItem';

export default function DayList(props) {
  const getDays = props.days.map(() => {
    return (
      <DayListItem
        key={match.matchNumber}
        players={match.players}
        winner={match.winner}
        scoreDifference={match.scoreDifference}
      />
    );
  })
  
  return (
    <ul>
      
    </ul>
  );
}