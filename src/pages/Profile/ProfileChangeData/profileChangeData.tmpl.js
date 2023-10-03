import s from './profile_change_data.module.scss'

export const tmpl = `
<div class="profile__container">
    <a href="{{back_link}}" class="profile__back"></a>
    <div class="profile__main">
        {{{ProfileAvatar}}}
        <div class="${s.profile_table}">
            {{{RowGenMail}}}
            {{{RowGenLogin}}}
            {{{RowGenFName}}}
            {{{RowGenLName}}}
            {{{RowGenChatName}}}
            {{{RowGenTel}}}
    </div>
    {{{SaveBtn}}}
</div>
`


