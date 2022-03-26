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

export function getInterview(state, interview) {

  if (!interview) {
    return null;
  }

  const interviewerID = interview.interviewer

  let result = {
    student: interview.student,
    interviewer: state.interviewers[interviewerID]
  };

  return result;
}

export function getInterviewersForDay(state, selectedDay) {
  const aptIDs = [];
  
  for (const day of state.days) {
    if (day.name === selectedDay) {
      aptIDs.push(...day.interviewers)
    }
  }
  
  const results = aptIDs.map(id => {
      return state.interviewers[id]
    })
          
  return results;
}
