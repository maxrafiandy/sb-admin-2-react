import React, { Component } from 'react';

class Dashboard extends Component {

  render() {
    return (
      <div id="page-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Dashboard</h1>
          </div>
          {/*  /.col-lg-12  --> */}
        </div>
        {/*  /.row  --> */}
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-comments fa-5x"></i>
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">26</div>
                    <div>New Comments!</div>
                  </div>
                </div>
              </div>
              <a >
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                  <div className="clearfix"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-green">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-tasks fa-5x"></i>
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">12</div>
                    <div>New Tasks!</div>
                  </div>
                </div>
              </div>
              <a >
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                  <div className="clearfix"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-yellow">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-shopping-cart fa-5x"></i>
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">124</div>
                    <div>New Orders!</div>
                  </div>
                </div>
              </div>
              <a >
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                  <div className="clearfix"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-red">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-support fa-5x"></i>
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">13</div>
                    <div>Support Tickets!</div>
                  </div>
                </div>
              </div>
              <a >
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                  <div className="clearfix"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/*  /.row  --> */}
        <div className="row">
          <div className="col-lg-8">
            <div className="panel panel-default">
              <div className="panel-heading">
                <i className="fa fa-clock-o fa-fw"></i> Responsive Timeline
            </div>
              {/*  /.panel-heading  --> */}
              <div className="panel-body">
                <ul className="timeline">
                  <li>
                    <div className="timeline-badge"><i className="fa fa-check"></i>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Lorem ipsum dolor</h4>
                        <p><small className="text-muted"><i className="fa fa-clock-o"></i> 11 hours ago via Twitter</small>
                        </p>
                      </div>
                      <div className="timeline-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis
                          omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium,
                        porro voluptas suscipit facere rem dicta, debitis.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge warning"><i className="fa fa-credit-card"></i>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Lorem ipsum dolor</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur
                          commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio,
                        tempore. Animi officiis alias, officia repellendus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est
                          tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad
                        aut recusandae minus eaque facere.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge danger"><i className="fa fa-bomb"></i>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Lorem ipsum dolor</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim
                          eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam
                        quaerat, magni commodi quisquam.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Lorem ipsum dolor</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores
                          sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem
                        delectus libero, omnis ut debitis!</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge info"><i className="fa fa-save"></i>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Lorem ipsum dolor</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at
                          est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit
                        nulla qui! Laborum, atque.</p>
                        <hr />
                        <div className="btn-group">
                          <button type="button" className="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-gear"></i> <span className="caret"></span>
                          </button>
                          <ul className="dropdown-menu" role="menu">
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
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Lorem ipsum dolor</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure
                          expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur
                        nostrum sequi. Consequuntur, commodi.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge success"><i className="fa fa-graduation-cap"></i>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Lorem ipsum dolor</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore
                          officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam,
                        enim incidunt quisquam maxime neque eaque.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/*  /.panel-body  --> */}
            </div>
            {/*  /.panel  --> */}
          </div>
          {/*  /.col-lg-8  --> */}
          <div className="col-lg-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                <i className="fa fa-bell fa-fw"></i> Notifications Panel
            </div>
              {/*  /.panel-heading  --> */}
              <div className="panel-body">
                <div className="list-group">
                  <a  className="list-group-item">
                    <i className="fa fa-comment fa-fw"></i> New Comment
                  <span className="pull-right text-muted small"><em>4 minutes ago</em>
                    </span>
                  </a>
                  <a  className="list-group-item">
                    <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                  <span className="pull-right text-muted small"><em>12 minutes ago</em>
                    </span>
                  </a>
                  <a  className="list-group-item">
                    <i className="fa fa-envelope fa-fw"></i> Message Sent
                  <span className="pull-right text-muted small"><em>27 minutes ago</em>
                    </span>
                  </a>
                  <a  className="list-group-item">
                    <i className="fa fa-tasks fa-fw"></i> New Task
                  <span className="pull-right text-muted small"><em>43 minutes ago</em>
                    </span>
                  </a>
                  <a  className="list-group-item">
                    <i className="fa fa-upload fa-fw"></i> Server Rebooted
                  <span className="pull-right text-muted small"><em>11:32 AM</em>
                    </span>
                  </a>
                  <a  className="list-group-item">
                    <i className="fa fa-bolt fa-fw"></i> Server Crashed!
                  <span className="pull-right text-muted small"><em>11:13 AM</em>
                    </span>
                  </a>
                  <a  className="list-group-item">
                    <i className="fa fa-warning fa-fw"></i> Server Not Responding
                  <span className="pull-right text-muted small"><em>10:57 AM</em>
                    </span>
                  </a>
                  <a  className="list-group-item">
                    <i className="fa fa-shopping-cart fa-fw"></i> New Order Placed
                  <span className="pull-right text-muted small"><em>9:49 AM</em>
                    </span>
                  </a>
                  <a  className="list-group-item">
                    <i className="fa fa-money fa-fw"></i> Payment Received
                  <span className="pull-right text-muted small"><em>Yesterday</em>
                    </span>
                  </a>
                </div>
                {/*  /.list-group  --> */}
                <a  className="btn btn-default btn-block">View All Alerts</a>
              </div>
              {/*  /.panel-body  --> */}
            </div>
            {/*  /.panel  --> */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <i className="fa fa-bar-chart-o fa-fw"></i> Donut Chart Example
            </div>
              <div className="panel-body">
                <div id="morris-donut-chart"></div>
                <a  className="btn btn-default btn-block">View Details</a>
              </div>
              {/*  /.panel-body  --> */}
            </div>
            {/*  /.panel  --> */}
            <div className="chat-panel panel panel-default">
              <div className="panel-heading">
                <i className="fa fa-comments fa-fw"></i> Chat
              <div className="btn-group pull-right">
                  <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-chevron-down"></i>
                  </button>
                  <ul className="dropdown-menu slidedown">
                    <li>
                      <a >
                        <i className="fa fa-refresh fa-fw"></i> Refresh
                    </a>
                    </li>
                    <li>
                      <a >
                        <i className="fa fa-check-circle fa-fw"></i> Available
                    </a>
                    </li>
                    <li>
                      <a >
                        <i className="fa fa-times fa-fw"></i> Busy
                    </a>
                    </li>
                    <li>
                      <a >
                        <i className="fa fa-clock-o fa-fw"></i> Away
                    </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a >
                        <i className="fa fa-sign-out fa-fw"></i> Sign Out
                    </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*  /.panel-heading  --> */}
              <div className="panel-body">
                <ul className="chat">
                  <li className="left clearfix">
                    <span className="chat-img pull-left">
                      <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle" />
                    </span>
                    <div className="chat-body clearfix">
                      <div className="header">
                        <strong className="primary-font">Jack Sparrow</strong>
                        <small className="pull-right text-muted">
                          <i className="fa fa-clock-o fa-fw"></i> 12 mins ago
                      </small>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis
                        ullamcorper ligula sodales.
                    </p>
                    </div>
                  </li>
                  <li className="right clearfix">
                    <span className="chat-img pull-right">
                      <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" className="img-circle" />
                    </span>
                    <div className="chat-body clearfix">
                      <div className="header">
                        <small className=" text-muted">
                          <i className="fa fa-clock-o fa-fw"></i> 13 mins ago</small>
                        <strong className="pull-right primary-font">Bhaumik Patel</strong>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis
                        ullamcorper ligula sodales.
                    </p>
                    </div>
                  </li>
                  <li className="left clearfix">
                    <span className="chat-img pull-left">
                      <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle" />
                    </span>
                    <div className="chat-body clearfix">
                      <div className="header">
                        <strong className="primary-font">Jack Sparrow</strong>
                        <small className="pull-right text-muted">
                          <i className="fa fa-clock-o fa-fw"></i> 14 mins ago</small>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis
                        ullamcorper ligula sodales.
                    </p>
                    </div>
                  </li>
                  <li className="right clearfix">
                    <span className="chat-img pull-right">
                      <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" className="img-circle" />
                    </span>
                    <div className="chat-body clearfix">
                      <div className="header">
                        <small className=" text-muted">
                          <i className="fa fa-clock-o fa-fw"></i> 15 mins ago</small>
                        <strong className="pull-right primary-font">Bhaumik Patel</strong>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis
                        ullamcorper ligula sodales.
                    </p>
                    </div>
                  </li>
                </ul>
              </div>
              {/*  /.panel-body  --> */}
              <div className="panel-footer">
                <div className="input-group">
                  <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message here..." />
                  <span className="input-group-btn">
                    <button className="btn btn-warning btn-sm" id="btn-chat">
                      Send
                  </button>
                  </span>
                </div>
              </div>
              {/*  /.panel-footer  --> */}
            </div>
            {/*  /.panel .chat-panel  --> */}
          </div>
          {/*  /.col-lg-4  --> */}
        </div>
        {/*  /.row  --> */}
      </div>
    );
  }
}

export default Dashboard;
