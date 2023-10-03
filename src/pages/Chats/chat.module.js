import s from './chat.module.scss'

export const tmpl = `
<div class="${s.chats}">
    <div class="${s.chats__left}">
        <a class="${s.chats_link}" href="{{to}}">{{link_text}}</a>
        <div>
            <input type="{{input_type}}" placeholder="{{search_input_placeholder}}" class="${s.chats_search}"/>
        </div>
        <ul class=${s.chats_list}>
            {{#each fakeData}}
            <li class="${s.chats_message_block}">
                <img class="${s.chats_message_img}" src={{avatar}} alt="Avatar"/>
                <div class="${s.chats_message_main}">
                    <div class="${s.chats_message_author}">{{user}}</div>
                    <div class="${s.chats_message_text}">
                        {{message}}
                    </div>
                </div>
                <div class="${s.chats_message_right}">
                    <span class="${s.chats_message_time}">{{time}}</span>
                    <span class="${s.chats_message_new}">{{new}}</span>
                </div>
            </li>
            {{/each}}
        </ul>
    </div>
    <div class=${s.chats_right}>
        <div class=${s.chats_dialog}>{{dialog_text}}</div>
        <div class=${s.chats_form}>
            <input class=${s.chats_input} type="{{input_type}}" name={{input_name}} id={{input_id}}
                   placeholder="{{message_input_placeholder}}"/>
        </div>
    </div>
</div>
`