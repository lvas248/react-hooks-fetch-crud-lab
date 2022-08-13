import React from "react";

function QuestionItem({ question, deleteItemFromState, updateIndexState }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick(){
    fetch(`http://localhost:4000/questions/${question.id}`)
    .then(res=> res.json())
    .then(data => deleteItemFromState(data))
  }

  function handleChange(e){

    fetch(`http://localhost:4000/questions/${question.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "correctIndex": e.target.value
      })
    })
    .then(res => res.json())
    .then(data => updateIndexState(data))
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={(e)=> handleChange(e)}defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
