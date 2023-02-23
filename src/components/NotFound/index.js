import {Cont, Img, Head, Desc} from './styledComponents'

const NotFound = () => (
  <Cont>
    <Img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Head>Page Not Found</Head>
    <Desc>We are sorry, the page you requested could not be found</Desc>
  </Cont>
)
export default NotFound
