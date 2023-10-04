
import Handlebars from "handlebars"

import { tmpl } from "./form_header.tmpl"
// import { Link } from "../../components/link"

export const FormHeader = ({ header }) => {
    return Handlebars.compile(tmpl)({ header })
}
