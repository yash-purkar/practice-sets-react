import './App.css';
// import Question from './Questions.js';
// import { QuestionsByMAs } from './react-questions/QuestionsByMAs';
// import { Questions } from './practice-set-1/Questions'; //set1
// import { Questions } from './practice-set-2/Questions'; //set2
// import { Questions } from './practice-set-3/Questions'
import { Questions } from './FilterWithReact/Questions';


function App() {
  return (
    <div className="App">
      {/* <QuestionsByMAs /> */}
      {/* <Question />  */}
      <Questions />
    </div>
  );
}

export default App;
