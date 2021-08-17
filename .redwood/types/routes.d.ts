import '@redwoodjs/router'

type ParamType<constraint> = constraint extends "Int" ? number : constraint extends "Boolean" ? boolean : constraint extends "Float" ? number : string;
type RouteParams<Route> = Route extends `${string}/{${infer Param}:${infer Constraint}}/${infer Rest}` ? { [Entry in Param]: ParamType<Constraint> } & RouteParams<`/${Rest}`> : Route extends `${string}/{${infer Param}:${infer Constraint}}` ? { [Entry in Param]: ParamType<Constraint> } : Route extends `${string}/{${infer Param}}/${infer Rest}` ? { [Entry in Param]: string } & RouteParams<`/${Rest}`> : {}
type QueryParams = Record<string | number, string | number | boolean>

declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    createDashboard: (params?: RouteParams<"/dashboards/create"> & QueryParams) => "/dashboards/create"
    copyDashboard: (params?: RouteParams<"/dashboards/create/{id}"> & QueryParams) => "/dashboards/create/{id}"
    dashboard: (params?: RouteParams<"/dashboards/{id}"> & QueryParams) => "/dashboards/{id}"
    dashboards: (params?: RouteParams<"/dashboards"> & QueryParams) => "/dashboards"
    start: (params?: RouteParams<"/"> & QueryParams) => "/"
    home: (params?: RouteParams<"/home"> & QueryParams) => "/home"
    about: (params?: RouteParams<"/about"> & QueryParams) => "/about"
    newDashboard: (params?: RouteParams<"/dashboards/new"> & QueryParams) => "/dashboards/new"
    editDashboard: (params?: RouteParams<"/dashboards/{id}/edit"> & QueryParams) => "/dashboards/{id}/edit"
  }
}
