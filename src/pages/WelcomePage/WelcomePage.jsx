import { HeroLayout } from '../../components/HeroLeyout/HeroLayout';
import {
  Title,
  Container,
  // HeroImageContainer,
  VideoTutorContainer,
  CalStatus,
  CalCaption,
  CalCount,
  VideoCaption,
  VideoCount,
  SvgVideo,
  SvgRun,
  // Outline,
  InfoHolder,
  NavContainer,
  SignUp,
  SignIn,
} from './WelcomePage.styled';

export default function WelcomePage() {
  return (
    <>
      <HeroLayout>
        <Container>
          <div>
            <Title>Transforming your body shape with Power Pulse</Title>
            {/* <Outline>
           <use></use>
         </Outline> */}

            {/* <HeroImageContainer> */}
            <NavContainer>
              <SignUp to="/register">Sign Up</SignUp>
              <SignIn to="/login">Sign In</SignIn>
            </NavContainer>
          </div>
          <InfoHolder>
            <VideoTutorContainer>
              <SvgVideo>
                <use></use>
              </SvgVideo>
              <div>
                <VideoCount>350+</VideoCount>
                <VideoCaption>Video tutorial</VideoCaption>
              </div>
            </VideoTutorContainer>
            <CalStatus>
              <SvgRun width="30" height="30">
                <use></use>
              </SvgRun>
              <div>
                <CalCount>
                  500 <CalCaption>cal</CalCaption>
                </CalCount>
              </div>
            </CalStatus>
          </InfoHolder>
          {/* </HeroImageContainer> */}
        </Container>
      </HeroLayout>
    </>
  );
}
