/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './pages/__root'
import { Route as SettingsRouteImport } from './pages/settings'
import { Route as RulesRouteImport } from './pages/rules'
import { Route as ProxiesRouteImport } from './pages/proxies'
import { Route as ProvidersRouteImport } from './pages/providers'
import { Route as ProfilesRouteImport } from './pages/profiles'
import { Route as LogsRouteImport } from './pages/logs'
import { Route as DashboardRouteImport } from './pages/dashboard'
import { Route as ConnectionsRouteImport } from './pages/connections'
import { Route as LayoutRouteImport } from './pages/_layout'
import { Route as IndexRouteImport } from './pages/index'

const SettingsRoute = SettingsRouteImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRouteImport,
} as any)
const RulesRoute = RulesRouteImport.update({
  id: '/rules',
  path: '/rules',
  getParentRoute: () => rootRouteImport,
} as any)
const ProxiesRoute = ProxiesRouteImport.update({
  id: '/proxies',
  path: '/proxies',
  getParentRoute: () => rootRouteImport,
} as any)
const ProvidersRoute = ProvidersRouteImport.update({
  id: '/providers',
  path: '/providers',
  getParentRoute: () => rootRouteImport,
} as any)
const ProfilesRoute = ProfilesRouteImport.update({
  id: '/profiles',
  path: '/profiles',
  getParentRoute: () => rootRouteImport,
} as any)
const LogsRoute = LogsRouteImport.update({
  id: '/logs',
  path: '/logs',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRouteImport,
} as any)
const ConnectionsRoute = ConnectionsRouteImport.update({
  id: '/connections',
  path: '/connections',
  getParentRoute: () => rootRouteImport,
} as any)
const LayoutRoute = LayoutRouteImport.update({
  id: '/_layout',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/connections': typeof ConnectionsRoute
  '/dashboard': typeof DashboardRoute
  '/logs': typeof LogsRoute
  '/profiles': typeof ProfilesRoute
  '/providers': typeof ProvidersRoute
  '/proxies': typeof ProxiesRoute
  '/rules': typeof RulesRoute
  '/settings': typeof SettingsRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/connections': typeof ConnectionsRoute
  '/dashboard': typeof DashboardRoute
  '/logs': typeof LogsRoute
  '/profiles': typeof ProfilesRoute
  '/providers': typeof ProvidersRoute
  '/proxies': typeof ProxiesRoute
  '/rules': typeof RulesRoute
  '/settings': typeof SettingsRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/_layout': typeof LayoutRoute
  '/connections': typeof ConnectionsRoute
  '/dashboard': typeof DashboardRoute
  '/logs': typeof LogsRoute
  '/profiles': typeof ProfilesRoute
  '/providers': typeof ProvidersRoute
  '/proxies': typeof ProxiesRoute
  '/rules': typeof RulesRoute
  '/settings': typeof SettingsRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/connections'
    | '/dashboard'
    | '/logs'
    | '/profiles'
    | '/providers'
    | '/proxies'
    | '/rules'
    | '/settings'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/connections'
    | '/dashboard'
    | '/logs'
    | '/profiles'
    | '/providers'
    | '/proxies'
    | '/rules'
    | '/settings'
  id:
    | '__root__'
    | '/'
    | '/_layout'
    | '/connections'
    | '/dashboard'
    | '/logs'
    | '/profiles'
    | '/providers'
    | '/proxies'
    | '/rules'
    | '/settings'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LayoutRoute: typeof LayoutRoute
  ConnectionsRoute: typeof ConnectionsRoute
  DashboardRoute: typeof DashboardRoute
  LogsRoute: typeof LogsRoute
  ProfilesRoute: typeof ProfilesRoute
  ProvidersRoute: typeof ProvidersRoute
  ProxiesRoute: typeof ProxiesRoute
  RulesRoute: typeof RulesRoute
  SettingsRoute: typeof SettingsRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/rules': {
      id: '/rules'
      path: '/rules'
      fullPath: '/rules'
      preLoaderRoute: typeof RulesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/proxies': {
      id: '/proxies'
      path: '/proxies'
      fullPath: '/proxies'
      preLoaderRoute: typeof ProxiesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/providers': {
      id: '/providers'
      path: '/providers'
      fullPath: '/providers'
      preLoaderRoute: typeof ProvidersRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/profiles': {
      id: '/profiles'
      path: '/profiles'
      fullPath: '/profiles'
      preLoaderRoute: typeof ProfilesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/logs': {
      id: '/logs'
      path: '/logs'
      fullPath: '/logs'
      preLoaderRoute: typeof LogsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/connections': {
      id: '/connections'
      path: '/connections'
      fullPath: '/connections'
      preLoaderRoute: typeof ConnectionsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LayoutRoute: LayoutRoute,
  ConnectionsRoute: ConnectionsRoute,
  DashboardRoute: DashboardRoute,
  LogsRoute: LogsRoute,
  ProfilesRoute: ProfilesRoute,
  ProvidersRoute: ProvidersRoute,
  ProxiesRoute: ProxiesRoute,
  RulesRoute: RulesRoute,
  SettingsRoute: SettingsRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
