import classNames from "classnames";
import React, { useState } from "react";
import '../styles/InterviewerListItem.scss'

export default function InterviewerListItem(props) {
  const { id, selected, avatar, name, setInterviewer } = props;
  let interviewerClass = classNames("interviewers__item-image", {
    "interviewers__item--selected": props.selected,
  });

  return (
  <li className={interviewerClass} onClick={() => setInterviewer(id)}>
    <img
      className="interviewers__item-image"
      src={avatar}
      alt="Sylvia Palmer"
    />
    {selected ? name : ""}
  </li>
  )
}