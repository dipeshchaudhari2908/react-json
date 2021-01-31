import React from 'react';
import './App.css';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <u><h1>Display JSON Data</h1></u>
      <div className="posts">
        { data.map(post => {
        
          return(
            <div className="post">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            </div>
          )

        })}
      </div>
    </div>
  );
}

export default App;
