import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  // const names = ['Tamim Iqbal', 'Sakib Al Hasan', 'Mashrafi', 'Musfiq', 'Ashraful']
  const players = [
    { name: 'Tamim Iqbal', salary: 100000, player: 1 },
    { name: 'Sakib Al Hasan', salary: 200000, player: 2 },
    { name: 'Ashraful', salary: 120000, player: 3 },
    { name: 'Mashrafee', salary: 800000, player: 4 },
    { name: 'Mustafiz', salary: 110000, player: 4 },
    { name: 'Afradi', salary: 200000, player: 5 }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          players.map(player => <Friend name={player.name} profession={player.salary} play={player.player}></Friend>)
        }
        {/* {
          names.map(name => <li>{name}</li>)
        }
        {
          names.map(name => <Friend name={name}></Friend>)
        } */}
        {/* <Friend name="Tamim Iqbal" profession="Cricketer"></Friend>
        <Friend name="Sakib Al Hasan" profession="Cricketer"></Friend> */}

        <Counter></Counter>

      </header>
    </div>
  );
}
function Friend(props) {
  console.log(props)
  return (
    <div className='child'>
      <h1>Name: {props.name}</h1>
      <p>Salary: {props.profession}</p>
      <p>Player Serial: {props.play}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(220278);
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  const decreaseCount = () => setCount(count - 1)


  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Increase</button>
    </div>
  )
}

export default App;
