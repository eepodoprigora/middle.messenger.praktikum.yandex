
import Handlebars from "handlebars";

import { tmpl } from "./profile_button";

export const ProfileButton = (props) => {
return Handlebars.compile(tmpl)(props)

};
