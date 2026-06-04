import { RouterProvider } from "react-router-dom"
import { router } from "./routes/MainRoutes"
import { UserContext } from "./context/Context"
import { useState } from "react"
function App() {
  const [username, setUsername] = useState("Amit")
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  )
}
export default App


