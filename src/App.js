import React, { Component } from 'react';
import './App.css';

const first = ['音思', '花溪', '夏娜', '苏妍', '旧情', '灵风', '萧瑟', '暮雨', '雪雯']
const second = ['丨', '丶', '灬', '艹', '丿', '巛']
const third = ['miSs', 'Miss', 'Melody', 'Kitting', 'Ghost', 'Anesthesi', 'Champion', 'NEsurper', 'loneLy']

const randomNum = (minNum, maxNum) => {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
}
const getStrFromArr = arr => {
  return arr[randomNum(0, arr.length - 1)]
}
const generate = () => {
  return getStrFromArr(first) + getStrFromArr(second) + getStrFromArr(third)
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }
  componentDidMount() {
    this.setState({
      name: generate()
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>帮助你生成一个流行(sha diao)的LOL网名</h2>
          <h5>Help you generate a Fashionable League of legends name in game</h5>
          <div onClick={() => {
            this.setState({
              name: generate()
            })
          }} className="button">Change another one</div>
          <div>{this.state.name}</div>
        </header>
      </div>
    );
  }
}

export default App;
