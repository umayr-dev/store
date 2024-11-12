import React from 'react'

function Chat({openChat, onCloseChat}) {

  return (
    <div className={openChat ?'chatmodal active' : 'chatmodal'}> 
        <a href="+998712099944">
        <p><img src="https://texnomart.uz/_nuxt/img/pozvonit.7b8b618.svg" alt="" /> Qo'ng'iroq qilmoq </p>
        </a>
        <a href="mailto:zayavka@texnomart.uz">
        <p><img src="https://texnomart.uz/_nuxt/img/napisat_na_pochtu.5627e7e.svg" alt="" /> Po'chtaga xabar jo'natmoq</p>
        </a>
        <a href="https://t.me/tm_support">
        <p><img src="https://texnomart.uz/_nuxt/img/telegram.d3d87b7.svg" alt="" />Telegram</p>
        </a>

        <img style={{cursor: 'pointer'}} className='close' onClick={onCloseChat} width={40} height={40} src="https://texnomart.uz/_nuxt/img/chat-close.381e748.svg" alt="" />
    </div>
  )
}

export default Chat