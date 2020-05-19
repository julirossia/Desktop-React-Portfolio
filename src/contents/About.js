import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

class About extends Component {
render() {
return (
<div className="condiv">
<ReactTypingEffect className="typingeffect" text={['julieta rossia']} staticText={ String}/>
<h2 className="subtopic">ABOUT ME</h2>
<h2 className="titleSub">Full Stack Developer | Designer</h2>
<br></br>
<p className="text">Hi, I'm Julieta, from Córdoba, Argentina, I'm a technician in advertising, graphic designer and full stack web developer.<br/>
I have experience working in design since 2010. I'm able to develop a work from market/product research, brand development, naming, applications, editorial,illustration, animation, visual design and UI/UX design.<br/>
I started my way as a developer in 2019 through a scholarship and found in programming a new way to create and design at a deeper level.<br/>
That's why I'm looking to start my professional path in development and my focus is on Front-End development.<br/>
In this time I have developed Front and Back-end projects; Api Rest, database, layout, responsive design, apis integration, etc.<br/>
I am in constant training and knowledge update and I have experience working in dependency relationship and as a freelancer and I perform very well in both.
</p>
</div>
)
}
}
export default About