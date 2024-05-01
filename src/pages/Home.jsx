import React from "react";
import Header from "../Components/Header";
import { FaInstagram } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import Loader from "../Components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post("https://contactform-1-ty1w.onrender.com/api/auth/contact", contact)
      .then(({ data }) => {
        setLoading(false);
        toast.success(data?.message);
        setContact({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.data?.message);
      });
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

  const works = [
    {
      image: "/assets/images/react.png",
      name: "React",
      desc: "Proficient in React, I specialize in building dynamic and responsive web applications. With a solid understanding of state management, component lifecycle, and JSX syntax, I leverage React's powerful capabilities to create seamless user interfaces and optimize performance. Experienced in integrating React with various libraries and frameworks, I strive to deliver efficient and scalable solutions tailored to meet diverse project requirements.",
    },
    {
      image: "/assets/images/node.png",
      name: "Node js",
      desc: "Skilled in Node.js, I excel in developing robust and scalable server-side applications. Leveraging Node.js's event-driven architecture and non-blocking I/O model, I specialize in building high-performance APIs and backend services. With expertise in asynchronous programming and package management using npm, I ensure efficient and reliable server-side solutions tailored to meet project objectives.",
    },
    {
      image: "/assets/images/next.png",
      name: "Next js",
      desc: "Proficient in Next.js, I specialize in building fast, server-side rendered React applications. With Next.js's powerful features such as automatic code splitting, server-side rendering, and static site generation, I deliver efficient and SEO-friendly web applications. Leveraging Next.js's dynamic routing and API routes, I create seamless user experiences and optimize performance for modern web applications.",
    },
  ];

  const projects = [
    {
      image: "/assets/images/e.png",
      title: "E-commerce Website",
      link: "https://fashionista-mocha.vercel.app",
      desc: "An immersive MERN stack e-commerce website showcasing products and providing seamless shopping experiences.",
    },
    {
      image: "/assets/images/insta.jpg",
      title: "Instagram-Clone",
      link: "https://github.com/majid598/Instagram-Clone",
      desc: "A feature-rich Instagram clone offering social networking functionalities for sharing photos and connecting with friends.",
    },
    {
      image: "/assets/images/spotify.jpg",
      title: "Spotify-Clone",
      link: "https://github.com/majid598/Spotify-Clone",
      desc: "A MERN stack Spotify clone delivering personalized music streaming experiences with a vast library of songs and playlists",
    },
    {
      image: "/assets/images/net.jpg",
      title: "Netflix-Clone",
      link: "#",
      desc: "A MERN stack Netflix clone offering a vast collection of movies and TV shows for seamless streaming and entertainment.",
    },
    {
      image: "/assets/images/p4.jpg",
      title: "Food-Website",
      link: "#",
      desc: "Fast food website offering interactive menu, online ordering, and delivery for convenient dining.",
    },
    {
      image: "/assets/images/sherry.png",
      title: "Animated-Website",
      link: "https://sherryjswebsite.netlify.app/",
      desc: "Animated website built with Sherry.js, featuring captivating visuals and interactive elements for an immersive experience.",
    },
  ];

  return (
    <div className="relative">
      {loading && <Loader />}
      <Header />
      <article id="top" className="wrapper style1">
        <div className="container">
          <div className="row">
            <div className="col-4 col-5-large col-12-medium">
              <div className="w-80 h-80 rounded-full lg:mx-0 md:mx-0 mx-auto overflow-hidden">
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
              <a
                onClick={() => smoothScrollTo("work")}
                className="button large scrolly"
              >
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
            <p className="lg:px-40 md:px-20">
              I specialize in full-stack web development using React, Next.js,
              and Node.js to create dynamic and scalable applications.
            </p>
          </header>
          <div className="row aln-center">
            {works.map((work) => (
              <div key={work.name} className="col-4 col-6-medium col-12-small">
                <section className="box style1">
                  <div>
                    <img src={work.image} className="w-20 mx-auto" alt="" />
                  </div>
                  <h3>{work.name}</h3>
                  <p className="leading-5 tracking-tighter">{work.desc}</p>
                </section>
              </div>
            ))}
          </div>
          <footer>
            <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
            <a
              onClick={() => smoothScrollTo("portfolio")}
              className="button large scrolly"
            >
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
              Here is all those websites those I have made with react, node.js,
              next.js and other technologies.
            </p>
          </header>
          <div className="row">
            {projects.map((project) => (
              <div
                key={project.title}
                className="col-4 col-6-medium col-12-small"
              >
                <article className="box style2">
                  <a
                    target="_blank"
                    href={project.link}
                    className="image featured"
                  >
                    <img src={project.image} className="w-full h-72" alt="" />
                  </a>
                  <h3>
                    <a target="_blank" href={project.link}>
                      {project.title}
                    </a>
                  </h3>
                  <p className="leading-5 tracking-tighter">{project.desc}</p>
                </article>
              </div>
            ))}
          </div>
          <footer>
            <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
            <a
              onClick={() => smoothScrollTo("contact")}
              className="button large scrolly"
            >
              Get in touch with me
            </a>
          </footer>
        </div>
      </article>

      <article id="contact" className="wrapper style4">
        <div className="container medium">
          <header>
            <h2>Have me make stuff for you.</h2>
            <p>If You have any question you can get in touch with me.</p>
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
                  <a
                    href="#"
                    target="_blank"
                    className="icon brands fa-twitter"
                  >
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61553142673447"
                    target="_blank"
                    className="icon brands fa-facebook-f"
                  >
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/code_with_raju01/"
                    target="_blank"
                    className="icon brands fa-instagram"
                  >
                    <span className="label">Facebook</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/majid-ali-0331302b2/"
                    target="_blank"
                    className="icon brands fa-linkedin-in"
                  >
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
