import React, { Component } from 'react';

class Blank extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">404</h1>
            </div>
            {/* <!-- /.col-lg-12 --> */}
          </div>
          {/* <!-- /.row --> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="alert alert-danger">
                Oopss! Sorry, page not found.
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </div>
    );
  }
}

export default Blank;