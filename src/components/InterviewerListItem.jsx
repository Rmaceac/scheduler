import classNames from "classnames";
import React from "react";
import '../styles/InterviewerListItem.scss'

export default function InterviewerListItem(props) {
  const { selected, avatar, name, onChange } = props;
  let interviewerClass = classNames("interviewers__item-image", {
    "interviewers__item--selected": selected
  });

  return (
  <li className={interviewerClass} onClick={onChange}>
    <img
      className="interviewers__item-image"
      src={avatar}
      alt="Sylvia Palmer"
    />
    {selected && name}
  </li>
  )
}