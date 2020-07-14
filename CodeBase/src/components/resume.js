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
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p> I am a passionate and motivated student who has a keen interest in developing digital technologies. I possess excellent organizational and time-management skills and enjoy problem-solving. I seek to apply my educational experience to tackle industry-level challenges related to electronics development, testing and softwarehardware integration. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
