import {Link} from 'react-router-dom'
import HomeRouteContext from '../../context/HomeRouteContext'

import {
  HomeContainer,
  WebLogo,
  RegisterPartHeading,
  RegisterPartParagraph,
  ButtonEl,
  RegisterViewHeading,
  RegisterViewPara,
  MeetupImg,
} from './styledComponents'

const Home = () => (
  <HomeRouteContext.Consumer>
    {value => {
      const {userName, selectedOption} = value

      return (
        <HomeContainer>
          <WebLogo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          {userName === '' ? (
            <>
              <RegisterPartHeading>Welcome to Meetup</RegisterPartHeading>
              <RegisterPartParagraph>
                Please register for the topic
              </RegisterPartParagraph>
              <Link to="/register">
                <ButtonEl type="button">Register</ButtonEl>
              </Link>
            </>
          ) : (
            <>
              <RegisterViewHeading>Hello {userName}</RegisterViewHeading>
              <RegisterViewPara>Welcome to {selectedOption}</RegisterViewPara>
            </>
          )}
          <MeetupImg
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </HomeContainer>
      )
    }}
  </HomeRouteContext.Consumer>
)

export default Home
