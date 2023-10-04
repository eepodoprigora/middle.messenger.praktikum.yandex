import Handlebars from "handlebars"
import { tmpl } from "../NotFound404/NotFound404.tmpl"
import { FormLink } from "../../../components/form_link"

export const NotFoundServer = () => {
    return Handlebars.compile(tmpl)({
        error__num: '500',
        error__text: 'Мы уже фиксим',
        FormLink: FormLink({
            to: '/chats',
            text: 'Назад к чатам'
        })
    })
}
