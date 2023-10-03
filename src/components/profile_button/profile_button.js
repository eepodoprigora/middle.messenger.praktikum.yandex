
import s from './profile_button.module.scss'

export const tmpl = `
<a href="{{button_nav}}" class="${s.profile__btn}" type="{{button_type}}">
    {{button_text}}
</a>
`
