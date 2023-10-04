import s from './profile_change_link.module.scss';


export const tmpl = `
<div class="${s.row__link_container}" exit="{{exit_link}}">
    <a class="${s.row__link}" href="{{link_to}}">{{link_text}}</a>
</div>

`
