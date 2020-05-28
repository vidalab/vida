import React from "react"

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
            <a
              href="/"
              className="font-semibold text-xl tracking-tight"
            >
              {props.name}
            </a>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header