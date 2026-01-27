import "./cv.css";

import ProfileHeader from "./components/ProfileHeader";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PrintButton from "./components/PrintButton";

export default function ProfilPage() {
  return (
    <div className="cv-page">
      <div className="cv-container">
        <PrintButton />
        <ProfileHeader />
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  );
}
