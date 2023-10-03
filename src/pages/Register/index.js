import Handlebars from "handlebars"

import { tmpl } from "./register.tmpl"
// import { Link } from "../../components/link"
import {FormHeader} from '../../components/form_header'
import { FormInput } from "../../components/form_input"
import { FormButton } from "../../components/form_button"
import {FormLink} from "../../components/form_link"

export const Register = () => {
return Handlebars.compile(tmpl)({
    // ProfilePageLink : Link({to: '/profile', text: 'Перейти в профайл'}),
    formHeader:  FormHeader({header : 'Регистрация'}),
    FormInputEmail: FormInput({
        input_id: 'email',
        label_text: 'Почта',
        input_type: 'email',
        input_name: 'email',
        input_placeholder: '',
        input_minL: '6',
        input_maxL: '20',
        required: 'true',
        valid: 'false',
        input_error: 'Неверная почта'
    }),
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
    FormInputName: FormInput({
        input_id: 'first_name',
        label_text: 'Имя',
        input_type: 'text',
        input_name: 'first_name',
        input_placeholder: '',
        input_minL: '2',
        input_maxL: '20',
        required: 'true',
        valid: 'false',
        input_error: 'Поле обязательно для заполнения'
    }),
    FormInputSurname: FormInput({
        input_id: 'second_name',
        label_text: 'Фамилия',
        input_type: 'text',
        input_name: 'second_name',
        input_placeholder: '',
        input_minL: '2',
        input_maxL: '20',
        required: 'true',
        valid: 'false',
        input_error: 'Поле обязательно для заполнения'
    }),
    FormInputPhone: FormInput({
        input_id: 'phone',
        label_text: 'Телефон',
        input_type: 'tel',
        input_name: 'phone',
        input_placeholder: '+7 (999) 99 99 99',
        input_minL: '13',
        input_maxL: '13',
        required: 'true',
        valid: 'false',
        input_error: 'Поле обязательно для заполнения'
    }),
    FormInputPassword: FormInput({
        input_id: 'password',
        label_text: 'Пароль',
        input_type: 'password',
        input_name: 'password',
        input_placeholder: '',
        input_minL: '8',
        input_maxL: '20',
        required: 'true',
        valid: 'false',
        input_error: 'Поле обязательно для заполнения'
    }),
    FormInputPasswordRepeat: FormInput({
        input_id: 'password_repeat',
        label_text: 'Пароль (еще раз)',
        input_type: 'password',
        input_name: 'password_repeat',
        input_placeholder: '',
        input_minL: '8',
        input_maxL: '20',
        required: 'true',
        valid: 'false',
        input_error: 'Пароли не совпадают'
    }),
    FormButton: FormButton({
        button_type: 'submit',
        button_text: 'Зарегистрироваться'
    }),
    FormLink : FormLink({
        to: '/',
        text: 'Войти'

    })


})
}