import React, { useState, useEffect } from "react";
import axios from "axios";
import DayList from "./DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterviewersForDay } from "helpers/selectors";
import { getInterview } from "helpers/selectors";
import InterviewerList from "./InterviewerList";

import "../styles/Application.scss";

// OLD HARD-CODED DATA
// const appointments = {
//   "1": {
//     id: 1,
//     time: "12pm",
//   },
//   "2": {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer:{
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   "3": {
//     id: 3,
//     time: "2pm",
//   },
//   "4": {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer:{
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       }
//     }
//   },
//   "5": {
//     id: 5,
//     time: "4pm",
//   }
// };

export default function Application(props) {
  //how does this work?
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  function bookInterview(id, interview) {
    console.log(id, interview);
    
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    setState({
      ...state,
      appointments
    });
  };

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day);

  // how do these work?
  const setDay = day => setState({ ...state, day });
  // const setDays = days => setState(prev => ({ ...prev, days }));

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
    // console.log("State.interviewers:", state.interviewers)
    
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
      <DayList
        days={state.days}
        value={state.day}
        onChange={setDay}
      />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {dailyAppointments.map((apt) => {
          const interview = getInterview(state, apt.interview)
          return (
            <Appointment
              key={apt.id}
              id={apt.id}
              time={apt.time}
              interview={interview}
              interviewers={dailyInterviewers}
              bookInterview={bookInterview}
            />  
          )
        })}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
