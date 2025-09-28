import React from 'react';
import './AppDownload.css';
import appStore from '../../assets/app_store.png';
import playStore from '../../assets/play_store.png';

const AppDownload = () => {
    return (
        <section className="app-download" id="app-download" aria-labelledby="download-title">
            <h2 id="download-title" className="ad-title">
                For a better experience, download <span className="ad-brand">MB-Dine</span> app
            </h2>

            <div className="app-download-platforms" role="list">
                <button type="button" className="platform" aria-label="Get it on Google Play" role="listitem">
                    <img
                        src={playStore}
                        alt="Google Play badge"
                        loading="lazy"
                        width="180"
                        height="54"
                    />
                </button>

                <button type="button" className="platform" aria-label="Download on the App Store" role="listitem">
                    <img
                        src={appStore}
                        alt="App Store badge"
                        loading="lazy"
                        width="180"
                        height="54"
                    />
                </button>
            </div>
        </section>
    );
};

export default AppDownload;
