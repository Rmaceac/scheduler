import React from 'react';
import '../styles/InterviewerList.scss'
import InterviewerListItem from './InterviewerListItem';

export default function InterviewerList(props) {
  const { interviewers, setInterviewer, interviewer } = props;
  
  const interviewersArray = interviewers.map((interviewerItem) => {
    return (
    <InterviewerListItem
      key={interviewerItem.id}
      id={interviewerItem.id}
      name={interviewerItem.name}
      avatar={interviewerItem.avatar}
      setInterviewer={() => setInterviewer(interviewerItem.id)}
      selected={interviewerItem.id === interviewer}
      />
      )
    })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewersArray}
      </ul>
    </section>
  );
}