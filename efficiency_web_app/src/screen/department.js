import React from 'react';
import './department.css';

function DepartmentPage() {
  return (
    <div>
      <div className="department-page">
        <div className="left-column">
          <div className="corner-top">
            Home
          </div>
          <div className="department-header">
            The Department
          </div>
          <h3>About the Police Department</h3>
          <p>
            The Sri Lanka Police Department serves as the primary law enforcement agency in Sri Lanka, 
            playing a pivotal role in maintaining public safety and upholding the rule of law across the nation. Established in 1866, 
            department has evolved over the years to meet the changing needs and challenges of the country, 
            including combating crime, ensuring traffic safety, and providing various community policing services.
          </p>
          <p>
            With its headquarters in Colombo, the Sri Lanka Police Department operates through a network of police stations spread throughout the island, 
            each tasked with addressing local law enforcement needs and concerns. The department employs a diverse range of specialized units, 
            including criminal investigation divisions, traffic police, 
            and special task forces, to effectively tackle different types of crime and security threats.
          </p>
          <p>
            Additionally, the Sri Lanka Police Department is committed to fostering strong relationships with the community, 
            promoting trust and cooperation through outreach programs, public awareness campaigns, and community engagement initiatives. 
            Overall, the department plays a vital role in safeguarding the rights and security of the people of Sri Lanka, 
            contributing to the nation's stability and development.
          </p>
        </div>
        <div className="right-column">
          <div className="department-list-container">
            <div className="department-list-header">
              The Department
            </div>
            <ul className="department-list">
              <li><a href="#mission">Our Mission</a></li>
              <li><a href="#history">Our History</a></li>
              <li><a href="#team">Executive Team</a></li>
              <li><a href="#inspector">Office of Inspector General</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* New Row */}
      <div className="mission-section" id='mission'>
        <h3>Our Mission</h3>
        <p>
          The mission of the Sri Lanka Police Department is to uphold the rule of law, ensure public safety, 
          and maintain order through effective law enforcement, community engagement, and collaboration with stakeholders. 
          We are committed to serving with integrity, professionalism, and compassion, striving to build trust and confidence among the people 
          we serve while upholding the values of justice, equality, and respect for human rights.
        </p>
      </div>
      <div className="mission-section" id='history'>
        <h3>Our History</h3>
        <p>
        The history of the police force is a rich tapestry woven with threads of law, order, and societal evolution. 
        Dating back to ancient civilizations such as Mesopotamia and Egypt, rudimentary forms of policing emerged to maintain social order and 
        enforce rulers' decrees. In medieval Europe, the concept of policing evolved through various means, 
        including the watch system and the establishment of constabularies tasked with enforcing local laws and regulations.
       </p>
       <p>
       However, modern policing as we know it today began to take shape in the 19th century,
        particularly with the establishment of the London Metropolitan Police by Sir Robert Peel in 1829. 
        Peel's principles of policing emphasized the importance of community cooperation, crime prevention, 
        and professionalism among officers, laying the foundation for modern law enforcement practices. 
        As industrialization and urbanization accelerated, police forces expanded in size and scope, 
       grappling with new challenges posed by organized crime, civil unrest, and technological advancements.
       </p>
       <p>
       Throughout the 20th century, police departments underwent significant reforms and adaptations in response to changing societal dynamics, 
       including the civil rights movement, the rise of drug trafficking, and advancements in forensic science. Today, 
       police departments around the world continue to evolve, embracing community-oriented policing strategies,
        incorporating technology for crime prevention and investigation,
        and striving to uphold the principles of justice, fairness, and accountability in their service to society.
       </p>
      </div>
      <div className="mission-section" id='team'>
        <h3>Executive Team</h3>
        <div className='innerdiv'>
      <ul>
        <li>
          <h3>Chief of Police or Commissioner</h3>
          <p>
            The highest-ranking officer responsible for overseeing all departmental operations, setting strategic goals, and representing the department to the public and government officials.
          </p>
        </li>
        <li>
          <h3>Deputy Chief</h3>
          <p>
            Assists the Chief in managing day-to-day operations, strategic planning, and decision-making. Often oversees specific divisions or units such as patrol, investigations, or administration.
          </p>
        </li>
        <li>
          <h3>Assistant Chief</h3>
          <p>
            Provides support to the Chief and Deputy Chiefs in various administrative functions and special projects. May have specific areas of focus such as community engagement, training, or technology.
          </p>
        </li>
        <li>
          <h3>Commander</h3>
          <p>
            Responsible for leading and supervising a specific departmental division or unit, such as patrol, investigations, special operations, or support services.
          </p>
        </li>
        <li>
          <h3>Captain</h3>
          <p>
            Manages a precinct or specialized unit within the department, overseeing daily operations, personnel, and resource allocation.
          </p>
        </li>
        <li>
          <h3>Lieutenant</h3>
          <p>
            Assists captains in managing precincts or units, supervising officers, and handling administrative duties.
          </p>
        </li>
        <li>
          <h3>Sergeant</h3>
          <p>
            Provides leadership and supervision to patrol officers, often serving as the first-line supervisor in a police shift or unit.
          </p>
        </li>
        <li>
          <h3>Public Information Officer (PIO)</h3>
          <p>
            Responsible for managing media relations, public communications, and press releases on behalf of the department.
          </p>
        </li>
        <li>
          <h3>Training Officer</h3>
          <p>
            Develops and delivers training programs for departmental personnel, ensuring compliance with laws, regulations, and departmental policies.
          </p>
        </li>
        <li>
          <h3>Internal Affairs Investigator</h3>
          <p>
            Conducts investigations into allegations of misconduct or violations of departmental policies by officers or staff.
          </p>
        </li>
        <li>
          <h3>Crime Analyst</h3>
          <p>
            Utilizes data analysis tools and techniques to identify patterns, trends, and hotspots in criminal activity, assisting in resource allocation and strategic planning.
          </p>
        </li>
        <li>
          <h3>Community Outreach Coordinator</h3>
          <p>
            Develops and implements programs to foster positive relationships between the police department and the community, organizing events, workshops, and initiatives.
          </p>
        </li>
        <li>
          <h3>Technology Specialist</h3>
          <p>
            Manages and maintains the department's technology infrastructure, including computer systems, databases, and communication networks.
          </p>
        </li>
      </ul>
    </div>
      </div>
      <div className="mission-section" id='inspector'>
        <h3>Office of Inspector General</h3>
        <p>
        The Office of Inspector General (OIG) within a police department serves as an independent oversight body responsible for ensuring accountability, 
        integrity, and transparency in departmental operations. Led by the Inspector General, this office conducts internal investigations, audits, 
        and reviews to identify instances of misconduct, inefficiency, or violations of departmental policies and procedures. By maintaining impartiality and objectivity,
         the OIG promotes public trust and confidence in the police department's activities and enhances its credibility within the community.      
        </p>
        <p>
        In addition to conducting investigations, the Office of Inspector General plays a vital role in recommending corrective actions and policy reforms
         based on its findings. These recommendations aim to address systemic issues, improve operational effectiveness, and enhance the department's overall 
         performance. Through regular reporting and communication with departmental leadership and external stakeholders, the OIG contributes to 
         fostering a culture of accountability and continuous improvement within the police department,
         ultimately ensuring that it operates in accordance with legal and ethical standards while serving the needs of the community.
        </p>
      </div>
    </div>
  );
}

export default DepartmentPage;
