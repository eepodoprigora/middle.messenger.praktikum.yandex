import Handlebars from "handlebars"

import { tmpl } from "./chat.module"
import { fakeData } from "./fakeData"

export const Chats= () => {
return Handlebars.compile(tmpl)({
    fakeData,
    to: '/profile',
    link_text: 'Профиль',
    input_type: 'text',
    search_input_placeholder: 'Поиск',
    dialog_text: 'Выберите чат чтобы отправить сообщение',
    input_name: 'message',
    input_id: 'message',
    input_type: 'text',
   message_input_placeholder: 'Сообщение'
})
}
