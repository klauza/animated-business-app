import React, {Fragment} from 'react';
import Bootstrap from './modals/Bootstrap';

const HomeModals = () => {
  return (
    <Fragment>
      <div id="javascript-modal" className="modal" style={modalStyle}>
        <h2>this is js modal</h2>
      </div>
      <div id="react-modal" className="modal" style={modalStyle}>
        <h2>this is react modal</h2>
      </div>
      <div id="sass-modal" className="modal" style={modalStyle}>
        <h2>this is sass modal</h2>
      </div>
      <div id="regex-modal" className="modal" style={modalStyle}>
        <h2>this is regex modal</h2>
      </div>
      <div id="github-modal" className="modal" style={modalStyle}>
        <h2>this is github modal</h2>
      </div>
      <div id="html-modal" className="modal" style={modalStyle}>
        <h2>this is html modal</h2>
      </div>
      <div id="bootstrap-modal" className="modal" style={modalStyle}>
        <Bootstrap/>
      </div>

      <div id="rest-modal" className="modal" style={modalStyle}>
        <h2>this is restful api modal</h2>
      </div>
      <div id="bundlers-modal" className="modal" style={modalStyle}>
        <h2>this is bundlers modal</h2>
      </div>
    </Fragment>
  )
}

const modalStyle = {
  width: '80%',
  minHeight: '80vh'
};  





export default HomeModals
