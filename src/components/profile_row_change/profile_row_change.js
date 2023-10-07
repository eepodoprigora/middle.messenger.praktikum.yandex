import s from './profile_row_change.module.scss';


export const tmpl = `
<div class="row__container" border="{{no_border}}">
    <div class="row__name">{{row_name}}</div>
    <input placeholder="{{placeholder}}" name="{{input_name}}" class="row__data ${s.row__input}"/>
</div>
`
