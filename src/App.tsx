import type { RouteRecord } from 'vite-react-ssg'
import HomePage from './pages/Home'
import ThankYouPage from './pages/ThankYou'

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: HomePage,
    entry: 'src/pages/Home.tsx',
  },
  {
    path: '/thank-you/consultation',
    Component: ThankYouPage,
    entry: 'src/pages/ThankYou.tsx',
  },
]

export default routes
