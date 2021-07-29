import '@redwoodjs/router'

type ParseRouteParameters<Route> = Route extends `${string}/{${infer Param}:${string}}/${infer Rest}` ? { [Entry in Param | keyof ParseRouteParameters<`/${Rest}`>]: string } : Route extends `${string}/{${infer Param}:${string}}` ? { [Entry in Param]: string } : Route extends `${string}/{${infer Param}}` ? { [Entry in Param]: string } : Record<string, string>

declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    createDashboard: (params?: ParseRouteParameters<"/dashboards/create">) => "/dashboards/create"
    copyDashboard: (params?: ParseRouteParameters<"/dashboards/create/{id}">) => "/dashboards/create/{id}"
    dashboard: (params?: ParseRouteParameters<"/dashboards/{id}">) => "/dashboards/{id}"
    dashboards: (params?: ParseRouteParameters<"/dashboards">) => "/dashboards"
    start: (params?: ParseRouteParameters<"/">) => "/"
    home: (params?: ParseRouteParameters<"/home">) => "/home"
    about: (params?: ParseRouteParameters<"/about">) => "/about"
    newDashboard: (params?: ParseRouteParameters<"/dashboards/new">) => "/dashboards/new"
    editDashboard: (params?: ParseRouteParameters<"/dashboards/{id}/edit">) => "/dashboards/{id}/edit"
  }
}
