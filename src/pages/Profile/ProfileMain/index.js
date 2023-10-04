import Handlebars from "handlebars";

import { tmpl } from "./profileMain.tmpl";
// import { FormLink } from "../../../components/form_link";
import {ProfileAvatar} from "../../../components/profile_avatar"
import {ProfileRow} from "../../../components/profile_row"
import {ProfileChangeLink} from "../../../components/profile_change_link"


export const ProfileMain = () => {
    return Handlebars.compile(tmpl)({
        profile_name: 'Джони кот', 
        back_link: '/chats',
        // mainPageLink: FormLink({to: '/', text: 'Main page'}),
        ProfileAvatar: ProfileAvatar({
            image_url: 'https://static.vecteezy.com/system/resources/previews/001/420/419/non_2x/portrait-of-angry-british-fold-cat-on-black-photo.jpg', 
            overlay_text: 'Изменить аватар',
            openChangeAvatarPopup:
             'const popup = document.querySelector(".popup-avatar"); popup.classList.add("_active"); ',
             closeChangeAvatarPopup: 
             'const popup = document.querySelector(".popup-avatar"); popup.classList.remove("_active"); ',
            popup_input_type: 'file',
            popup_input_name: 'avatar',
            popup_input_id: 'avatar',
            btn_text: 'Поменять аватар'


        }),
        RowGenMail : ProfileRow({
            row_name: 'Почта',
            row_data: 'pochta@yandex.ru'
        }),
        RowGenLogin : ProfileRow({
            row_name: 'Логин',
            row_data: 'JohnyCat'
        }),
        RowGenFName : ProfileRow({
            row_name: 'Имя',
            row_data: 'Джони'
        }),
        RowGenLName : ProfileRow({
            row_name: 'Фамилия',
            row_data: 'Пушистый'
        }),
        RowGenChatName : ProfileRow({
            row_name: 'Имя в чате',
            row_data: 'Джони кот'
        }),
        RowGenTel : ProfileRow({
            row_name: 'Телефон',
            row_data: '+7 (909) 967 30 30',
            no_border: 'true'
        }),
        LinkChangeData: ProfileChangeLink ({
            link_to: '/profile-change-data',
            link_text: 'Изменить данные'
        }),
        LinkChangePass: ProfileChangeLink ({
            link_to: '/profile-change-password',
            link_text: 'Изменить пароль',
        }),
        LinkExit: ProfileChangeLink ({
            link_to: '/',
            link_text: 'Выйти',
            exit_link: 'true',
        }),

    })
}
