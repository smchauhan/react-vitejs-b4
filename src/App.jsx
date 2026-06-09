import { RouterProvider } from "react-router-dom"
import { router } from "./routes/MainRoutes"
import UserProvider from "./context/providers/UserProvider"
import WishlistProvider from "./context/providers/WishlistProvider"
function App() {
  return (
    <UserProvider>
      <WishlistProvider>
        <RouterProvider router={router} />
      </WishlistProvider>
    </UserProvider>
  )
}
export default App


