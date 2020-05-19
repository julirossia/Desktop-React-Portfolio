import React, { Component } from 'react';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect';

class Contact extends Component {
render() {
return (
<div className="condiv">
<ReactTypingEffect className="typingeffect" text={['julieta rossia']} staticText={ String} /* text={['web developer', 'and designer']} speed={100} eraseDelay={1900} *//>
<h2 className="subtopic">CONTACT ME</h2>
<h4 className="contactme">Email  : <p className="contact">julirossia@gmail.com</p></h4>
<h4 className="contactme">Linkedin   :<p className="contact"> https://www.linkedin.com/in/julieta-rossia/</p> </h4>
<div className="line2"></div>
<Social />
</div>
)
}
}
export default Contact