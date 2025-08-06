import React from 'react'
import './AppDownload.css'
import app_store from '../../assets/app_store.png'
import play_store from '../../assets/play_store.png'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br /> MB-Dine App</p>
            <div className='app-download-platforms'>
                <img src={play_store} alt='playstore-icon'/>
                <img src={app_store} alt='appstore-icon'/>
            </div>
        </div>
    )
}

export default AppDownload