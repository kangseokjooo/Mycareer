import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white; 
  color: #000000; 
  height: 200px;
  border-top: 2px solid #000000; 
  border-bottom: 2px solid #000000; 
  border-radius: 5px;
`;

const MailFont = styled.div`
  font-weight: 900;
  line-height: 2;
  display: flex;
  align-items: center;
`;

const ContactFont = styled.div`
  font-size: 24px;
  line-height: 1.2;
`;

const GithubLink = styled.a`
  text-decoration: none;
  margin-top: 10px;
`;

const MailIcon = styled.div`
  font-size: 20px;
  margin-top: 9px;
`;
const GitHubIcon=styled.div`
  font-size: 30px;
  color: black;
`
export default function Footer() {
  return (
    <FooterContainer id='contact'>
      <ContactFont>Contact me</ContactFont>
      <MailFont>
        <MailIcon><AiOutlineMail /></MailIcon>
        :zpckq69@naver.com
      </MailFont>
      <div>
        <GithubLink href="https://github.com/kangseokjooo?tab=repositories" target='blank'>
          <GitHubIcon><BsGithub /></GitHubIcon>
        </GithubLink>
      </div>
    </FooterContainer>
  );
}
