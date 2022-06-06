import React, { useState } from "react";
import "../Components/Modal2.css";
import { CirclePicker } from "react-color";
function Modal2() {
  const [Color, setColor] = useState("#ff0000");
  const [Color1, setColor1] = useState("#ff0000");
  const [Color2, setColor2] = useState("#ff0000");
  const [Color3, setColor3] = useState("#ff0000");
  const [Color4, setColor4] = useState("#ff0000");
  const [colorpopup, setcolorpopup] = useState(false);
  const onClick = () => {
    setcolorpopup((prev) => !prev);
  };
  const [colorpopup1, setcolorpopup1] = useState(false);
  const onClick1 = () => {
    setcolorpopup1((prev) => !prev);
  };
  const [colorpopup2, setcolorpopup2] = useState(false);
  const onClick2 = () => {
    setcolorpopup2((prev) => !prev);
  };
  const [colorpopup3, setcolorpopup3] = useState(false);
  const onClick3 = () => {
    setcolorpopup3((prev) => !prev);
  };
  const [colorpopup4, setcolorpopup4] = useState(false);
  const onClick4 = () => {
    setcolorpopup4((prev) => !prev);
  };
  return (
    <div
      style={{
        backgroundColor: Color1,
      }}
      className="Modal2-Container"
    >
      <div className="Text-1">
        <p>Font Color</p>
        <button  className="text-1-btn" onClick={onClick}>Color Test</button>
      </div>
      <div className="Color1">
        {colorpopup && (
          <CirclePicker
            color={Color}
            onChangeComplete={(Color) => {
              setColor(Color.hex);
            }}
          />
        )}
      </div>
      <div style={{ Color }} className="Text-2">
        <p>Backrground Color</p>

        <button  className="text-2-btn" style={{ backgroundColor: Color1 }} onClick={onClick1}>
          Color Test
        </button>
      </div>
      <div className="Color1">
        {colorpopup1 && (
          <CirclePicker
            Color1={Color1}
            onChangeComplete={(Color1) => {
              setColor1(Color1.hex);
            }}
          />
        )}
      </div>
      <div className="Text-3">
        <p>Button Color</p>
        <button  className="text-3-btn" style={{ backgroundColor: Color3 }} onClick={onClick2}>
          Color Test
        </button>
      </div>
      <div className="Color1">
        {colorpopup2 && (
          <CirclePicker
            Color2={Color2}
            onChangeComplete={(Color2) => {
              setColor2(Color2.hex);
            }}
          />
        )}
      </div>
      <div className="Text-4">
        <div className="text-4-1">
        <p>Button Border Color</p>
        <p>{Color3}</p>
        </div>
        <div className="btn">
        <button className="text-4-btn" onClick={onClick3}></button>
      </div></div>
      <div className="Color1">
        {colorpopup3 && (
          <CirclePicker
            color3={Color3}
            onChangeComplete={(Color3) => {
              setColor3(Color3.hex);
            }}
          />
        )}
      </div>
      <div className="Text-5">
      <div className="text-4-1">
        <p>Button Mouse Color</p>
        <p>{Color4}</p>
        </div>
        <button  className="text-5-btn" onClick={onClick4}>Color Test</button>
      </div>
      <div className="Color1">{colorpopup4 && <CirclePicker Color4={Color4}
            onChangeComplete={(Color4) => {
              setColor4(Color4.hex);
            }}/>}</div>
    </div>
  );
}
export default Modal2;
