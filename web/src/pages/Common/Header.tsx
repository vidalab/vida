import { Link, routes } from '@redwoodjs/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

export interface HeaderProps {
  name: string,
  backgroundColor: string,
  align: string
}

const dashboardView = (): boolean => {
  const pathname = document.location.pathname
  return (pathname.indexOf("/dashboards/") == 0 &&
    pathname.indexOf("/dashboards/create") != 0 &&
    pathname.indexOf("/dashboards/new") != 0)
}

const dashboardId = (): string => {
  if (dashboardView()) {
    const params = useParams()
    return params.id
  } else {
    return ""
  }
}

const Header = (props: HeaderProps) => {
  const cssStyle = {
    backgroundColor: props.backgroundColor,
    textAlign: props.align
  }
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (<>
      <header>
        <nav className="bg-teal-500 p-3" style={cssStyle}>
          <div className="text-white">
            <Link
              to={routes.start()}
              className="font-semibold text-xl tracking-tight inline-block mr-4 leading-none"
            >
              {props.name}
            </Link>

            <div className="text-sm inline-block">
              <a href="https://docs.vida.io" target="_blank" className="inline-block text-teal-200 hover:text-white mr-4">
                <FontAwesomeIcon icon="book" />
                <span className="ml-2">Docs</span>
              </a>
              <a href="https://blog.vida.io" target="_blank" className="inline-block text-teal-200 hover:text-white mr-4">
                <FontAwesomeIcon icon="pen-nib" />
                <span className="ml-2">Blog</span>
              </a>
              <a href="https://github.com/vidalab/vida" target="_blank" className="inline-block text-teal-200 hover:text-white mr-4">
                <FontAwesomeIcon icon={["fab", "github"]} />
                <span className="ml-2">Code</span>
              </a>

              {dashboardView() &&
                <Link
                  to={"/dashboards/create/" + dashboardId()}
                  className="inline-block text-teal-200 hover:text-white mr-4"
                >
                  <FontAwesomeIcon icon={["fas", "clone"]} />
                  <span className="ml-2">Copy</span>
                </Link>
              }
            </div>
            <div className="text-sm inline-block float-right">
                <span>{isAuthenticated ? 'Hi ' + (currentUser.name ? currentUser.name : currentUser.email) : ''}</span>
                <a href="#" onClick={ async () => {
                    isAuthenticated ?
                      await logOut({returnTo: process.env.REDIRECT_URL || 'http://localhost:8910/'}) :
                      await logIn()}
                  } className="inline-block text-teal-200 hover:text-white mr-4">
                  <span className="ml-2">{isAuthenticated ? 'Log Out' : 'Log In'}</span>
                </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
