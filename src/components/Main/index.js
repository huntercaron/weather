import React, { Component } from 'react';
import './main.css';

class Main extends Component {
  state = {
    weather: {}
  }

  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=967218598dbdf5cdc2bfece78c2438ae")
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(response => {
        console.log(response);
      })
  }

  render() {
    return (
      <div>
        <h1>testing fuckers</h1>
      </div>
    );
  }
}

export default Main;