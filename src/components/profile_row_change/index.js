import Handlebars from "handlebars";

import { tmpl } from "./profile_row_change";

// interface LinkProps {
//     to: String;
//     text: String;
// }

export const ProfileRowChange= (props) => {
return Handlebars.compile(tmpl)(props)

};
