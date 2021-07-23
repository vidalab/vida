declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    createDashboard: () => "/dashboards/create"
    copyDashboard: () => "/dashboards/create/{id}"
    dashboard: () => "/dashboards/{id}"
    dashboards: () => "/dashboards"
    start: () => "/"
    home: () => "/home"
    about: () => "/about"
    newDashboard: () => "/dashboards/new"
    editDashboard: () => "/dashboards/{id}/edit"
  }
}

import type AboutPageType from '/Users/phuocdo/Workspace/redwoodjs/vida/web/src/pages/AboutPage/AboutPage'
import type CreateDashboardPageType from '/Users/phuocdo/Workspace/redwoodjs/vida/web/src/pages/CreateDashboardPage/CreateDashboardPage'
import type DashboardPageType from '/Users/phuocdo/Workspace/redwoodjs/vida/web/src/pages/DashboardPage/DashboardPage'
import type DashboardsPageType from '/Users/phuocdo/Workspace/redwoodjs/vida/web/src/pages/DashboardsPage/DashboardsPage'
import type EditDashboardPageType from '/Users/phuocdo/Workspace/redwoodjs/vida/web/src/pages/EditDashboardPage/EditDashboardPage'
import type FatalErrorPageType from '/Users/phuocdo/Workspace/redwoodjs/vida/web/src/pages/FatalErrorPage/FatalErrorPage'
import type HomePageType from '/Users/phuocdo/Workspace/redwoodjs/vida/web/src/pages/HomePage/HomePage'
import type NewDashboardPageType from '/Users/phuocdo/Workspace/redwoodjs/vida/web/src/pages/NewDashboardPage/NewDashboardPage'
import type NotFoundPageType from '/Users/phuocdo/Workspace/redwoodjs/vida/web/src/pages/NotFoundPage/NotFoundPage'
import type StartPageType from '/Users/phuocdo/Workspace/redwoodjs/vida/web/src/pages/StartPage/StartPage'
import type UserHomePageType from '/Users/phuocdo/Workspace/redwoodjs/vida/web/src/pages/UserHomePage/UserHomePage'

declare global {
  const AboutPage: typeof AboutPageType
  const CreateDashboardPage: typeof CreateDashboardPageType
  const DashboardPage: typeof DashboardPageType
  const DashboardsPage: typeof DashboardsPageType
  const EditDashboardPage: typeof EditDashboardPageType
  const FatalErrorPage: typeof FatalErrorPageType
  const HomePage: typeof HomePageType
  const NewDashboardPage: typeof NewDashboardPageType
  const NotFoundPage: typeof NotFoundPageType
  const StartPage: typeof StartPageType
  const UserHomePage: typeof UserHomePageType
}
