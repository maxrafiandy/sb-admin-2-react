import React, { Component } from 'react';

class MorrisChart extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Morris.js Charts</h1>
          </div>
          {/* <!-- /.col-lg-12 --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="row">
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Area Chart Example
                  </div>
              {/* <!-- /.panel-heading --> */}
              <div className="panel-body">
                <div id="morris-area-chart"></div>
              </div>
              {/* <!-- /.panel-body --> */}
            </div>
            {/* <!-- /.panel --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Bar Chart Example
                  </div>
              {/* <!-- /.panel-heading --> */}
              <div className="panel-body">
                <div id="morris-bar-chart"></div>
              </div>
              {/* <!-- /.panel-body --> */}
            </div>
            {/* <!-- /.panel --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Line Chart Example
              </div>
              {/* <!-- /.panel-heading --> */}
              <div className="panel-body">
                <div id="morris-line-chart"></div>
              </div>
              {/* <!-- /.panel-body --> */}
            </div>
            {/* <!-- /.panel --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Donut Chart Example
                  </div>
              {/* <!-- /.panel-heading --> */}
              <div className="panel-body">
                <div id="morris-donut-chart"></div>
              </div>
              {/* <!-- /.panel-body --> */}
            </div>
            {/* <!-- /.panel --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                Morris.js Usage
                  </div>
              {/* <!-- /.panel-heading --> */}
              <div className="panel-body">
                <p>Morris.js is a jQuery based charting plugin created by Olly Smith. In SB Admin, we are using the most recent version of Morris.js which includes the resize function, which makes the charts fully responsive. The documentation for Morris.js is available on their website, <a target="_blank" href="http://morrisjs.github.io/morris.js/">http://morrisjs.github.io/morris.js/</a>.</p>
                <a target="_blank" className="btn btn-default btn-lg btn-block" href="http://morrisjs.github.io/morris.js/">View Morris.js Documentation</a>
              </div>
              {/* <!-- /.panel-body --> */}
            </div>
            {/* <!-- /.panel --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
    );
  }
}

export default MorrisChart;

