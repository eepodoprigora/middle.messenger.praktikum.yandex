
import Handlebars from "handlebars";

import { tmpl } from "./form_input.tmpl";

export const FormInput = (props) => {
return Handlebars.compile(tmpl)(props)

};
