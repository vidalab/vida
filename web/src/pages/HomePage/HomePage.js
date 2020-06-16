import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { containerClassName } from '../../components/Charts/Constants'
import DashboardsCell from '../../components/DashboardsCell/DashboardsCell'
import { Link, routes } from '@redwoodjs/router'
import { GAPageView } from '../../PageView'
import { useEffect } from 'react'
import { setPageTitle } from '../../PageHelper'

const HomePage = () => {
  useEffect(() => {
    setPageTitle()
    GAPageView()
  }, [])
  return (
    <>
      <Header name="Vida"/>
      <div className={containerClassName + " flex px-6 pt-4 pb-2"}>
        <div className="w-1/2">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl xl:text-4xl font-medium leading-tight">
            Create compelling dashboards quickly.
            <span className="sm:block text-teal-500 font-medium">No coding required.</span>
          </h1>
          <p className="mt-6 leading-relaxed sm:text-lg md:text-xl xl:text-lg text-gray-600">
            Vida is a software tool that reads JSON files and turns them
            into compelling dashboards. The JSON files allow you to customize data source, layout,
            and charts.
          </p>

          <div className="flex mt-6 justify-start md:justify-center xl:justify-start">
            <Link
              className="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md"
              to={routes.createDashboard()}>
              Create Dashboard
            </Link>
            <a href="https://docs.vida.io/src-tutorials-create-a-dashboard-and-deploy-to-netlify"
              className="ml-4 rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-white hover:bg-gray-200 md:text-lg xl:text-base text-gray-800 font-semibold leading-tight shadow-md"
              target="_blank"
            >Publish Dashboard</a>
          </div>
        </div>
        <div className="w-1/2">
          <img src="/images/HomePageLogo.png" />
        </div>
      </div>
      <div className={containerClassName + " pb-4"}>
        <div className="font-bold text-xl mb-2">Examples</div>
        <DashboardsCell ownerId="" />
      </div>
      <div className={containerClassName+ " pb-10"}>
        <p>Implemented with: <a href="https://redwoodjs.com/" target="_blank">RedwoodJS</a>, <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>, <a href="https://fontawesome.com/license" target="_blank">FontAwesome</a>.</p>
      </div>
    </>
  )
}

export default HomePage
