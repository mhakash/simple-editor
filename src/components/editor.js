import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/idea.css";
import "./editor.css";
import codeRunner from "./coderunner";

const Editor = ({ initialCode = "" }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOutput(`${"\n"}${codeRunner(code)}`);
  }, [code]);

  const options = {
    mode: "javascript",
    theme: "idea",
    tabSize: 2,
    scrollbarStyle: null,
  };
  const handleBeforeChange = (editor, data, value) => {
    setCode(value);
  };
  // const run = () => {
  //   setOutput(`${codeRunner(code)}`);
  //   console.log("hello");
  // };
  // const handleChange = () => {
  //   setOutput(`${"\n"}${codeRunner(code)}`);
  // };
  return (
    <div className="editor">
      <div style={{ color: "#666", fontSize: 20 }}>Javascript Editor</div>
      <hr />
      <CodeMirror
        value={code}
        options={options}
        onBeforeChange={handleBeforeChange}
      />{" "}
      {/* <button onClick={run}>run</button> */} <hr />
      <div style={{ color: "#666", fontSize: 15 }}>console output :</div>
      <div style={{ marginTop: "20px" }}> {output} </div>{" "}
    </div>
  );
};

export default Editor;
