import Handlebars from "handlebars";

import { tmpl } from "./profile_channge_link.tmpl";

// interface LinkProps {
//     to: String;
//     text: String;
// }

export const ProfileChangeLink = (props) => {
return Handlebars.compile(tmpl)(props)

};
