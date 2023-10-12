import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; /* Set your preferred light background color here */
  color: #000000; /* Set your preferred light text color here */
  height: 150px;
  border-top: 2px solid #000000; /* Set your preferred light border color here */
  border-bottom: 2px solid #000000; /* Set your preferred light border color here */
  border-radius: 5px;
`;

const MailFont = styled.div`
  font-weight: 900;
  line-height: 2;
`;

const ContactFont = styled.div`
  font-size: 200%;
  line-height: 1.2;
`;

const GithubLink = styled.a`
  text-decoration: none;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <ContactFont>Contact me</ContactFont>
      <MailFont>zpckq69@naver.com</MailFont>
      <div>
        <GithubLink href="https://www.naver.com/">Naver</GithubLink>
      </div>
    </FooterContainer>
  );
}
