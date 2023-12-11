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
  BiLogoAws,
  BiLogoNetlify,
  BiLogoDocker
} from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { BsLink45Deg, BsGithub, BsFillFilePersonFill } from "react-icons/bs";
import { FaGitSquare } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import styled from "styled-components";
import project4 from "../img/Logo.jpg";
import project1 from "../img/produce32.png";
import project2 from "../img/HotDog-Logo.png";
import project3 from "../img/Todo.jpg";
import prepare from "../img/Prepare.jpg";
import project5 from "../img/project5.png";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";

const MainTitleFont = styled.h1`
  margin-left: 2%;
  font-size: 48px;
  font-weight: bold;
  margin-top: 20px;
  border-bottom: 1px solid black;
  border-radius: 5px;
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
  html: <AiOutlineHtml5 style={{ color: "orange" }} />,
  css: <BiLogoCss3 style={{ color: "blue" }} />,
  Reactjs: <BiLogoReact style={{ color: "skyblue" }} />,
  Javascript: <BiLogoJavascript style={{ color: "#ffff00" }} />,
  Typescript: <BiLogoTypescript style={{ color: "blue" }} />,
  nodejs: <BiLogoNodejs style={{ color: "lightgreen" }} />,
  Java: <BiLogoJava style={{ color: "red" }} />,
  Spring: <BiLogoSpringBoot style={{ color: "lightgreen" }} />,
  Mysql: <SiMysql style={{ color: "blue" }} />,
  AWS: <BiLogoAws />,
  netify: <BiLogoNetlify style={{ color: "turquoise" }} />,
  Git: <FaGitSquare style={{ color: "#df4844" }} />,
  GitHub: <BsGithub />,
  Docker:<BiLogoDocker style={{color:"blue"}}/>
};

const PortfolioSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  justify-content: center;
`;

const PortfolioCard = styled.div`
  width: calc(33.33% - 20px);
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 30%;
  }
`;
const AboutMeWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  margin-left: 5%;
  @media (max-width:768px){
    height: 80%;
  }
`;

const MyImage = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: lightgray;
  opacity: 0.3;
`;

const AboutmeInfo = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 80%;
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
`;
const ContentPtag = styled.p`
  font-size: larger;
  @media (max-width: 768px) {
    font-size: medium;
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
    {
      title: "Produce 32",
      content: "이상형 월드컵 게임 서비스(Frontend)",
      logo: project1,
      tool: ["Html", "Javascript", "Css", "Netlify"],
      role: ["Footer제작", "Page 반응형"],
      url: "https://amazing-gingersnap-47354c.netlify.app",
    },
    {
      title: "HotDog",
      content: "견주 커뮤니티 사이트(Frontend-Backend)",
      logo: project2,
      tool: ["Html", "Javascript", "Css", "Node.js", "Aws", "CLOUDTYPE"],
      role: [
        "주제 선정",
        "마이페이지 구현",
        "로그인,로그아웃 구현",
        "게시판 댓글기능 구현",
        "DB 관계도 구현",
      ],
      url: "https://github.com/applicants-backend/kdt9_HotDog",
    },
    {
      title: "TODOLIST",
      content:
        "TODOLIST mini project(Github 레포지토리 첨부)(Frontend-Backend)",
      logo: project3,
      tool: ["React.js", "styled-components"],
      role: ["Todolist 기능 전체 구현"],
      url: "https://github.com/kangseokjooo/Todolistminiproject",
    },
    {
      title: "Mycareer",
      content: "개인 포트폴리오 사이트(Frontend)",
      logo: project4,
      tool: ["React.js", "TypeScript", "styled-components"],
      role: ["Header,Footer,Main 컴포넌트 구현", "전체 페이지 반응형"],
      url: "https://web-mycareer-euegqv2blnvcf1mf.sel5.cloudtype.app/",
    },
    {
      title: "소규모 사업장 관리 플랫폼",
      content: "소규모사업장 관리플랫폼[react-SpringBoot]",
      logo: project5,
      tool: ["Springboot","JPA","SpringSecurity","Swagger"],
      role: ["member RestApi","SpringSecurity","Payment RestApi","Swagger"],
      url: "http://ec2-3-35-58-201.ap-northeast-2.compute.amazonaws.com/",
    },
    {
      title: "준비중...",
      content: "준비중...",
      logo: prepare,
      tool: [],
      role: [],
      url: "",
    },
  ];

  return (
    <>
      <div id="About me">
        <MainTitleFont>
          <BsLink45Deg />
          About me
        </MainTitleFont>
        <AboutMeWrap>
          <MyImage>
            <div>Your image</div>
          </MyImage>
          <div style={{ textAlign: "left" }}>
            <AboutmeInfo>
              <BsFillFilePersonFill style={{ fontSize: "24px" }} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ fontWeight: "900" }}>이름:</div>
                <div style={{ fontWeight: "900" }}>강석주</div>
              </div>
            </AboutmeInfo>
            <AboutmeInfo>
              <LiaBirthdayCakeSolid style={{ fontSize: "24px" }} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ fontWeight: "900" }}>생년월일:</div>
                <div style={{ fontWeight: "900" }}>96.08.17</div>
              </div>
            </AboutmeInfo>
            <AboutmeInfo>
              <IoLocationSharp style={{ fontSize: "24px" }} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ fontWeight: "900" }}>주소지:</div>
                <div style={{ fontWeight: "900" }}>경기도 고양시 일산서구</div>
              </div>
            </AboutmeInfo>
            <AboutmeInfo>
              <AiOutlineMail style={{ fontSize: "24px" }} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ fontWeight: "900" }}>메일:</div>
                <div style={{ fontWeight: "900" }}>zpckq69@naver.com</div>
              </div>
            </AboutmeInfo>
          </div>
        </AboutMeWrap>
      </div>
      <div id="skills">
        <MainTitleFont>
          <GiSkills />
          Skills
        </MainTitleFont>
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
          {["nodejs", "Java", "Spring", "Mysql"].map((skill) => (
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
        <FBskills>Deployment</FBskills>
        <MainSkillWrap>
          {["AWS", "netify","Docker"].map((skill) => (
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
        <FBskills>Version Controll</FBskills>
        <MainSkillWrap>
          {["Git", "GitHub"].map((skill) => (
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
        <MainTitleFont>
          <GoProjectRoadmap />
          Portfolio
        </MainTitleFont>
        <PortfolioSection>
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} onClick={() => handleOpenModal(item)}>
              <img src={item.logo} alt="Logo" />
              <h3>{item.title}</h3>
              <ContentPtag>{item.content}</ContentPtag>
            </PortfolioCard>
          ))}
        </PortfolioSection>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedProject ? selectedProject.title : ""}
        content={selectedProject ? selectedProject.content : ""}
        logo={selectedProject ? selectedProject.logo : null}
        tool={selectedProject ? selectedProject.tool : []}
        role={selectedProject ? selectedProject.role : []}
        url={selectedProject ? selectedProject.url : ""}
      />
    </>
  );
}
