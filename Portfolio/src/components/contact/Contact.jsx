import { useState } from "react";
import "./contact.scss"
import emailjs from "emailjs-com"

export default function Contact() {




const [message, setMessage] = useState(false)

const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)

    emailjs.sendForm('gmail', 'template_4vah1pz', e.target, 
    'user_JLyiSdvukmqlIHoXBjoPg')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()


}

    return (
        <div className ="contact" id="contact">
            <div className="left">
                <img src="assets/shake2.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact Me.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" name="email"/>
                    <input type="subject" placeholder="subject" name="subject"/>
                    <textarea placeholder="message" name="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span> Thank you. I will respond promptly.</span>}
                </form>
            </div>
        </div>
    )
}
