import s from './profile_avatar.module.scss'
export const tmpl = `
<button onclick="{{openChangeAvatarPopup}}" class="${s.user__photo_btn}">
    <img class="${s.user__avatar}" src="{{image_url}}" alt="Avatar" />
    <div class="${s.user__photo_after}">
        <span class="${s.overlay_text}">Изменить аватар</span>
    </div>
</button>

<div class="popup-avatar popup">
    <div onclick="{{closeChangeAvatarPopup}}" class="${s.popup_wrapper}"></div>
    <div class="${s.popup_content}">
        <div class="${s.popup_title}">Загрузите файл</div>
        <form class="${s.popup__form}">
        <div class="${s.popup__wr_file}">
            <label class="${s.popup_file}" for="{{popup_input_type}}"> Выбрать <br/> новое фото </label>
                <input class="${s.popup_file__input}" type="{{popup_input_type}}" name="{{popup_input_name}}" id="{{popup_input_id}}" />
                </div>
          <div onclick="{{closeChangeAvatarPopup}}" class="${s.change__avatar}"> {{btn_text}}</div>
        </form>
    </div>
</div>
`
