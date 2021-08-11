import { AuthProvider } from '@redwoodjs/auth'
import { Auth0Client } from '@auth0/auth0-spa-js'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import ReactGA from 'react-ga'

import Routes from 'src/Routes'

import './index.css'
import './fontawesome.js'

ReactGA.initialize(process.env.GA_ID)

const auth0 = new Auth0Client({
  domain: process.env.AUTH0_DOMAIN,
  client_id: process.env.AUTH0_CLIENT_ID,
  redirect_uri: process.env.REDIRECT_URL || 'http://localhost:8910/',
  cacheLocation: 'localstorage',
  audience: process.env.AUTH0_AUDIENCE,
})

// optional configuration
const alertOptions = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '50px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
}

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <AuthProvider client={auth0} type="auth0">
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </AlertProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
