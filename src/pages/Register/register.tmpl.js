import s from './register.module.scss'


export const tmpl = `
<form class='form'>
    <div class="form__container">
        {{{formHeader}}}
        {{{FormInputEmail}}}
        {{{FormInputLogin}}}
        {{{FormInputName}}}
        {{{FormInputSurname}}}
        {{{FormInputPhone}}}
        {{{FormInputPassword}}}
        {{{FormInputPasswordRepeat}}}
        {{{FormButton}}}
        {{{FormLink}}}
    </div>
</form>
`