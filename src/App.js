import React, { Component } from 'react';
import './index.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'React Simple Contact Application',
      act: 0,
      index: '',
      datas: []
    }
  } 

  

  fSubmit = (e) =>{
    e.preventDefault();
    
    console.log('check');

    let datas = this.state.datas;
    let number = this.refs.number.value;
    let address = this.refs.address.value;

    if(this.state.act === 0){   //new
      let data = {
        number, address
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].number = number;
      datas[index].address = address;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.number.focus();
  }
  functionRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.number.focus();
  }
  functionEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.number.value = data.number;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.number.focus();
  } 
  

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="Phone number" className="formField" />
          <input type="text" ref="address" placeholder="your address" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>
        <pre>
         
        </pre>
      </div>
    );
  }
}

export default App;