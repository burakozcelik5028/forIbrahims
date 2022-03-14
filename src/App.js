import './App.css';
import { useState } from 'react';
import List from './Components/List'
import WordForm from './Components/WordForm';
import DUMMY_DATA from './Dummy'

function App() {

  const [words, setWords] = useState(DUMMY_DATA);

  const saveWordDataHandler = (enteredWordData) => {
    const wordData = {
      ...enteredWordData,
      id: Math.random.toString
    };

    setWords((prevDatas) => {
      return [wordData, ...prevDatas];
    });
  };

  const onClearClickHandler = () => {
    setWords([]);
  };

  const onrefreshClickHandler = () => {
    setWords(DUMMY_DATA);
  };

  const removeWord = (id) => {
    const newWordList = words.filter((word) => word.id !== id);
    setWords(newWordList);
  }
console.table(words);
  return (
    <main>
      <section className='container'>
        <WordForm onSaveWordData={saveWordDataHandler}></WordForm>
        <h3>{words.length} Words to learn</h3>
        <List items={words} removeWord={removeWord} />
        <button onClick={onClearClickHandler}>clear all</button>
        <button onClick={onrefreshClickHandler}> refresh </button>
      </section>
    </main>
  );
}

export default App;
