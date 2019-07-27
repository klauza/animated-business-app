import React, {Fragment} from 'react';

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
      
        <div className="row">
          <div className="col s12 text-center">
            <h2 className="d-inline-block">Bootstrap</h2>
            <h4 className="d-inline-block">but also Materialize</h4>
          </div>
        </div>

           

        <div className="row">
          <div className="col s6 center-align">

            <div className="row align-items-center" style={staticHeight}>
              <div className="col-12 p-0">
                <span className="d-block">Flexibility1</span>
                <i className="material-icons d-block">book</i>
              </div>
            </div>


            <div className="row align-items-center" style={staticHeight}>
              <div className="col-12 p-0">
                <span className="d-block">Flexibility1</span>
                <i className="material-icons d-block">book</i>
              </div>
            </div>
            
          </div>

          <div className="col s6 center-align">
            
            <div className="row align-items-center" style={staticHeight}>
              <div className="col-12 p-0">
                <span className="d-block">Flexibility1</span>
                <i className="material-icons d-block">book</i>
              </div>
            </div> 

            <div className="row align-items-center" style={staticHeight}>
              <div className="col-12 p-0">
                <span className="d-block">Flexibility1</span>
                <i className="material-icons d-block">book</i>
              </div>
            </div>

          </div>
        </div> 

        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
            <img className="img-fluid" alt="Responsive image" src="http://via.placeholder.com/1920x1080" alt=""/>
          </div>
        </div>
        
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
  height: 'auto'
};  

const staticHeight = {
  height: '150px',
  width: '100px',
  margin: 'auto'
}
const inline = {
  display: 'inline-block'
}



export default HomeModals
