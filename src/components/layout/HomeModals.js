import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const HomeModals = () => {
  return (
    <div id="javascript-modal" className="modal" style={modalStyle}>
      <h2>this is js modal</h2>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default HomeModals
