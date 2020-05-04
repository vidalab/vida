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
              className="font-semibold text-xl tracking-tight"
            >
              {props.name}
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header