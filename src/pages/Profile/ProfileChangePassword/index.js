import Handlebars from "handlebars";

import { tmpl } from "./profileChangePassword.tmpl";
// import { FormLink } from "../../../components/form_link";
import {ProfileAvatar} from "../../../components/profile_avatar"
import {ProfileRowChange} from "../../../components/profile_row_change"
import {ProfileButton} from "../../../components/profile_button"


export const ProfileChangePassword = () => {
    return Handlebars.compile(tmpl)({
        back_link: '/profile',
        // mainPageLink: FormLink({to: '/', text: 'Main page'}),
        ProfileAvatar: ProfileAvatar({
            image_url: 'https://static.vecteezy.com/system/resources/previews/001/420/419/non_2x/portrait-of-angry-british-fold-cat-on-black-photo.jpg', 
            
        }),
        RowOldPass : ProfileRowChange({
            row_name: 'Старый пароль',
            placeholder: '*******',
            input_name: 'oldPassword'
        }),
        RowNewPass : ProfileRowChange({
            row_name: 'Новый пароль',
            placeholder: '*******',
            input_name: 'newPassword'
        }),
        RowNewPassRepeat : ProfileRowChange({
            row_name: 'Повторите новый пароль',
            placeholder: '*******',
            input_name: 'newPasswordRep'
        }),
        SaveBtn: ProfileButton({
            button_type: 'submit',
            button_text: 'Сохранить',
        })
    })
}
