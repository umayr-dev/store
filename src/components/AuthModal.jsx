import React from 'react'
import CloseIcon from '../assets/icons/CloseIcon'
import Api from '../api'
import { urls } from '../constants/urls'

function AuthModal({open, onClose}) {
    function handleSubmit(e){
        e.preventDefault()
        let obj = {}
        for (let element of e.target){
            if(element.type !== 'submit'){
                obj[element.name] = element.value
            }
        }
        Api.post(urls.auth.register, {...obj}).then(res => {
            if(res.data.data.id){
                localStorage.setItem('user', JSON.stringify(res.data.data))
                onClose()
            }
        }).catch(err => console.log(err, 'Error in register'))
    }
  return (
    <div className={open ?'modal active' : 'modal'}>
        <div className="modal-bg"></div>
        <div className="modal-panel">
            <div className="modal-panel__header">
                <div></div>
                <button className='modal-panel__close' onClick={onClose}>
                    <CloseIcon/>
                </button>
            </div>
            <div className="modal-panel__body">
                <h3 className="modal-panel__title">Ma'lumotlaringizni kiriting</h3>
                <br />
                <form onSubmit={handleSubmit} className="modal-form">
                    <label>
                        <span>Familiyangizni kiriting:</span>
                        <br />
                        <input type="text" name='familiya' required />
                    </label>
                    <label>
                        <span>Ismingizni kiriting:</span>
                        <br />
                        <input type="text" name='ism' required />
                    </label>
                    <label>
                        <span>Email  kiriting:</span>
                        <br />
                        <input type="email" name='email' required/>
                    </label>
                    <label>
                        <span>Parol kiriting:</span>
                        <br />
                        <input type="password" name='parol' required/>
                    </label>
                    <button type='submit'>Kirish</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AuthModal