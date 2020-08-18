import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <a href={resumeData.linkedinId}>LinkedIn</a> <br />
                <a href={resumeData.gitHubId}>GitHub</a> <br />
                <a href={resumeData.emailId}>Email</a> 
              </div>
            </aside>
            <aside className="four columns footer-widgets">
      <div className="widget widget_contact">
        <h4>Address and Phone</h4>
        <p className="address">
          Zakkrey Short<br />
          Portland, OR 97206 US<br />
          <span>(817) 680-4965</span>
        </p>
      </div>
    </aside>
          </div>
        </section>
        );
  }
}

