import Handlebars from "handlebars";

import { tmpl } from "./profile_avatar.tmpl";

// interface LinkProps {
//     to: String;
//     text: String;
// }

export const ProfileAvatar = (props) => {
return Handlebars.compile(tmpl)(props)

};
