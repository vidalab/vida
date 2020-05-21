import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { containerClassName } from '../../components/Constants'
import DashboardsCell from '../../components/DashboardsCell/DashboardsCell'
import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  let cssStyle = {
  }
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
      <div className={containerClassName + " pb-10"} style={cssStyle}>
        <div className="font-bold text-xl mb-2">Examples</div>
        <DashboardsCell />
      </div>
      <Footer description="Flexible Data Visualization"/>
    </>
  )
}

export default HomePage