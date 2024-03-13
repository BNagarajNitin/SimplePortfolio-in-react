/* eslint-disable jsx-a11y/alt-text */

import "./Main.css";
import Image from "./Image";
// import NitinImage from './public/Nitin.jpeg';
// import NitinImage from 'Nitin.jpeg';


function Main() {
  return (
    <div className="main">
      <div className="section1">
        <div className="image">
          {/* <img src={NitinImage} width="300px" height="300px" alt="Nitin" /> */}
          <img src="./Nitin.jpeg" width="300px" height="300px" alt="Nitin" />


        </div>
        <div className="content">
          <h3>B N Nitin</h3>
          <p>Software Developer at PARC Research lab pvt.ltd</p>
 <p>👋 Hi, I’m @BNagarajNitin having 2+ years of experience
 👀 I’m a Software Developer well versed in HTML,CSS,Bootstrap,Material Design,Javascript,Angular, Angular Material,React.js,Flutter,Node.js
  🌱 I’m currently working as Full Stack Developer in PARC Research Labs Technologies pvt ltd
💞️ I’m looking to collaborate on Projects on Angular and React.js
 📫 You can reach me @bnagarajnitin@gmail.com/9611042256</p>
</div>

      </div>
      <div className="section2">
        <Image image="./profile.jpg" title="Profile"/>
        <Image image="./resume.jpg" title="Resume"/>
        <Image image="./project.jpg" title="Project"/>
        <Image image="./phone1.jpg" title="Phone"/>
      </div>
    </div>
  );
}

export default Main;
