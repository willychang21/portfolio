/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const CvLazyImport = createFileRoute('/cv')()
const BlogLazyImport = createFileRoute('/blog')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const ProjectsIndexLazyImport = createFileRoute('/projects/')()
const ProjectsProjectIdLazyImport = createFileRoute('/projects/$projectId')()

// Create/Update Routes

const CvLazyRoute = CvLazyImport.update({
  path: '/cv',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cv.lazy').then((d) => d.Route))

const BlogLazyRoute = BlogLazyImport.update({
  path: '/blog',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/blog.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProjectsIndexLazyRoute = ProjectsIndexLazyImport.update({
  path: '/projects/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/projects/index.lazy').then((d) => d.Route),
)

const ProjectsProjectIdLazyRoute = ProjectsProjectIdLazyImport.update({
  path: '/projects/$projectId',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/projects/$projectId.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/blog': {
      id: '/blog'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogLazyImport
      parentRoute: typeof rootRoute
    }
    '/cv': {
      id: '/cv'
      path: '/cv'
      fullPath: '/cv'
      preLoaderRoute: typeof CvLazyImport
      parentRoute: typeof rootRoute
    }
    '/projects/$projectId': {
      id: '/projects/$projectId'
      path: '/projects/$projectId'
      fullPath: '/projects/$projectId'
      preLoaderRoute: typeof ProjectsProjectIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/projects/': {
      id: '/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AboutLazyRoute,
  BlogLazyRoute,
  CvLazyRoute,
  ProjectsProjectIdLazyRoute,
  ProjectsIndexLazyRoute,
})

/* prettier-ignore-end */
