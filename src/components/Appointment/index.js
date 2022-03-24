import React from "react";

import './styles.scss'

export default function Appointment(props) {

  const appointments = !props.time ? "No Appointments" : `Appointment at ${props.time}` 

  return (
    <article className="appointment">{appointments}</article>
  );
}