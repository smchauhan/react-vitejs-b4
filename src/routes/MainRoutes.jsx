import { createBrowserRouter, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import RootLayout from "../layouts/RootLayout"
import UseStateCounter from "../components/UseStateCounter"
import SignUp from "../pages/auth/SignUp"
import SignIn from "../pages/auth/SignIn"
import AuthLayout from "../layouts/AuthLayout"
import StaticProfileCard from '../components/StaticProfileCard'
import UseReducerCounter from '../components/UseReducerCounter'
import TodoList from '../components/TodoList'
import DyamicCardDemo from "../pages/DyamicCardDemo"
import RBBadges from "../pages/RBBadges"
import RBBreadcrumbs from "../pages/RBBreadcrumbs"
import RBButtons from "../pages/RBButtons"
import RBPagination from "../pages/RBPagination"
import RBProgressBar from "../pages/RBProgressBar"
import RBAccordion from "bspages/RBAccordion"
import RBDropdowns from "../pages/RBDropdowns"
import RBCarousel from "../pages/RBCarousel"
import RBModal from "../pages/RBModal"
import RBNavbarOffcanvas from "../pages/RBNavbarOffcanvas"
import RBNavTabs from "pages/RBNavTabs"
import FormControls from "../pages/forms/FormControls"
import FormikValidation from "../pages/forms/FormikValidation"
import HTML5Validation from "../pages/forms/HTML5Validation"
import RHFYup from "../pages/forms/RHFYup"
import RHFBasic from "../pages/forms/RHFBasic"
import BlogListing from "../pages/blog/BlogListing"
import BlogDetail from "../pages/blog/BlogDetail"
import NotFoundPage from "../pages/NotFoundPage"
import ProtectedRoutes from "../utils/ProtectedRoutes"
import UseEffectHook from "../pages/hooks/UseEffectHook"
import UseRefHook from "../pages/hooks/UseRefHook"
import About from "../pages/About"
import ReactMemo from "../pages/hooks/ReactMemo"
import UseCallbackHook from "../pages/hooks/UseCallbackHook"
import ReactMemoAndUseCallback from "../pages/hooks/ReactMemoAndUseCallback"
import UseMemoHook from "../pages/hooks/UseMemoHook"
import UseCounterHook from "../pages/hooks/UseCounterHook"
import Products from "../pages/Products"
import Profile from "../pages/profile/Profile"

export const router = createBrowserRouter(
    [
        { path: "*", element: <NotFoundPage /> },

        // { path: "*", element: <Navigate to="/404" /> },
        // { path: "/404", element: <NotFoundPage /> },

        {
            element: <RootLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/about", element: <About /> },
                { path: "/static-profile-card", element: <StaticProfileCard /> },
                { path: "/dynamic-profile-card", element: <DyamicCardDemo /> },
                { path: "/usestate-counter", element: <UseStateCounter /> },
                { path: "/usereducer-counter", element: <UseReducerCounter /> },
                { path: "/todolist", element: <TodoList /> },
                // React Bootstrap Routes 
                { path: "/rbbadge", element: <RBBadges /> },
                { path: "/rbbreadcrumb", element: <RBBreadcrumbs /> },
                { path: "/rbbutton", element: <RBButtons /> },

                { path: "/rbpagination", element: <RBPagination /> },
                { path: "/rbprogressbar", element: <RBProgressBar /> },

                { path: "/rbaccordion", element: <RBAccordion /> },

                { path: "/rbdropdowns", element: <RBDropdowns /> },
                { path: "/rbcarousel", element: <RBCarousel /> },
                { path: "/rbmodal", element: <RBModal /> },


                { path: "/rbnavbar-offcanvas", element: <RBNavbarOffcanvas /> },
                { path: "/rbnav-tabs", element: <RBNavTabs /> },

                {
                    element: <ProtectedRoutes />,
                    children: [
                        { path: "/rb-formcontrols", element: <FormControls /> },
                        { path: "/rb-formik-validation", element: <FormikValidation /> },
                        { path: "/rb-html5-validation", element: <HTML5Validation /> },
                        { path: "/rhf-basic", element: <RHFBasic /> },
                        { path: "/rhf-yup", element: <RHFYup /> },
                    ]
                },


                { path: "/blog", element: <BlogListing /> },
                { path: "/blog/:id", element: <BlogDetail /> },
                // { path: "/blog/:slug", element: <BlogDetail /> },


                { path: "/useefect-hook", element: <UseEffectHook /> },
                { path: "/useref-hook", element: <UseRefHook /> },

                { path: "/react-memo", element: <ReactMemo /> },
                { path: "/usecallback-hook", element: <UseCallbackHook /> },
                { path: "/reactmemo-usecallback", element: <ReactMemoAndUseCallback /> },
                { path: "/usememo-hook", element: <UseMemoHook /> },
                { path: "/usecounter-hook", element: <UseCounterHook /> },

                { path: "/products/:category", element: <Products /> },

                { path: "/profile", element: <Profile /> },

            ]
        },
        {
            element: <AuthLayout />,
            children: [
                { path: "/auth/signin", element: <SignIn /> },
                { path: "/auth/signup", element: <SignUp /> },
            ]
        },
    ]
)