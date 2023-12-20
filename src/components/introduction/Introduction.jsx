import React, { useEffect, useRef, useState } from "react";
import "./Introduction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faChalkboardUser, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";

function Introduction() {
  const containerRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
  };

  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      
      Object.values(containerRefs).forEach(ref => {
        if (ref.current) {
          ref.current.style.display = "none";
        }
      });

      
      if (containerRefs[`section${activeSection}`].current) {
        containerRefs[`section${activeSection}`].current.style.display = "flex";
      }

      
      setActiveSection(prevSection => (prevSection % 6) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSection]);



  return (
    <div className="introduction-container">
      <div className="section-Introduction-container" ref={containerRefs.section1}>
        <h1>Welcome To Perscholas</h1>
        <img
          className="perscholas-logo"
          src="https://sharecharlotte.org/sites/default/files/Logo-Horizontal-Light.png"
          alt="perscholasLogo"
        />
      </div>

      <div className="section1-Introduction-container" ref={containerRefs.section2}>
        <h1 className="title1-Introduction">Unlocking Potential</h1>
        <p className="paragraph1-Introduction">
          At Per Scholas, we believe a thriving workforce starts with equitable
          access to education. Learn about Per Scholas and how we provide skills
          training and access to employer networks to individuals often excluded
          from tech careers. Per Scholas envisions a technology workforce as
          diverse as the customers it serves. More than 20,000 graduates have
          launched successful careers in tech to date through our no-cost
          technical training.
        </p>
      </div>

      <div className="section2-Introduction-container" ref={containerRefs.section3}>
        <div className="Section2-Content-title-image">
          <h1 className="title2-Introduction">
            Creating Opportunity for Careers in Tech
            <FontAwesomeIcon
              icon={faGraduationCap}
              style={{ color: "#000000", marginLeft: "2%" }}
            />
          </h1>
          <p className="paragraph2-Introduction">
            We work directly with employers, large and small, to design
            rigorous, boot camp-style courses with an 85% graduation rate. Our
            tuition-free training combines business professional skills
            development with hands-on technical instruction for high demand
            jobs.
          </p>
        </div>
        <img
          className="section2-image-carrer"
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Careers in Tech"
        />
      </div>

      <div className="section3-Introduction-container" ref={containerRefs.section4}>
        <img
          className="section3-image-skill"
          src="https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tech skills"
        />
        <div className="Section3-Content-title-image">
          <h1 className="title3-Introduction">
            Closing the Tech Skills Divide
            <FontAwesomeIcon
              icon={faChalkboardUser}
              style={{ color: "#000000", marginLeft: "2%" }}
            />
          </h1>
          <p className="paragraph3-Introduction">
            We prepare individuals to work in key technical roles and equip them
            with today’s most sought out industry skills. We have placed
            graduates nationwide for various entry to mid-level tech roles
            across every sector and provide continued upskilling and
            professional development support to alumni up to two years
            post-graduation.
          </p>
        </div>
      </div>

      <div className="section4-Introduction-container" ref={containerRefs.section5}>
        <div className="Section2-Content-title-image">
          <h1 className="title4-Introduction">
            Achieving Diversity in the Tech Workforce
            <FontAwesomeIcon
              icon={faUniversalAccess}
              style={{ color: "#000000", marginLeft: "2%" }}
            />
          </h1>
          <p className="paragraph4-Introduction">
            We are building a more diverse technical workforce with employers by
            creating on-ramps for women and people of color, groups staggeringly
            underrepresented in IT employment today. 85% of our learners are
            people of color, a third are women, and a third are young adults.
          </p>
        </div>
        <img
          className="section4-image-diversity"
          src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="diversity Image"
        />
      </div>

      <div className="section5-Introduction-container" ref={containerRefs.section6}>
        <h1 className="title-bottom-map">
          Diverse Technological Talent On A National Scale
        </h1>
        <h3 className="title-bottom-paragraph">With 20 National Locations</h3>
        {/* <img
          className="perscholas-map"
          src="/perscholas-map.png"
          alt="Per Scholas Map"
        /> */}
      </div>
    </div>
  );
}

export default Introduction;
