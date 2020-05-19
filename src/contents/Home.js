import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/juli-nueva-01-04.png';
import Social from '../components/Social'



class Home extends Component {
render() {
return (
<div className="condiv home">
<img src={profilepic} className="profilepic" alt="me in cartoon"></img>
<ReactTypingEffect className="typingeffect" text={['julieta rossia']} staticText={ String} /* text={['web developer', 'and designer']} speed={100} eraseDelay={1900} *//>
<div><h1 className="Julieta">WEB DEVELOPER <span className="black">DESIGNER</span></h1>
<div className="line"></div>
<Social />
</div>
</div>
)
}
}
export default Home