import React, {Fragment} from 'react';
import JavaScriptModal from './modals/JavaScriptModal';
import ReactModal from './modals/ReactModal';
import SassModal from './modals/SassModal';
import RegexModal from './modals/RegexModal';
import GithubModal from './modals/GithubModal';
import HtmlModal from './modals/HtmlModal';
import BootstrapModal from './modals/BootstrapModal';
import RestApiModal from './modals/RestApiModal';
import BundlersModal from './modals/BundlersModal';



const HomeModals = () => {
  return (
    <Fragment>
      <div id="javascript-modal" className="modal" style={modalStyle}>
        <JavaScriptModal />
      </div>
      <div id="react-modal" className="modal" style={modalStyle}>
        <ReactModal />
      </div>
      <div id="sass-modal" className="modal" style={modalStyle}>
        <SassModal />
      </div>
      <div id="regex-modal" className="modal" style={modalStyle}>
        <RegexModal />
      </div>
      <div id="github-modal" className="modal" style={modalStyle}>
        <GithubModal />
      </div>
      <div id="html-modal" className="modal" style={modalStyle}>
        <HtmlModal />
      </div>
      <div id="bootstrap-modal" className="modal" style={modalStyle}>
        <BootstrapModal />
      </div>
      <div id="rest-modal" className="modal" style={modalStyle}>
        <RestApiModal />
      </div>
      <div id="bundlers-modal" className="modal" style={modalStyle}>
        <BundlersModal />
      </div>
    </Fragment>
  )
}

const modalStyle = {
  width: '80%',
  minHeight: '80vh'
};  





export default HomeModals
