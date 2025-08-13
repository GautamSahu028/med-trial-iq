import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../components/Landing/LandingPage.tsx';
import DashBoardPage from '../components/DashBoard/DashBoardPage.tsx';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/dashboard',
      element: <DashBoardPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
