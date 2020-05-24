import { Link, routes } from '@redwoodjs/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    return document.location.pathname.replace("/dashboards/", "")
  } else {
    return ""
  }
}

const Header = (props: HeaderProps) => {
  const cssStyle = {
    backgroundColor: props.backgroundColor,
    textAlign: props.align
  }
  return (<>
      <header>
        <nav className="bg-teal-500 p-3" style={cssStyle}>
          <div className="text-white">
            <Link
              to={routes.start()}
              className="font-semibold text-xl tracking-tight inline-block mr-4"
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
                  <span className="ml-2">Create</span>
                </Link>
              }
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header