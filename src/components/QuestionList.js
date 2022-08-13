import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( {newQuestion} ) {

  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(res=> res.json())
    .then(data => setQuestions(data))
  },[])
  
  function deleteItemFromState(deletedQuest){
    setQuestions(questions.filter( quest =>{
      return quest.id !== deletedQuest.id
    }))
  }

  function updateIndexState(obj){
    setQuestions(questions.map(quest =>{
      if(quest.id === obj.id) return obj
      else return quest
    }))
  }

  const questList = questions.map(quest => {
    return <QuestionItem updateIndexState={updateIndexState} deleteItemFromState={deleteItemFromState} key={quest.id} question={quest}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questList}</ul>
    </section>
  );
}

export default QuestionList;
