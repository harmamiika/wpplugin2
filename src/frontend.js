import React from 'react';
import ReactDOM from 'react-dom';
import './frontend.scss';

const divsToUpdate = document.querySelectorAll('.paying-attention-update-me');

divsToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector('pre').innerHTML);
  console.log(data, 'asdasd');
  ReactDOM.render(<Quiz question={data.question} />, div);
  div.classList.remove('paying-attention-update-me');
});

function Quiz(props) {
  return <div className="paying-attention-frontend">{props.question}</div>;
}
