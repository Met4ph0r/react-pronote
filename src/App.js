import React from 'react';
import './App.css'

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: localStorage.getItem("note")
    }
  }



  render() {
    localStorage.setItem("note", this.state.text)
    return <>
    <h1>ProNote</h1>
    <div className="container">
      <div className="input">
        <div>Input</div>
        <textarea className="input-text" defaultValue={this.state.text} onChange={(e) => { this.setState({ text: e.target.value }) }} />
        <button onClick={() => { localStorage.clear(); this.setState({ text: "" }); document.querySelector(".input-text").value = "" }}>CLEAR</button>
      </div>
      <div className="output">
        <div>Pro Note</div>
        <textarea className="output-text" value={this.state.text} disabled={true} />
      </div>
    </div>
    </> 
  }

}
export default TextInput;