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
                <div className="col">

              <a href={resumeData.linkedinId}>
            <button>LinkedIn</button>
            </a>
                </div>
                
                <div className="col">
                  <a href={resumeData.gitHubId}>
                <button>GitHub</button>
                </a>
                </div>

                <div className="col">
                  <a href={resumeData.emailId}>
                <button>Email Me!</button>
                </a>
                </div>

              </div>

            </aside>
              
              <p>put something here</p>

          </div>
        </section>
  
        );
  }
}