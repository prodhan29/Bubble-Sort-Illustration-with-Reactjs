import './App.css';
import { useEffect, useState } from 'react';

const INTERVAL_TIME = 300;

const elementStyle = {
  borderRadius: '5px',
  padding: '10px',
  border: '1px solid #E0E0E0',
}

function App() {

  const [intValue, setIntValue] = useState(1);
  const [iIndex, setiIndex] = useState(0);
  const [jIndex, setJIndex] = useState(0);
  const [ages, setAges] = useState([200,56,88,2,100,150,14,71,39,120,19,31,51,61]);
  const [msg, setCompleteMsg] = useState('');
  

  const swap=(arr, xp, yp)=> {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }

  const print=()=>{
    setTimeout(()=> {
      setIntValue(()=>intValue+1);
      setJIndex(()=> jIndex+1);
      bubbleSort(ages, ages.length, iIndex, jIndex);

      if(jIndex !== 0 && jIndex % (ages.length- iIndex) === 0) {
        setiIndex(iIndex +1);
        setJIndex(0);
      }
    }, INTERVAL_TIME);
  }

  const getElementStyle=(item)=> {
    return {
      ...elementStyle, 
      backgroundColor: ages[jIndex-1] === item ? '#E57373' : (ages[jIndex] === item ? '#4CAF50' : '#FFFDE7'),
      height: (item+25)+'px',
    }
  }

  const updateCurrentState=( arr)=>{
    setAges(arr);
  }

  const bubbleSort=(arr, n, iIndex, jIndex) => {
    let i, j;
    for (i = iIndex; i <= iIndex ; i++)
    {
        for (j = jIndex; j <= jIndex; j++)
        {
            if (arr[j] > arr[j+1])
            {
              swap(arr,j,j+1);
              updateCurrentState(arr);
            }
        }
    }
  }

  useEffect(()=>{
    if(iIndex !== ages.length) print();
    else setCompleteMsg("Complete");
  },[intValue]
  );

  return (
    <div className="App">
        <h1> Bubble Sort </h1>
        <h4> Steps left: {ages.length - iIndex} </h4>
      
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
           {ages.map((item, i)=> {
              return <div style={{...getElementStyle(item)}}> {item} </div>
           })}
        </div>
        <div style={{ display: msg === '' ? 'none' : 'block'}}> Array is now sorted </div>
    </div>
  );
}

export default App;
