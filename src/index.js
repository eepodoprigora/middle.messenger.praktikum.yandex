import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ProfileMain } from "./pages/Profile/ProfileMain";
import { ProfileChangeData } from "./pages/Profile/ProfileChangeData";
import { ProfileChangePassword } from "./pages/Profile/ProfileChangePassword";
import { Chats} from './pages/Chats';
import {NotFound404} from './pages/NotFound/NotFound404';
import {NotFoundServer} from './pages/NotFound/NotFoundServer';


// styles

import './styles/normalize.scss';
// import './styles/general.scss';
import './styles/common.scss';

const ROUTES = {
    '/profile' : ProfileMain(),
    '/profile-change-data' : ProfileChangeData(),
    '/profile-change-password' : ProfileChangePassword(),
    '/': Login(),
    '/register': Register(),
    '/chats': Chats(),
    '/not-found-404': NotFound404(),
    '/not-found-server': NotFoundServer(),
}
 

window.addEventListener('DOMContentLoaded', ()=> {
    const root = document.getElementById('app');

    if(root) {
        console.log(window.location.pathname)
        const component = ROUTES[window.location.pathname] || NotFound()
        root.innerHTML = component
    }
    
})