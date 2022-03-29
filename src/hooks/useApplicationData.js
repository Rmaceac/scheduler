import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
    const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  const updateSpots = function(id, addApt) {
    const foundDay = { ...state.days.find(day => day.appointments.includes(id)) };
    
    if (addApt) {
      foundDay.spots = foundDay.spots - 1;
    } else {
      foundDay.spots = foundDay.spots + 1;
    }
    
    const newDays = [...state.days]
    const foundIndex = newDays.findIndex(i => i.id === foundDay.id);
    newDays[foundIndex].spots = foundDay.spots;
    
    return newDays;
  };

  function bookInterview(id, interview) {
    
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, {interview})
            .then(() => {
              setState({
                ...state,
                appointments,
                days: updateSpots(id, true)
              });
            })
      
  };

  function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        setState({...state, days: updateSpots(id, false)})
      })
  }

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
        // console.log("Promises resolved:", all)
        setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      })
    }, [])

  return { state, setDay, bookInterview, cancelInterview };
}