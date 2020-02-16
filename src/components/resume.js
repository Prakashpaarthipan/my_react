import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://st2.depositphotos.com/1007566/12301/v/950/depositphotos_123013242-stock-illustration-avatar-man-cartoon.jpg"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Prakash P</h2>
            <h4 style={{ color: 'grey' }}>Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Being a developer, Having good level of both front end and back end development experience in web apprlications scenario , I've interested in SPA Progressive Web Application development. Good knowledge in Cloud and IoT Automation technologies. </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>34, Amaravathi Nagar</p>
            <h5>Phone</h5>
            <p>(+91) 99 44 7 55 248</p>
            <h5>Email</h5>
            <p>sreeprakash248@gmail.com</p>
            <h5>Web</h5>
            <p>prakashportfolio.github.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2009}
              endYear={2013}
              schoolName="Jay Shriram Group of Institutions"
              schoolDescription="Completed my Bachelor degree in Computer science"
            />

            {/* <Education
              startYear={2008}
              endYear={2009}
              schoolName="HSC"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            /> */}
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Senior Full Stack Developer"
              jobDescription="Development of both fron end (HTML / CSS / JS) and Back End (PHP, Node JS, Oracle,Mongo DB) Web Applications. and Deployments in Cloud Domains and Service ie. AWS"
            />
            <Experience
              startYear={2013}
              endYear={2018}
              jobName="Senior IoT Project Developer"
              jobDescription="Process of Websites Hosting and Managements in Cloud, IoT Embedded Project developments and functionality testing, CRM Service's"
            />


            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="Javascript"
              progress={80}
            />
            <Skills
              skill="Html / Css"
              progress={80}
            />
            <Skills
              skill="NodeJS"
              progress={50}
            />

            <Skills
              skill="Angular"
              progress={45}
            />
            <Skills
              skill="React"
              progress={25}
            />
            <Skills
              skill="Oracle"
              progress={75}
            />
            <Skills
              skill="Mongo DB"
              progress={25}
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;