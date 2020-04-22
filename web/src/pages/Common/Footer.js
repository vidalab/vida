const Footer = (props) => {
  return (
    <>
      <footer>
        <div className="w-full">
          <span className="text-sm text-gray-700 float-left px-4 py-2 m-2">
            {props.description}
          </span>

          <span className="text-sm text-gray-700 float-right px-4 py-2 m-2">
            Powered by <a href="https://redwoodjs.com/" target="_blank">Redwoodjs</a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer