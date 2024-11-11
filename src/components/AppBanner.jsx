import React from 'react'

function AppBanner() {
  return (
    <div className="container">
        <div className="app-banner">
            <img width={560} height={502} src="https://texnomart.uz/_nuxt/img/phone-min.f0f6444.png" alt="" />
            <div className="app-banner__content">
                <h1>Ilovani yuklang</h1>
                <p>Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!</p>
                <p><img width={112} height={112} src="https://texnomart.uz/_nuxt/img/app-qr-code-2x.e576bd5.png" alt="" />
                <span className='qr'>Kamerani yo`naltiring va <b>Texnomart </b>ilovasini bepul yuklang</span>
                </p>
                <div className="app-prog">
                    <a href="https://play.google.com/store/apps/details?id=com.texnomart.app&pli=1"><img src="https://texnomart.uz/_nuxt/img/googleplay-uz.abf7a04.svg" alt="" /></a>
                    <a href="https://apps.apple.com/uz/app/texnomart/id6443874184"><img src="https://texnomart.uz/_nuxt/img/appstore-uz.9413a3f.svg" alt="" /></a>
                </div>

            </div>
        </div>
        <div className="adventage">
            <h1>Smartfonlar va maishiy texnika muddatli to'lovga</h1>
            <div className="issue">
                <div className="card">
                    <img width={48} height={48} src="https://texnomart.uz/_nuxt/img/diagram.8268449.svg" alt="" />
                    <p><h2>Muddatli to'lovga sotib olish</h2>
                    <span>Qulay bo'lib to'lash</span>
                    </p>
                </div>
                <div className="card">
                    <img width={48} height={48} src="https://texnomart.uz/_nuxt/img/truck.771714e.svg" alt="" />
                    <p><h2>Bepul yetkazib berish</h2>
                    <span>Texnomartga tovarlarni yetkazib berish shartlari</span>
                    </p>
                </div>
                <div className="card">
                    <img width={48} height={48} src="https://texnomart.uz/_nuxt/img/warranty.1819e8f.svg" alt="" />
                    <p><h2>Mahsulotlar uchun kafolat</h2>
                    <span>Mahsulotlar uchun kafolatTexnomartda mahsulotning kafolati va qaytarilishi haqida hamma narsani bilib oling</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppBanner