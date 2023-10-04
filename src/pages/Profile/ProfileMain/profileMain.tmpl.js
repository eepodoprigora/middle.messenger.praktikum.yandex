import s from './profile_main.module.scss'

export const tmpl = `
<main class="main">
    <div class="profile__container">
        <a href="{{back_link}}" class="profile__back"></a>
        <div class="profile__main">
            {{{ProfileAvatar}}}
            <div class="${s.profile__name}">{{profile_name}}</div>
            <div class="${s.profile_table}">
                {{{RowGenMail}}}
                {{{RowGenLogin}}}
                {{{RowGenFName}}}
                {{{RowGenLName}}}
                {{{RowGenChatName}}}
                {{{RowGenTel}}}
            </div>
            {{{LinkChangeData}}}
            {{{LinkChangePass}}}
            {{{LinkExit}}}
        </div>
    </div>
</main>
`
