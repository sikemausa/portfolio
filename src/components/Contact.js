import React, { Component } from 'react';
import contactPicture from '../images/contact-picture.jpg';
import pigeon from '../images/pigeon.png';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div id="contact-information">
        <h1 id="contact-header">I would love to hear from you about new projects and opportunities in the industry!</h1>
          <img id="contact-picture" src={pigeon} />
          <h1 id="contact-name">Mike Sausa</h1>
          <h2 id="contact-job-title">Front-End Developer</h2>
          <h3>
            <a className="contact" href="mailto:mikejsausa@gmail.com">Email</a> •
            <a className="contact" href="https://github.com/sikemausa" target="_blank"> Github </a> •
            <a className="contact" href="https://www.linkedin.com/in/mikesausa/" target="_blank">Linkedin</a></h3>
        </div>
      </section>
    );
  }
}

export default Contact;
