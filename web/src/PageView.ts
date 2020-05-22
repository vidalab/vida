import ReactGA from 'react-ga'

export const GAPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search)
}