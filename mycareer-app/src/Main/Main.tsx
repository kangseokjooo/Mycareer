import { useState } from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import Modal from "./Modal";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoJava,
  BiLogoSpringBoot,
} from "react-icons/bi";
import styled from "styled-components";
import project4 from '../img/Logo.jpg';
import project1 from '../img/produce32.png'
import project2 from '../img/HotDog-Logo.png';
import project3 from '../img/Todo.jpg';
import prepare from '../img/Prepare.jpg';


const MainTitleFont = styled.h1`
  margin-left: 5%;
  font-size: 48px;
  font-weight: bold;
  margin-top: 20px;
`;

const MainSkillWrap = styled.div`
  color: black;
  background-color: white;
  display: flex;
  justify-content: center;

  > div {
    padding: 20px;
    margin: 10px;
    margin-top: 20px;
    border-radius: 10px;
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: lightgray;
      transform: scale(1.1);
    }

    svg {
      display: none;
    }

    &:hover svg {
      display: block;
    }

    svg {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
`;

const FBskills = styled.div`
  font-weight: 900;
  font-size: 32px;
  text-align: center;
  background-color: white;
  color: black;
`;

const skillIcons: any = {
  html: <AiOutlineHtml5 />,
  css: <BiLogoCss3 />,
  Reactjs: <BiLogoReact />,
  Javascript: <BiLogoJavascript />,
  Typescript: <BiLogoTypescript />,
  nodejs: <BiLogoNodejs />,
  Java: <BiLogoJava />,
  Spring: <BiLogoSpringBoot />,
};

const PortfolioSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
`;

const PortfolioCard = styled.div`
  width: 300px;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;


export default function Main() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const handleOpenModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const portfolioItems = [
    { title: "Produce 32", content: "이상형 월드컵 게임 서비스",logo:project1,},
    { title: "Hot_dog", content: "견주 커뮤니티 사이트" ,logo:project2},
    { title: "TODOLIST", content: "TODOLIST mini project",logo:project3 },
    { title: "Mycareer", content: "React Portfolio web app",logo:project4 },
    { title: "준비중...", content: "준비중...",logo:prepare },
    { title: "준비중...", content: "준비중...",logo:prepare }
  ];

  return (
    <>
      <div id="About me">
      <MainTitleFont>About me</MainTitleFont>
      </div>
      <div id="skills">
        <MainTitleFont>Skills</MainTitleFont>
        <FBskills>Frontend Skills</FBskills>
        <MainSkillWrap>
          {["html", "css", "Reactjs", "Javascript", "Typescript"].map(
            (skill) => (
              <div
                key={skill}
                onMouseEnter={() => setSelectedSkill(skill)}
                onMouseLeave={() => setSelectedSkill(null)}
                style={{
                  backgroundColor: selectedSkill === skill ? "white" : "white",
                }}
              >
                {selectedSkill === skill ? skillIcons[skill] : null}
                {`#${skill}`}
              </div>
            )
          )}
        </MainSkillWrap>

        <FBskills>Backend Skills</FBskills>
        <MainSkillWrap>
          {["nodejs", "Java", "Spring"].map((skill) => (
            <div
              key={skill}
              onMouseEnter={() => setSelectedSkill(skill)}
              onMouseLeave={() => setSelectedSkill(null)}
              style={{
                backgroundColor: selectedSkill === skill ? "white" : "white",
              }}
            >
              {selectedSkill === skill ? skillIcons[skill] : null}
              {`#${skill}`}
            </div>
          ))}
        </MainSkillWrap>
      </div>

      <div id="portfolio">
        <MainTitleFont>Portfolio</MainTitleFont>
        <PortfolioSection>
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} onClick={()=>handleOpenModal(item)}>
            <img src={item.logo} alt="Logo" />
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </PortfolioCard>
          ))}
        </PortfolioSection>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedProject ? selectedProject.title : ''}
        content={selectedProject ? selectedProject.content : ''}
        logo={selectedProject ? selectedProject.logo:null}
      />
    </>
  );
}
