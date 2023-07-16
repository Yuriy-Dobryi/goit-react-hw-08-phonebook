import { Helmet } from 'react-helmet';
import styled from 'styled-components';

export default function Home() {
  return (
    <Hero>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Title>
        Step into a world of efficient contact management with our platform.
      </Title>
      <Text>
        Designed to help you easily record new contacts, remove unwanted
        entries, and effortlessly navigate your personalized list of added
        contacts. Start optimizing your contact management experience now.
      </Text>
    </Hero>
  );
}

const Hero = styled.div`
  position: absolute;
  max-width: 1200px;
  position: absolute;
  top: 200%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  padding: 5px;
  color: #ffe1e1;
  font-weight: 500;
  font-size: 32px;
  border-radius: 20px;
  background-color: #2e20207d;
`;

const Text = styled.p`
  width: 600px;
  padding: 10px;
  ${'' /* transform: rotate(5deg); */}
  background-color: #2e20207d;
  color: #ffe1e1;
  margin: 0 auto;
  font-size: 22px;
  font-weight: 500;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;