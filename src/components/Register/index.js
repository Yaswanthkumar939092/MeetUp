import {Component} from 'react'
import HomeRouteContext from '../../context/HomeRouteContext'
import {
  RegisterPageContainer,
  WebLogo,
  LoginContainer,
  LoginImage,
  FormContainer,
  FormHeading,
  FieldStyles,
  LabelStyles,
  InputElement,
  SelectEl,
  RegisterButton,
  ErrorMsg,
} from './styledComponents'

class Register extends Component {
  state = {
    userName: '',
    selectedOption: 'Arts_and_Culture',
    emptyUsername: false,
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeOption = event => {
    this.setState({selectedOption: event.target.value})
  }

  renderUserNameField = () => {
    const {userName} = this.state

    return (
      <FieldStyles>
        <LabelStyles htmlFor="name">NAME</LabelStyles>
        <InputElement
          id="name"
          value={userName}
          type="text"
          onChange={this.onChangeUserName}
          placeholder="Your name"
        />
      </FieldStyles>
    )
  }

  renderOptionField = topicsListDetails => {
    const {selectedOption} = this.state

    return (
      <FieldStyles>
        <LabelStyles htmlFor="option">TOPICS</LabelStyles>
        <SelectEl
          id="option"
          value={selectedOption}
          onChange={this.onChangeOption}
        >
          {topicsListDetails.map(each => (
            <option key={each.id} value={each.id}>
              {each.displayText}
            </option>
          ))}
        </SelectEl>
      </FieldStyles>
    )
  }

  render() {
    const {userName, selectedOption, emptyUsername} = this.state

    return (
      <HomeRouteContext.Consumer>
        {value => {
          const {updateDetails, topicsListDetails} = value
          const onClickRegisterBtn = event => {
            event.preventDefault()
            if (userName === '') {
              this.setState({emptyUsername: true})
            } else {
              this.setState({emptyUsername: false})
              updateDetails(userName, selectedOption)
              const {history} = this.props
              history.replace('/')
            }
          }
          return (
            <RegisterPageContainer>
              <WebLogo
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <LoginContainer>
                <LoginImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <FormContainer onSubmit={onClickRegisterBtn}>
                  <FormHeading>Let us join</FormHeading>
                  {this.renderUserNameField()}
                  {this.renderOptionField(topicsListDetails)}
                  <RegisterButton type="submit">Register Now</RegisterButton>
                  {emptyUsername && <ErrorMsg>Please enter your name</ErrorMsg>}
                </FormContainer>
              </LoginContainer>
            </RegisterPageContainer>
          )
        }}
      </HomeRouteContext.Consumer>
    )
  }
}

export default Register
