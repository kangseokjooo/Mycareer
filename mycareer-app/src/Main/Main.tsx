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
} from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { BsLink45Deg, BsGithub,BsFillFilePersonFill } from "react-icons/bs";
import { FaGitSquare} from "react-icons/fa";
import {IoLocationSharp} from 'react-icons/io5'
import {SiMysql} from 'react-icons/si'
import styled from "styled-components";
import project4 from "../img/Logo.jpg";
import project1 from "../img/produce32.png";
import project2 from "../img/HotDog-Logo.png";
import project3 from "../img/Todo.jpg";
import prepare from "../img/Prepare.jpg";
import {LiaBirthdayCakeSolid} from 'react-icons/lia'
import { AiOutlineMail } from 'react-icons/ai';

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
  Mysql:<SiMysql/>,
  AWS: <BiLogoAws />,
  netify: <BiLogoNetlify />,
  Git: <FaGitSquare />,
  GitHub: <BsGithub />,
};

const PortfolioSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
`;

const PortfolioCard = styled.div`
  width: 250px;
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
    width: 220px;
  }
`;
const AboutMeWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 50%;
`;

const AboutmeInfo = styled.div`
  border-bottom: 1px solid black;
  border-radius: 3px;
  width: 40%;
  text-align: center;
  padding: 20px;
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
      content: "이상형 월드컵 게임 서비스",
      logo: project1,
      tool: ["html", "javascript", "css", "netlify"],
      role: ["Footer제작", "Page 반응형"],
      url: "https://amazing-gingersnap-47354c.netlify.app",
    },
    {
      title: "Hot_dog",
      content: "견주 커뮤니티 사이트",
      logo: project2,
      tool: ["html", "javascript", "css", "node.js", "Aws", "CLOUDTYPE"],
      role: [
        "주제 선정",
        "마이페이지 구현",
        "로그인,로그아웃 구현",
        "게시판 댓글기능 구현",
      ],
      url: "https://port-0-kdt9-hotdog-iciy2almixca8s.sel5.cloudtype.app/",
    },
    {
      title: "TODOLIST",
      content: "TODOLIST mini project(Github 레포지토리 첨부)",
      logo: project3,
      tool: ["React.js", "styled-components"],
      role: ["Todolist 전체 구현"],
      url: "https://github.com/kangseokjooo/Todolistminiproject",
    },
    {
      title: "Mycareer",
      content: "React Portfolio web app",
      logo: project4,
      tool: [],
      role: [],
      url: "",
    },
    {
      title: "준비중...",
      content: "준비중...",
      logo: prepare,
      tool: [],
      role: [],
      url: "",
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <AboutMeWrap>
            <AboutmeInfo>
              <BsFillFilePersonFill style={{ fontSize: "24px" }} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ fontWeight: "900" }}>이름:</div>
                <div style={{fontWeight:'900'}}>kang</div>
              </div>
            </AboutmeInfo>
            <AboutmeInfo>
            <LiaBirthdayCakeSolid style={{ fontSize: "24px" }} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ fontWeight: "900" }}>생년월일:</div>
                <div style={{fontWeight:'900'}}>96.08.17</div>
              </div>
            </AboutmeInfo>
            <AboutmeInfo>
            <IoLocationSharp style={{ fontSize: "24px" }} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ fontWeight: "900" }}>주소지:</div>
                <div style={{fontWeight:'900'}}>경기도 고양시 일산서구</div>
              </div>
            </AboutmeInfo>
            <AboutmeInfo>
            <AiOutlineMail style={{ fontSize: "24px" }} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ fontWeight: "900" }}>메일:</div>
                <div style={{fontWeight:'900'}}>zpckq69@naver.com</div>
              </div>
            </AboutmeInfo>
            <AboutmeInfo>1</AboutmeInfo>
            <AboutmeInfo>1</AboutmeInfo>
          </AboutMeWrap>
        </div>
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
          {["nodejs", "Java", "Spring","Mysql"].map((skill) => (
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
          {["AWS", "netify"].map((skill) => (
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
              <p>{item.content}</p>
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
