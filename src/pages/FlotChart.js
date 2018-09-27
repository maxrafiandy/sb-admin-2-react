import React, { Component } from 'react';

class FlotChart extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Flot</h1>
          </div>
          {/* <!-- /.col-lg-12  --> */}
        </div>
        {/* <!-- /.row  --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                Line Chart Example

                <div className="pull-right">
                  <div className="btn-group">
                    <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                      Actions
                    <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu pull-right" role="menu">
                      <li><a >Action</a>
                      </li>
                      <li><a >Another action</a>
                      </li>
                      <li><a >Something else here</a>
                      </li>
                      <li className="divider"></li>
                      <li><a >Separated link</a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
              {/* <!-- /.panel-heading  --> */}
              <div className="panel-body">
                <div className="flot-chart">
                  <div className="flot-chart-content" id="flot-line-chart"></div>
                </div>
              </div>
              {/* <!-- /.panel-body  --> */}
            </div>
            {/* <!-- /.panel  --> */}
          </div>
          {/* <!-- /.col-lg-12  --> */}
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Pie Chart Example
                        </div>
              {/* <!-- /.panel-heading  --> */}
              <div className="panel-body">
                <div className="flot-chart">
                  <div className="flot-chart-content" id="flot-pie-chart"></div>
                </div>
              </div>
              {/* <!-- /.panel-body  --> */}
            </div>
            {/* <!-- /.panel  --> */}
          </div>
          {/* <!-- /.col-lg-6  --> */}
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Multiple Axes Line Chart Example
                        </div>
              {/* <!-- /.panel-heading  --> */}
              <div className="panel-body">
                <div className="flot-chart">
                  <div className="flot-chart-content" id="flot-line-chart-multi"></div>
                </div>
              </div>
              {/* <!-- /.panel-body  --> */}
            </div>
            {/* <!-- /.panel  --> */}
          </div>
          {/* <!-- /.col-lg-6  --> */}
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Moving Line Chart Example
                        </div>
              {/* <!-- /.panel-heading  --> */}
              <div className="panel-body">
                <div className="flot-chart">
                  <div className="flot-chart-content" id="flot-line-chart-moving"></div>
                </div>
              </div>
              {/* <!-- /.panel-body  --> */}
            </div>
            {/* <!-- /.panel  --> */}
          </div>
          {/* <!-- /.col-lg-6  --> */}
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Bar Chart Example
                        </div>
              {/* <!-- /.panel-heading  --> */}
              <div className="panel-body">
                <div className="flot-chart">
                  <div className="flot-chart-content" id="flot-bar-chart"></div>
                </div>
              </div>
              {/* <!-- /.panel-body  --> */}
            </div>
            {/* <!-- /.panel  --> */}
          </div>
          {/* <!-- /.col-lg-6  --> */}
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                Flot Charts Usage
                        </div>
              {/* <!-- /.panel-heading  --> */}
              <div className="panel-body">
                <p>Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks, and interactive features. In SB Admin, we are using the most recent version of Flot along with a few plugins to enhance the user experience. The Flot plugins being used are the tooltip plugin for hoverable tooltips, and the resize plugin for fully responsive charts. The documentation for Flot Charts is available on their website, <a target="_blank" href="http://www.flotcharts.org/">http://www.flotcharts.org/</a>.</p>
                <a target="_blank" className="btn btn-default btn-lg btn-block" href="http://www.flotcharts.org/">View Flot Charts Documentation</a>
              </div>
              {/* <!-- /.panel-body  --> */}
            </div>
            {/* <!-- /.panel  --> */}
          </div>
          {/* <!-- /.col-lg-6  --> */}
        </div>
        {/* <!-- /.row  --> */}
      </div>
    );
  }
}

export default FlotChart;

