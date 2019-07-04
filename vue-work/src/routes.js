import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetail from './components/CustomerDetail'
import Edit from './components/Edit'

export const routes = [
    { path: '/', component: Customers },
    { path: '/about', component: About },
    { path: '/add', component: Add },
    { path: '/detail/:id', component: CustomerDetail },
    { path: '/edit/:id', component: Edit }
]