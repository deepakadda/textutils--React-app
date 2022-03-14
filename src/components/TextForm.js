import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const hadleUpclick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };

  //For lowerCase
  const hadleLoclick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };

  const downloadText = () => {
    function download(filename, text) {
      //we will be creating a anchor elements
      var element = document.createElement("a");

      //we will set attributes of above anchor
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }
    // Start file download.
    document.getElementById("dwn-btn").addEventListener(
      "click",
      function () {
        // Generate download of hello.txt file with some content
        var text = document.getElementById("myBox").value;
        var filename = "hello.txt";

        download(filename, text);
      },
      false
    );
    props.showAlert("Txt has been downloaded", "success");
  };

  //copy text
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  //remove extraspaces
  const handleExtraSpaces = () => {
    //basically yah spaces ko as a array store karega then bad use ek single spaces se join kara dega
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleonChange = (event) => {
    // console.log("on change");

    //yah value ko usi ke barabar set karke new text type karne dega
    setText(event.target.value);
  };
  //to count the word
  const countWords = (word) => {
    //Exclude the start and end spaces of a string. The following line of regex expression will remove the start and end spaces of the given string.
    var text1 = word.replace(/(^\s*)|(\s*$)/gi, "");

    // Try to reduce multiple spaces to a single space.
    var text2 = text1.replace(/[ ]{2,}/gi, " ");

    // Try to exclude a new line with a start spacing.
    var text = text2.replace(/\n /, "\n");
    return text.split(" ").length;
  };
  return (
    <>
      {/* <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div> */}
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          {/* <label for="myBox" className="form-label">
          Example textarea
        </label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-3 " onClick={hadleUpclick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-3 mx-3 " onClick={hadleLoclick}>
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary my-3 mx-3 "
            id="dwn-btn"
            onClick={downloadText}
          >
            Download text
          </button>
          <button
            className="btn btn-primary my-3 mx-3 "
            id="dwn-btn"
            onClick={handleCopy}
          >
            Copy text
          </button>
          <button
            className="btn btn-primary my-3 mx-3 "
            id="dwn-btn"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {countWords(text)} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Enter the text above to preview here"}</p>
      </div>
    </>
  );
}
