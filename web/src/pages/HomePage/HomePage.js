import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <header>
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-4xl font-light leading-tight">Redwood Viz</h1>
        <div className="flex mt-6 justify-start md:justify-center xl:justify-start">
          <ul>
            <li>
              <Link to={routes.about()}
                className="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md"
                >
                About</Link>
            </li>
          </ul>
        </div>
      </header>
      <main>Home</main>
    </>
  )
}

export default HomePage