import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import RootLayout from "./layouts/RootLayout"
import UseStateCounter from "./components/UseStateCounter"
import SignUp from "./pages/auth/SignUp"
import SignIn from "./pages/auth/SignIn"
import AuthLayout from "./layouts/AuthLayout"
import BlogListing from "./pages/blog/BlogListing"
import BlogDetail from "./pages/blog/BlogDetail"
import NotFoundPage from "./pages/NotFoundPage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFoundPage />} />

        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/usestate-counter" element={<UseStateCounter />} />
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
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


