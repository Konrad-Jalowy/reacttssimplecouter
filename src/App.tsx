import React, {useState} from 'react';
function App() {
  const [number , setNumber] = useState<number>(0);
  const handleCounter = (operation: string) : void => {
        if(operation === 'inc')
        {
          return setNumber(number + 1);
        }
        else if (operation === 'dec')
        {
          return setNumber(number - 1);
        }
  }
  return (
    <>
    <p>Licznik: {number}</p>
    <button onClick={() => handleCounter('inc')}>Increment</button>
    <p></p>
    <button onClick={() => handleCounter('dec')}>Decrement</button>
    </>
  );
}

export default App;
