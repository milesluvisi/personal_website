import React, { Component } from 'react';
import { Grid, Cell, Navigation, Drawer } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { Link } from 'react-router-dom';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Miles LuVisi</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>782 N Storer Ave. Fayetteville, AR 72701</p>
            <h5>Phone</h5>
            <p>(662)-403-0280</p>
            <h5>Email</h5>
            <p>mluvisi16@gmail.com</p>
            <p>meluvisi@uark.edu</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>This is a currently a condensed version of my resume, the full version on google docs can be found here.</p>
            <a target="_blank" href="https://docs.google.com/document/d/1RLhi2jBni_bcWZ180ugT5fBDmx1SzAjYTyW4yuHAQ9M/edit?usp=sharing">Resume</a>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Content</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
            </Navigation>
            </Drawer>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2020}
              schoolName="University of Arkansas"
              schoolDescription="B.S. Computer Science"
              gpa="GPA: 3.03"
               />
                <hr style={{borderTop: '3px solid #000000'}} />

              <h2>Experience</h2>

            <Experience
              startYear={"October 2018"}
              endYear={"PRESENT"}
              jobName="Application Development Intern"
              jobDescription="Developed RESTful APIs using Java that could access OTM databases and execute curl commands"
              jobDescription2="Designed a hackathon website using Angular, connected it to the backend, and deployed it"
              jobDescription3="Designed the frontend and developed the backend for a visit scheduling application written in mySQL, Java, and React"
              jobDescription4="Assisted development on the backend for a package tracking program using Google’s tracking API "
              />

              <hr style={{borderTop: '3px solid #000000'}} />
              <h2>Skills</h2>
              <p>Coding Languages: Java, Angular, React, C++, Python,  NodeJS, Go, Swift</p>
              <p>Technologies: Git, Azure DevOps, Docker, Kubernetes, mySQL, Android Development Studio, Spring Boot, Tomcat</p>
              <p>Relevant Coursework: Programming Paradigms, Operating Systems, Information Security, Database Management Systems, Algorithms</p>
              <hr style={{borderTop: '3px solid #000000'}} />
              <h2>Projects</h2> 
              <p>I have projects in Java, Python, Angular, React, and C++. Check out my projects tab for more details.</p>
              
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
