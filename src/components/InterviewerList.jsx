import React from 'react';
import PropTypes from 'prop-types';
import '../styles/InterviewerList.scss'
import InterviewerListItem from './InterviewerListItem';

export default function InterviewerList(props) {
  const { interviewers, onChange, value } = props;
  
  // console.log("InterviewerList props:", props)
  
  const interviewersArray = interviewers.map((interviewerItem) => {
    return (
    <InterviewerListItem
      key={interviewerItem.id}
      name={interviewerItem.name}
      avatar={interviewerItem.avatar}
      onChange={() => onChange(interviewerItem.id)}
      selected={interviewerItem.id === value}
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

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};