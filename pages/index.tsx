import React from 'react';
import { useUnit} from 'effector-react';
import { $counter, incrementNumber, decrementNumber, randomNumber, cbrosNumer} from './api/stores/counter';


export default function Home() {
  const counter = useUnit($counter);


  return (
    <div className='all'>
      <div className="mini-conetainer">
      <h1>Число: {counter}</h1>
      <div className='buttons-cotainer'>
      <button  className='button1' onClick={() =>    incrementNumber()}>Увеличить</button>
      <button  className='button2' onClick={() =>    decrementNumber()}>Уменьшить</button>
      <button  className='button3' onClick={() =>    randomNumber()}>Рандом</button>
   
      </div>

<button  className='button4' onClick={() =>   cbrosNumer()}>Сброс</button>

      </div>
    </div>
  );
}
