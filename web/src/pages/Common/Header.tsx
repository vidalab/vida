import { Link, routes } from '@redwoodjs/router'

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
                Docs
              </a>
              <a href="https://blog.vida.io" target="_blank" className="inline-block text-teal-200 hover:text-white mr-4">
                Blog
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header