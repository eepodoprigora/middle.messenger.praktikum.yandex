
import s from './form_input.module.scss'

export const tmpl = `
<div class="${s.form__input_wrapper} ${s.mb_20}">
    <label class="${s.form__input_label}" for="{{input_id}}">{{label_text}}</label>
    <input class="${s.form__input}"
           type="{{input_type}}"
           id="{{input_id}}"
           name="{{input_name}}"
           placeholder="{{input_placeholder}}"
           minLength="{{input_minL}}"
           maxLength="{{input_maxL}}"
           required="{{required}}"
           valid="{{valid}}"
    />
    <span class="${s.form__input_error}">{{input_error}}</span>
</div>
`
