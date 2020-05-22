import { Link, routes } from '@redwoodjs/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface HeaderProps {
  name: string,
  backgroundColor: string,
  align: string
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
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header