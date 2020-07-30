import React from "react"

export interface FooterProps {
  description: string
}

const Footer = (props: FooterProps) => {
  return (
    <>
      <footer>
        <div className="w-full px-2">
          <span className="text-sm text-gray-700 float-left">
            {props.description}
          </span>

          <span className="text-sm text-gray-700 float-right">
            Powered by <a className="text-blue-500" href="https://github.com/vidalab/vida">vida</a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer