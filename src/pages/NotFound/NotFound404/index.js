import Handlebars from "handlebars"
import { tmpl } from "./NotFound404.tmpl"
import { FormLink } from "../../../components/form_link"

export const NotFound404 = () => {
    return Handlebars.compile(tmpl)({
        error__num: '404',
        error__text: 'Не туда попали',
        FormLink: FormLink({
            to: '/chats',
            text: 'Назад к чатам'
        })
    })
}