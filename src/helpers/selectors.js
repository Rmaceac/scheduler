export function getAppointmentsForDay(state, selectedDay) {
  const aptIDs = [];
  
  for (const day of state.days) {
    if (day.name === selectedDay) {
      aptIDs.push(...day.appointments)
    }
  }
  
  const results = aptIDs.map(id => {
      return state.appointments[id]
    })
          
  return results;
}
