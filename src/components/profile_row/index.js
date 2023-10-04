import Handlebars from "handlebars";

import { tmpl } from "./profile_row.tmpl";

// interface LinkProps {
//     to: String;
//     text: String;
// }

export const ProfileRow = (props) => {
return Handlebars.compile(tmpl)(props)

};
