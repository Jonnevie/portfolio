import React from "react";
import ProfileImg from './ProfilePhoto.png'
import './Contact.css'

export function Contact(){
return(
    <main>
    <div className="contact">
        <img src={ProfileImg}
        />
        <h1 className="h1contact">CONTACT<span className="spancontact">ME</span></h1>
        <p className="pcontact">Thanks for stopping by! It's been great showing you what I've learned over the last twelve weeks. <br /> <br />
I would love to hear from you if you think we would work well together.</p>
</div>
<div className="btns">
<button className="btncontact">Download CV</button>
<button className="btncontact">Email Me</button>

    </div>
    </main>
)
}