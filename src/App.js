import React, { useState } from "react";
import Modal from "./Components/Modal";
import Backdrop from "./Components/Backdrop";
import {BlockPicker} from 'react-color';
function App() {
  const [Popupclose, setPopupOpen] = useState(false);
  function closeModalHandler ()  {
    setPopupOpen(false);
  }
  return (
    <div className="App">
      <div className="Pop-up">
        <small className="text"
          onClick={() => {
            setPopupOpen(true);
          }}>
          Show popup
        </small>
      </div>
      
      {Popupclose &&  <Modal setOpenPopup={setPopupOpen} /> }
      {Popupclose && <Backdrop setOpenPopup={closeModalHandler}/>}
    </div>
  );
}

export default App;
