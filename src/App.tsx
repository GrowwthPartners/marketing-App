import type { RouteRecord } from 'vite-react-ssg'
import HomePage from './pages/Home'

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: HomePage,
    entry: 'src/pages/Home.tsx',
  },
]

export default routes
