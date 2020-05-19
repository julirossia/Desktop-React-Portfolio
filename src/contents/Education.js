import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import ReactTypingEffect from 'react-typing-effect';

class Education extends Component {
render() {
return (
<div className="condiv">
<ReactTypingEffect className="typingeffect" text={['julieta rossia']} staticText={ String} /* text={['web developer', 'and designer']} speed={100} eraseDelay={1900} *//>
<h2 className="subtopic">MY EDUCATION</h2>
<Widecard title="SENIOR ADVERTISING TECHNICIAN" where="La Metro,School of Design and Audiovisual Communication
" from="2004" to="2008"/>
<Widecard title="GRAPHIC DESIGNER | WEB DESIGNER" where="Centro Kandinsky" from="2008" to="2010"/>
<Widecard title="WEB FULL STACK DEVELOPER" where="Acamica" from="2019" to="2020"/>

</div>
)
}
}
export default Education