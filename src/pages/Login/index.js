import Handlebars from "handlebars"

import { tmpl } from "./login.tmpl"
// import { Link } from "../../components/link"
import {FormHeader} from '../../components/form_header'
import { FormInput } from "../../components/form_input"
import { FormButton } from "../../components/form_button"
import {FormLink} from "../../components/form_link"

export const Login = () => {
return Handlebars.compile(tmpl)({
    // ProfilePageLink : Link({to: '/profile', text: 'Перейти в профайл'}),
    formHeader:  FormHeader({header : 'Вход'}),
    FormInputLogin: FormInput({
        input_id: 'login',
        label_text: 'Логин',
        input_type: 'text',
        input_name: 'login',
        input_placeholder: '',
        input_minL: '2',
        input_maxL: '20',
        required: 'true',
        valid: 'false',
        input_error: 'Неверный логин'
    }),
    FormInputPassword: FormInput({
        input_id: 'password',
        label_text: 'Пароль',
        input_type: 'password',
        input_name: 'password',
        input_placeholder: '********',
        input_minL: '8',
        input_maxL: '20',
        required: 'true',
        valid: 'false',
        input_error: 'Неверный пароль'
    }),
    FormButton: FormButton({
        button_type: 'submit',
        button_text: 'Авторизоваться'
    }),
    FormLink : FormLink({
        to: '/register',
        text: 'Нет аккаунта?'

    })


})
}
