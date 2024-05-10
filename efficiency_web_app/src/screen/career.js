// DepartmentPage.js

import React from 'react';
import fb from '../assets/crr.jpg';
import './department.css';

function CareerPage() {
  return (
    <div className='mainCarr'>
      <div className="department-page">
        <div className="left-column" id="mission">
          <div className="corner-top">
            Home
          </div>
          <div className="department-header">
            Careers
          </div>
          <div className="image-wrapper" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={fb}
              alt="URL 2"
              className="container-photo"
              style={{ height: 'auto', maxWidth: '50%' }}
            />
          </div>
        <div class="slpd-overview" id='misssion'>
    <h2>Sri Lanka Police Department Overview</h2>
    <p>
        The Sri Lanka Police Department (SLPD) serves as the primary law enforcement agency in Sri Lanka,
        playing a crucial role in maintaining public safety and upholding the rule of law across the nation.
        Established in 1866, the SLPD has evolved over the years to meet the changing needs and challenges
        of the country, including combating crime, ensuring traffic safety, and providing various community
        policing services.
    </p>
    <p>
        With its headquarters in Colombo, the SLPD operates through a network of police stations spread
        throughout the island, each tasked with addressing local law enforcement needs and concerns.
        The department employs a diverse range of specialized units, including criminal investigation divisions,
        traffic police, and special task forces, to effectively tackle different types of crime and security threats.
        Additionally, the SLPD is committed to fostering strong relationships with the community, promoting trust
        and cooperation through outreach programs, public awareness campaigns, and community engagement initiatives.
        Overall, the SLPD plays a vital role in safeguarding the rights and security of the people of Sri Lanka,
        contributing to the nation's stability and development.
    </p>
</div>
          <div className='join'>
            <div className="rtext">
              <a href="#" className="rtext" style={{ color: 'black' }}>
                <strong>Join the Sri Lanka Police Today!</strong>
              </a>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="department-list-container">
            <div className="department-list-header">
              Career
            </div>
            <ul className="department-list">
              <li><a href="#mission">Overview</a></li>
              <li><a href="#history">Career Opportunities</a></li>
              <li><a href="#team">Eligibility & Hiring</a></li>
            </ul>
          </div>
        </div>
      </div>
      
        <div className='opportunity' id='history'>
          <h2>Career Opportunities:</h2>
          <ul>
            <li>
              <strong>Police Officer:</strong> Responsible for patrolling assigned areas, responding to emergency and non-emergency calls, 
              enforcing laws, making arrests, and ensuring public safety.
            </li>
            <li>
              <strong>Police Detective:</strong> Investigates criminal cases by gathering evidence, interviewing witnesses and suspects, 
              analyzing information, and preparing reports for prosecution.
            </li>
            <li>
              <strong>Crime Scene Investigator:</strong> Collects and analyzes physical evidence from crime scenes, such as fingerprints,
               blood samples, and ballistic evidence, to assist in criminal investigations.
            </li>
            <li>
              <strong>Forensic Scientist:</strong> Analyzes evidence collected from crime scenes using scientific techniques, such as DNA analysis, b
              allistics, and toxicology, to provide evidence for criminal investigations.
            </li>
            <li>
              <strong>Police Dispatcher:</strong> Receives and dispatches emergency and non-emergency calls to police officers, fire departments,
               and other emergency services, and maintains communication with officers in the field.
            </li>
          </ul>
        </div>
        <div class="slpd-eligibility-hiring" id='team'>
    <h2>Eligibility & Hiring in the Sri Lanka Police Department</h2>
    <p>
        Joining the Sri Lanka Police Department (SLPD) is a noble endeavor open to individuals who meet certain
        eligibility criteria. Prospective candidates must be Sri Lankan citizens, typically aged between 18 and 28
        years old, although age requirements may vary depending on the specific position and rank. Educational
        qualifications such as passing the General Certificate of Education (GCE) Ordinary Level (O/L) and
        Advanced Level (A/L) examinations are often prerequisites for entry into the SLPD. Additionally, candidates
        undergo rigorous physical fitness tests, medical examinations, and background checks to ensure they possess
        the necessary attributes and character traits essential for law enforcement roles.
    </p>
    <p>
        The hiring process for the SLPD typically involves multiple stages, including written examinations,
        interviews, and aptitude tests designed to assess candidates' suitability for various positions within
        the department. Successful candidates may then undergo training at the Sri Lanka Police Training College,
        where they receive comprehensive instruction in law enforcement procedures, investigative techniques,
        and community policing principles. The SLPD offers diverse career opportunities across different ranks
        and specialties, including police officers, detectives, forensic specialists, and administrative staff.
        Aspiring individuals passionate about serving their country and upholding the law have the opportunity
        to embark on a fulfilling career in law enforcement with the Sri Lanka Police Department.
    </p>
</div>
      </div>
   
  );
}

export default CareerPage;
