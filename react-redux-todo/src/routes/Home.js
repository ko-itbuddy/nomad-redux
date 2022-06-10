import { useState } from 'react';
import ToDo from '../components/ToDo';

function Home() {
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>

        {toHaveDescription.map((todo) => <ToDo />)}
      </ul>
    </>
  );
}

function getCurrState() {

}

export default Home;
