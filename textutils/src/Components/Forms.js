import React, { useState } from 'react';

export default function Forms(props) {
    const [text, setText] = useState("");

    function Upper() {
        setText(text.toUpperCase());
    }
    function Lower() {
        setText(text.toLowerCase());
    }
    function Clear() {
        setText("");
    }
    function Capi() {
        setText(text.charAt(0).toUpperCase() + text.slice(1));
    }

    // safe defaults in case props.mode is undefined
    const isDark = props.mode === "dark";


    return (
        <>
            <div className="container mt-3">
                <textarea
                    className="form-control"
                    style={{
                        backgroundColor: props.mode === "dark" ? "#4f4d4d" : "white",
                        color: props.mode === "dark" ? "white" : "black"
                    }}
                    rows="5"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>


                <button className="btn btn-primary mt-3" onClick={Upper}>
                    Convert to UpperCase
                </button>
                <button className="btn btn-primary mt-3 ms-4" onClick={Lower}>
                    Convert to LowerCase
                </button>
                <button className="btn btn-primary mt-3 ms-4" onClick={Clear}>
                    Clear Box
                </button>
                <button className="btn btn-primary mt-3 ms-4" onClick={Capi}>
                    Capitalize
                </button>
            </div>

            <div className="container">
                <div className='alert alert-secondary my-4' style={{
                    backgroundColor: props.mode === "dark" ? "#4f4d4d" : "white",
                    color: props.mode === "dark" ? "white" : "black"
                }}>

                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>

                <div className="alert alert-secondary" role="alert" style={{
                    backgroundColor: props.mode === "dark" ? "#4f4d4d" : "white",
                    color: props.mode === "dark" ? "white" : "black"
                }}>
                    <h3>Your Text Summary</h3>
                    <p>
                        <mark>
                            {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length}
                        </mark> Words and <mark>{text.length}</mark> Characters
                    </p>
                    <p>
                        {text.trim().length === 0 ? 0 : (0.008 * text.trim().split(/\s+/).length).toFixed(2)} Minutes Reading Time
                    </p>
                </div>
            </div>
        </>
    );
}
