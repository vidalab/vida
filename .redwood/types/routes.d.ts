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
