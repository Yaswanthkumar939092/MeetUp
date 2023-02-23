import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import HomeRouteContext from './context/HomeRouteContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {userName: '', selectedOption: '', topicsListDet: topicsList}

  updateDetails = (name, option) => {
    this.setState({userName: name, selectedOption: option})
  }

  render() {
    const {userName, selectedOption, topicsListDet} = this.state
    return (
      <HomeRouteContext.Provider
        value={{
          userName,
          selectedOption,
          updateDetails: this.updateDetails,
          topicsListDet,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </HomeRouteContext.Provider>
    )
  }
}

export default App
