import { v4 as uuid } from "uuid";

export const SidebarLinksData = [
  { id: uuid(), link: "/static-profile-card", menuName: "Static Profile Card" },
  {
    id: uuid(),
    link: "/dynamic-profile-card",
    menuName: "Dynamic Profile Card",
  },
  { id: uuid(), link: "/usestate-counter", menuName: "useState Counter" },
  { id: uuid(), link: "/usereducer-counter", menuName: "useReducer Counter" },
  { id: uuid(), link: "/todolist", menuName: "Todolist" },

  { id: uuid(), link: "/blog", menuName: "Blog" },
  { id: uuid(), link: "/blog/blog-detail", menuName: "Blog Detail" },
];

export const NonInteractiveCompData = [
  { id: uuid(), link: "/rbbadge", menuName: "Badge" },
  { id: uuid(), link: "/rbbreadcrumb", menuName: "Breadcrumbs" },
  { id: uuid(), link: "/rbbutton", menuName: "Buttons" },
  { id: uuid(), link: "/rbpagination", menuName: "Pagination" },
  { id: uuid(), link: "/rbprogressbar", menuName: "ProgressBar" },
];

export const InteractiveCompData = [
  { id: uuid(), link: "/rbaccordion", menuName: "Accordion" },
  { id: uuid(), link: "/rbcarousel", menuName: "Carousel" },
  { id: uuid(), link: "/rbdropdowns", menuName: "Dropdowns" },
  { id: uuid(), link: "/rbmodal", menuName: "Modal" },
  { id: uuid(), link: "/rbnavbar-offcanvas", menuName: "Navbar Offcanvas" },
  { id: uuid(), link: "/rbnav-tabs", menuName: "Nav Tabs" },
];

export const FormsData = [
  { id: uuid(), link: "/rb-formcontrols", menuName: "Form Controls" },
  { id: uuid(), link: "/rb-html5-validation", menuName: "HTML5 Validation" },
  { id: uuid(), link: "/rb-formik-validation", menuName: "Formik Validation" },
  { id: uuid(), link: "/rhf-basic", menuName: "RHF Basic " },
  { id: uuid(), link: "/rhf-yup", menuName: "RHF Yup " },
];
