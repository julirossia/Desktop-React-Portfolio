import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Widecard from '../components/Widecard';


class Skills extends Component {

render() {
    return (
    <div className="condiv skills">
    <ReactTypingEffect className="typingeffect" text={['julieta rossia']} staticText={ String} /* text={['web developer', 'and designer']} speed={100} eraseDelay={1900} *//>
    <h2 className="subtopic">MY SKILLS</h2>
    <Widecard title="DESIGNER:" where="ILLUSTRATOR | PHOTOSHOP | INDESIGN | AFTER EFFECTS | XD " />
    <Widecard title="DEVELOPER:" where="HTML | CSS | JAVASCRIPT | REACT JS | NODE JS | EXPRESS | MONGO | MYSQL" />
    <Widecard title="LANGUAGES:" where=" native Spanish | intermediate English" />


   
    </div>
)
}
}
export default Skills