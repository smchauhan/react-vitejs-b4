import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import RootLayout from "./layouts/RootLayout"
import UseStateCounter from "./components/UseStateCounter"
import SignUp from "./pages/auth/SignUp"
import SignIn from "./pages/auth/SignIn"
import AuthLayout from "./layouts/AuthLayout"
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/usestate-counter" element={<UseStateCounter />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
export default App


