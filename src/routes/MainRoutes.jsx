import { createBrowserRouter } from "react-router-dom"
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

export const router = createBrowserRouter(
    [
        {
            element: <RootLayout />,
            children: [
                { path: "/", element: <Home /> },
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

                { path: "/rb-formcontrols", element: <FormControls /> },

                { path: "/rb-formik-validation", element: <FormikValidation /> },
                { path: "/rb-html5-validation", element: <HTML5Validation /> },

                { path: "/rhf-basic", element: <RHFBasic /> },
                { path: "/rhf-yup", element: <RHFYup /> },


                { path: "/blog", element: <BlogListing /> },
                { path: "/blog/:id", element: <BlogDetail /> },
                // { path: "/blog/:slug", element: <BlogDetail /> },




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