import ContactsPage from "./components/Contacts/ContactsPage";
import HomePage from "./components/HomePage/HomePage";
import PortfolioPage from "./components/Portfolio/PortfolioPage";

export const routes = [
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '/contacts',
        Component: ContactsPage
    },
    {
        path: '/portfolio',
        Component: PortfolioPage
    },
]