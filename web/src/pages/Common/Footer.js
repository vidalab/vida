const Footer = (props) => {
  return (
    <>
      <footer>
        <div className="w-full">
          <span className="text-sm text-gray-700 float-left px-2 m-2">
            {props.description}
          </span>

          <span className="text-sm text-gray-700 float-right px-2 m-2">
            Powered by <a className="text-blue-500" href="https://github.com/vidalab/vida">vida</a> & <a className="text-blue-500" href="https://redwoodjs.com/" target="_blank">redwoodjs</a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer