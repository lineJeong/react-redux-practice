import * as React from 'react';
import './style.css';
import {useDispatch, useSelector} from 'react-redux';

export default function App() {

  const 꺼내온거 = useSelector((state) => state);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <p>{`몸무게 : ${꺼내온거}`}</p>
      <button onClick={() => {dispatch({type: '증가'})}}>더하기</button>
      <button onClick={() => {dispatch({type: '감소'})}}>빼기</button>
    </div>
  );
}
