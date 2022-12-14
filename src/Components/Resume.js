import React, { Component } from "react";
import Slide from "react-reveal";
import "./additional.css";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>
            {education.description}
            <br />
            {education.description2}
            <br />
            {education.description3}
          </p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const project = this.props.data.project.map(function (project) {
      return (
        <div key={project.name}>
          <h3>{project.name}</h3>
          <p className="info">
            {project.title}
            <span>&bull;</span> <em className="date">{project.years}</em>
          </p>
          <p>{project.description}<a href={project.link}>{project.link}</a></p>
        </div>
      );
    });

    const activity = this.props.data.activity.map(function (activity) {
      return (
        <div key={activity.name}>
          <h3>{activity.name}</h3>
          <p className="info">
            {activity.title}
            <span>&bull;</span> <em className="date">{activity.years}</em>
          </p>
          <p>{activity.description}</p>
        </div>
      );
    });

    const volunteering = this.props.data.volunteering.map(function (volunteering) {
      return (
        <div key={volunteering.name}>
          <h3>{volunteering.name}</h3>
          <p className="info">
            {volunteering.title}
            <span>&bull;</span> <em className="date">{volunteering.years}</em>
          </p>
          <p>{volunteering.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      return (
        <div key={skills.name}>
          <h3>{skills.name}</h3>
          <p>
            {skills.description}
          </p>
        </div>
      );
    });

    /*
    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
    */
    return (
      <section id="resume" className="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Project</span>
              </h1>
            </div>

            <div className="nine columns main-col">{project}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">{skills}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Activity</span>
              </h1>
            </div>

            <div className="nine columns main-col">{activity}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Volunteering</span>
              </h1>
            </div>

            <div className="nine columns main-col">{volunteering}</div>
          </div>
        </Slide>



      </section>
    );
  }
}

export default Resume;
