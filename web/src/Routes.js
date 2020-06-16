// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/dashboards/create" page={CreateDashboardPage} name="createDashboard" />
      <Route path="/dashboards/create/{id}" page={CreateDashboardPage} name="copyDashboard" />
      <Route path="/dashboards/{id}" page={DashboardPage} name="dashboard" />
      <Route path="/dashboards" page={DashboardsPage} name="dashboards" />
      <Route path="/" page={StartPage} name="start" />
      <Route path="/home" page={HomePage} name="home" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route notfound page={NotFoundPage} />

      <Private unauthenticated="start">
        <Route path="/dashboards/new" page={NewDashboardPage} name="newDashboard" />
        <Route path="/dashboards/{id}/edit" page={EditDashboardPage} name="editDashboard" />
      </Private>
    </Router>
  )
}

export default Routes
