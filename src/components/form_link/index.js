import Handlebars from "handlebars";

import { tmpl } from "./form_link.tmpl";

// interface LinkProps {
//     to: String;
//     text: String;
// }

export const FormLink = (props) => {
return Handlebars.compile(tmpl)(props)

};