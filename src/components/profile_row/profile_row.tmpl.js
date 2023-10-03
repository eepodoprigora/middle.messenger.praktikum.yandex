import s from './profile_row.module.scss';


export const tmpl = `
<div class="row__container" border="{{no_border}}">
    <div class="row__name">{{row_name}}</div>
    <div class="row__data">{{row_data}}</div>
</div>
`