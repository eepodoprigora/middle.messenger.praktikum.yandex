
import Handlebars from "handlebars";

import { tmpl } from "./form_button.tmpl";

export const FormButton = (props) => {
    return Handlebars.compile(tmpl)(props)
};
