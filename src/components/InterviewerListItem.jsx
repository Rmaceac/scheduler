import classNames from "classnames";
import React from "react";
import '../styles/InterviewerListItem.scss'

export default function InterviewerListItem(props) {
  // console.log("Props:", props)
  const { id, selected, avatar, name, setInterviewer } = props;
  let interviewerClass = classNames("interviewers__item-image", {
    "interviewers__item--selected": selected
  });

  return (
  <li className={interviewerClass} onClick={setInterviewer}>
    <img
      className="interviewers__item-image"
      src={avatar}
      alt="Sylvia Palmer"
    />
    {selected && name}
  </li>
  )
}