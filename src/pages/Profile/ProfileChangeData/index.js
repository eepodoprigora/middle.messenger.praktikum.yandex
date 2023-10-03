import Handlebars from "handlebars";

import { tmpl } from "./profileChangeData.tmpl";
// import { FormLink } from "../../../components/form_link";
import {ProfileAvatar} from "../../../components/profile_avatar"
import {ProfileRowChange} from "../../../components/profile_row_change"
import {ProfileButton} from "../../../components/profile_button"


export const ProfileChangeData = () => {
    console.log
    return Handlebars.compile(tmpl)({
        back_link: '/profile',
        // mainPageLink: FormLink({to: '/', text: 'Main page'}),
        ProfileAvatar: ProfileAvatar({
            image_url: 'https://static.vecteezy.com/system/resources/previews/001/420/419/non_2x/portrait-of-angry-british-fold-cat-on-black-photo.jpg', 
            
        }),
        RowGenMail : ProfileRowChange({
            row_name: 'Почта',
            placeholder: 'pochta@yandex.ru'
        }),
        RowGenLogin : ProfileRowChange({
            row_name: 'Логин',
            placeholder: 'JohnyCat'
        }),
        RowGenFName : ProfileRowChange({
            row_name: 'Имя',
            placeholder: 'Джони'
        }),
        RowGenLName : ProfileRowChange({
            row_name: 'Фамилия',
            placeholder: 'Пушистый'
        }),
        RowGenChatName : ProfileRowChange({
            row_name: 'Имя в чате',
            placeholder: 'Джони кот'
        }),
        RowGenTel : ProfileRowChange({
            row_name: 'Телефон',
            placeholder: '+7 (909) 967 30 30',
            no_border: 'true'
        }),
        SaveBtn: ProfileButton({
            button_type: 'submit',
            button_text: 'Сохранить',
            button_nav: '/profile'
        })
        

        

    })
}