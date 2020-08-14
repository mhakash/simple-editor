import React from "react";
import Editor from "./components/editor";

function App() {
  return (
    <div style={{
      width: "500px",
      fontSize: "16px",
      marginLeft:'100px',
      marginTop: '50px',
      borderRadius: '3px',
      boxShadow: '0px 2px 2px 0 rgba(0,0,0,0.2)',
      padding: '10px 20px 20px 20px',
      background: '#fff'
    }}>
      <div style={{}}>
        <Editor initialCode={`console.log('hello')`} />
        
      </div>{" "}
    </div>
  );
}

export default App;
