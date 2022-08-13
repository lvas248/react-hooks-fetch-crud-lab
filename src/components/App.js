import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [newQuestion, setNewQuestion] = useState([])

  function addToQuestList(questObj){
    setNewQuestion(questObj)
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addToQuestList={addToQuestList}/> : <QuestionList newQuestion={newQuestion}/>}
    </main>
  );
}

export default App;
