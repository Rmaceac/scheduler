import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";

import './styles.scss'

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";

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

export default function Appointment(props) {
  
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);
  
    props.bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
  }

  const cancel = () => {
    transition(DELETING);
    props.cancelInterview(props.id)
    .then(() => {
      transition(EMPTY);
    })
    .catch((error) => {
      console.log("Error:", error)
      transition(SHOW);
    })
  }

  return (
      <article className="appointment">
        <Header time={props.time}/>
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            onDelete={() => {transition(CONFIRM)}}
            onEdit={() => {transition(EDIT)}}
          />
        )}
        {mode === SAVING && <Status message={SAVING}/>}
        {mode === DELETING && <Status message={DELETING}/>}
        {mode === CONFIRM &&
        <Confirm
        message="Are you sure you would like to delete?"
        onCancel={() => transition(SHOW)}
        onConfirm={() => cancel(props.id)}
        />}
        {mode === CREATE && 
        <Form 
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
        />}
        {mode === EDIT &&
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
        />}
      </article>
  );
}