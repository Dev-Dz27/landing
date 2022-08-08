import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import { GrSend } from "react-icons/gr";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gltrx3k",
        "template_0gxq156",
        form.current,
        "nl3ygCuKYrBEKN6tg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // 
  const [fname, setFname] = useState("")
  const [mail, setMail] = useState("")
  const [msg, setMsg] = useState("")

  

  const HandlerAwait= () => {
    setFname('');
    setMail('');
    setMsg('');
      alert('Thank you for contacting us, we will be in touch with you as soon as possible.');
  }

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  // Delay function HandlerAwait
    const HandlerSubmit = async event => {
      console.log('');
  
      await delay(1000);
  
      HandlerAwait();
    };
  
    useEffect(() => {
      async function makeRequest() {
        console.log('');
  
        await delay(1000);
  
        console.log('');
      }
  
      makeRequest();
    }, []); 

  return (
    <>

      <section id="contact">
        <h1 class="section-header">Contact</h1>

        <div class="contact-wrapper">
          {/* <!-- Left contact page -->  */}

          <form 
           ref={form} onSubmit={sendEmail}
          id="contact-form" class="form-horizontal" >
            <div class="form-group">
              <div class="col-sm-12">
                <input
                type="text" name="user_name"
                 value={fname}
                 onChange={(e) => setFname(e.target.value)}
                  class="form-control"
                  id="name"
                  placeholder="NAME"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <input
                type="email" name="user_email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}

                  class="form-control"
                  id="email"
                  placeholder="EMAIL"
                  required
                />
              </div>
            </div>

            <textarea
              class="form-control"
              rows="10"

              value={msg}
              onChange={(e) => setMsg(e.target.value)}


              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              class="btn btn-primary send-button"
              type="submit" value="Send"
              id="submit"
              onClick={HandlerSubmit}

            >
              <div class="alt-send-button">
                <GrSend size={20} />
                <span class="send-text">SEND</span>
              </div>
            </button>
          </form>

          {/* <!-- Left contact page -->  */}
          <div class="direct-contact-container">
          <hr className="hr" />
            <ul class="contact-list">
              {/* Location */}
              {/* <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">City, State</span></i></li> */}
              {/* Phone Number */}
              {/* <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li> */}
              <li class="list-item">
              
                <span class="contact-text gmail">
                  <AiOutlineMail size={28} className="AiOutlineMail" />

                  <a title="Send me an email">th.dev.design@gmail.com</a>
                </span>
              </li>
            </ul>

            <hr />
            {/* Social Media */}
            {/* <ul class="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr/> */}
            <br />
          </div>
        </div>
      </section>{" "}
      <div className="copyrightt">
        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
      </div>
    </>
  );
};
export default ContactUs;
