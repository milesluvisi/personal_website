import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>782 N Storer Ave. Fayetteville, AR 72701</p>
            <h5>Phone</h5>
            <p>(662)-403-0280</p>
            <h5>Email</h5>
            <p>mluvisi16@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2020}
              schoolName="University of Arkansas"
              schoolDescription="B.S. Computer Science"
              gpa="GPA: 3.02"
               />
                <hr style={{borderTop: '3px solid #000000'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Application Development Intern"
              jobDescription="Worked with the API Management team to develop and manage all of J.B. Hunt's APIs"
              jobDescription2="Managed a team of interns to recreate a webpage to schedule vendor visits"
              />

              <hr style={{borderTop: '3px solid #000000'}} />
              <h2>Skills</h2>

              <hr style={{borderTop: '3px solid #000000'}} />
              <h2>Projects</h2> 
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
