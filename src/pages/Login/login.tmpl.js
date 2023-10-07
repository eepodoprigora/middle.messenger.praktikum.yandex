import s from './login.module.scss'


export const tmpl = `
<main class="main">
    <form class='form'>
        <div class="form__container">
            {{{formHeader}}}
            {{{FormInputLogin}}}
            {{{FormInputPassword}}}
            {{{FormButton}}}
            {{{FormLink}}}
        </div>
    </form>
</main>
`
