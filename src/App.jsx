import { RouterProvider } from "react-router-dom"
import { router } from "./routes/MainRoutes"

// below are imports for context api
import UserProvider from "./context/providers/UserProvider"
import WishlistProvider from "./context/providers/WishlistProvider"

// below are imports for redux
import { Provider } from "react-redux"
import { store } from "./store/Store"

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <WishlistProvider>
          <RouterProvider router={router} />
        </WishlistProvider>
      </UserProvider>
    </Provider>
  )
}
export default App


