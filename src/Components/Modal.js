import React, {useState}from "react";
import "../Components/Modal.css";
import Modal2 from "./Modal2";
import {BlockPicker} from 'react-color';
function Modal({ setOpenPopup }) {
    const [ChangeTheme, setChangeTheme] = useState(false);
    const onClicke = () => {
        setChangeTheme((prev) => !prev);
    }
  return (
      <div className="backrground-container">
    <div className="Modal-Container">
      <div className="Container">
        <div className="Container1">
          <p className="theme">Theme Color</p>
          <p onClick={onClicke}>Change Theme</p>
         
        </div>
        {ChangeTheme && <Modal2/>}
        <div className="Button-container">
          <button
            className="Cancel-btn"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            Cancel
          </button>
          <button className="Save-btn">Save</button>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Modal;
