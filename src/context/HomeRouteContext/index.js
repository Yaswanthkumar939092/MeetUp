import React from 'react'

const HomeRouteContext = React.createContext({
  userName: '',
  selectedOption: '',
  updateDetails: () => {},
  topicsListDet: [],
})

export default HomeRouteContext
