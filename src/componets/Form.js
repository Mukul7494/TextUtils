import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("Enter Your Text");

  // function countWord(text) {
  //   // Initialize the word counter
  //   var count = 0;

  //   // Split the words on each
  //   // space character
  //   var split = text.split(" ");

  //   // Loop through the words and
  //   // increase the counter when
  //   // each split word is not empty
  //   for (var i = 0; i < split.length; i++) {
  //     if (split[i] !== "") {
  //       count += 1;
  //     }
  //   }

  //   return count;
  // }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  //onclick
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert("Converted to uppercase", "Success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);

    props.showAlert("Converted to lowercase ", "Success");
  };
  const handleClear = () => {
    setText("");

    props.showAlert("Text cleared", "Success");
  };

  return (
    // this is jsx fragment because we can't return more than one component
    <>
      <div
        className="container my-2"
        style={{
          color: props.Mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              color: props.Mode === "dark" ? "white" : "black",
              backgroundColor: props.Mode === "dark" ? "#46495299" : "white",
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleLowClick}>
          convert to LowerCase
        </button>

        <button className="btn btn-primary m-2" onClick={handleClear}>
          clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.Mode === "dark" ? "white" : "black",
          backgroundColor: props.Mode === "dark" ? "grey" : "white",
        }}
      >
        <h1>your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words
        </p>
        <p>{text.length} charaters</p>
        <h2>Preview</h2>
        <p>{text.length == "" ? "Nothing to show" : text}</p>
      </div>
    </>
  );
}
