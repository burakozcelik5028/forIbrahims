import React from 'react';
import '../App.css';

const List = ({ items, removeWord }) => {
    
  return (
    <>
      {items.filter((oneWord) => oneWord.image !== '').map((oneWord) => {
        const { id, word, meaning, image, description } = oneWord;
        return (
          <article key={id} className='word'>
            <img src={image} alt={word} />
            <div>
              <h4>{word}</h4>
              <p>{meaning}</p>
              <p>{description}</p>
            </div>
            <button onClick={() => removeWord(id)}>sil</button>
          </article>
        );
      })}
    </>
  );
};

export default List;