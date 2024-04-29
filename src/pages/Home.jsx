import React from "react";
import Header from "../Components/Header";
import { FaInstagram } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Home = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("https://contactform-1-ty1w.onrender.com/api/auth/contact", contact)
      .then(({ data }) => {
        toast.success(data?.message);
        setContact({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      })
      .catch((err) => toast.error(err?.data?.message));
  };

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <Header />
      <article id="top" className="wrapper style1">
        <div className="container">
          <div className="row">
            <div className="col-4 col-5-large col-12-medium">
              <div className="w-80 h-80 rounded-full overflow-hidden">
                <img src="/assets/images/pfl.jpg" alt="" />
              </div>
            </div>
            <div className="col-8 col-7-large col-12-medium">
              <header>
                <h1>
                  Hi. I'm <strong>R A J U</strong>
                </h1>
              </header>
              <p>
                Web <strong>Developer</strong> and an Enthusiastic Coder
              </p>
              <a onClick={()=>smoothScrollTo("work")} className="button large scrolly">
                Learn about what I do
              </a>
            </div>
          </div>
        </div>
      </article>

      <article id="work" className="wrapper style2">
        <div className="container">
          <header>
            <h2>Here's all the stuff I do.</h2>
            <p>Odio turpis amet sed consequat eget posuere consequat.</p>
          </header>
          <div className="row aln-center">
            <div className="col-4 col-6-medium col-12-small">
              <section className="box style1">
                <span className="icon featured fa-comments"></span>
                <h3>React</h3>
                <p>
                  Ornare nulla proin odio consequat sapien vestibulum ipsum
                  primis sed amet consequat lorem dolore.
                </p>
              </section>
            </div>
            <div className="col-4 col-6-medium col-12-small">
              <section className="box style1">
                <span className="icon solid featured fa-camera-retro"></span>
                <h3>Node js</h3>
                <p>
                  Ornare nulla proin odio consequat sapien vestibulum ipsum
                  primis sed amet consequat lorem dolore.
                </p>
              </section>
            </div>
            <div className="col-4 col-6-medium col-12-small">
              <section className="box style1">
                <span className="icon featured fa-thumbs-up"></span>
                <h3>Next js</h3>
                <p>
                  Ornare nulla proin odio consequat sapien vestibulum ipsum
                  primis sed amet consequat lorem dolore.
                </p>
              </section>
            </div>
          </div>
          <footer>
            <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
            <a onClick={()=>smoothScrollTo("portfolio")} className="button large scrolly">
              See some of my recent work
            </a>
          </footer>
        </div>
      </article>

      <article id="portfolio" className="wrapper style3">
        <div className="container">
          <header>
            <h2>Here&apos;s some stuff I made recently.</h2>
            <p>
              Proin odio consequat sapien vestibulum consequat lorem dolore
              feugiat.
            </p>
          </header>
          <div className="row">
            <div className="col-4 col-6-medium col-12-small">
              <article className="box style2">
                <a href="#" className="image featured">
                  <img src="/assets/images/pic01.jpg" alt="" />
                </a>
                <h3>
                  <a href="#">Magna feugiat</a>
                </h3>
                <p>Ornare nulla proin odio consequat.</p>
              </article>
            </div>
            <div className="col-4 col-6-medium col-12-small">
              <article className="box style2">
                <a href="#" className="image featured">
                  <img src="/assets/images/pic02.jpg" alt="" />
                </a>
                <h3>
                  <a href="#">Veroeros primis</a>
                </h3>
                <p>Ornare nulla proin odio consequat.</p>
              </article>
            </div>
            <div className="col-4 col-6-medium col-12-small">
              <article className="box style2">
                <a href="#" className="image featured">
                  <img src="/assets/images/pic03.jpg" alt="" />
                </a>
                <h3>
                  <a href="#">Lorem ipsum</a>
                </h3>
                <p>Ornare nulla proin odio consequat.</p>
              </article>
            </div>
            <div className="col-4 col-6-medium col-12-small">
              <article className="box style2">
                <a href="#" className="image featured">
                  <img src="/assets/images/pic04.jpg" alt="" />
                </a>
                <h3>
                  <a href="#">Tempus dolore</a>
                </h3>
                <p>Ornare nulla proin odio consequat.</p>
              </article>
            </div>
            <div className="col-4 col-6-medium col-12-small">
              <article className="box style2">
                <a href="#" className="image featured">
                  <img src="/assets/images/pic05.jpg" alt="" />
                </a>
                <h3>
                  <a href="#">Feugiat aliquam</a>
                </h3>
                <p>Ornare nulla proin odio consequat.</p>
              </article>
            </div>
            <div className="col-4 col-6-medium col-12-small">
              <article className="box style2">
                <a href="#" className="image featured">
                  <img src="/assets/images/pic06.jpg" alt="" />
                </a>
                <h3>
                  <a href="#">Sed amet ornare</a>
                </h3>
                <p>Ornare nulla proin odio consequat.</p>
              </article>
            </div>
          </div>
          <footer>
            <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
            <a onClick={()=>smoothScrollTo("contact")} className="button large scrolly">
              Get in touch with me
            </a>
          </footer>
        </div>
      </article>

      <article id="contact" className="wrapper style4">
        <div className="container medium">
          <header>
            <h2>Have me make stuff for you.</h2>
            <p>Ornare nulla proin odio consequat sapien vestibulum ipsum.</p>
          </header>
          <div className="row">
            <div className="col-12">
              <form onSubmit={submitHandler}>
                <div className="row">
                  <div className="col-6 col-12-small">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={contact.name}
                      onChange={changeHandler}
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-6 col-12-small">
                    <input
                      type="text"
                      name="email"
                      value={contact.email}
                      onChange={changeHandler}
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={contact.subject}
                      onChange={changeHandler}
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      value={contact.message}
                      onChange={changeHandler}
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <ul className="actions">
                      <li>
                        <input type="submit" value="Send Message" />
                      </li>
                      <li>
                        <input
                          type="reset"
                          onClick={() =>
                            setContact({
                              name: "",
                              email: "",
                              subject: "",
                              message: "",
                            })
                          }
                          value="Clear Form"
                          className="alt"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12">
              <hr />
              <h3>Find me on ...</h3>
              <ul className="social">
                <li>
                  <a href="#" className="icon brands fa-twitter">
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-facebook-f">
                    <span className="label">Facebook</span>
                  </a>
                </li>

                <li>
                  <a href="#" className="icon brands fa-linkedin-in">
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/majid598"
                    target="_blank"
                    className="icon brands fa-github"
                  >
                    <span className="label">Github</span>
                  </a>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <footer>
            <ul id="copyright">
              <li>&copy; Codewithraju. All rights reserved.</li>
            </ul>
          </footer>
        </div>
      </article>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Home;
