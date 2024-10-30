"use client";
import { useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from '../components/Navbar.js';
import enMessages from '../../locales/en/en.json';
import jaMessages from '../../locales/ja/ja.json';


const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const messages = {
    gb: enMessages,
    jp: jaMessages,
};

export default function Layout({ children }) {
    const [language, setLanguage] = useState('jp');
    const [bgId, setBgId] = useState('default-bg');

    useEffect(() => {
        const pageName = window.location.pathname.split('/')[1];
        
        switch(pageName){
            case('info'):
                setBgId('info-bg');
                break;
            case('services'):
                setBgId('services-bg');
                break;
            case('staff'):
                setBgId('staff-bg');
                break;
            default:
                setBgId('home-bg');  
                break; 
        }
    }, []);

    return (
        <html lang={language}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap" rel="stylesheet"/>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <IntlProvider locale={language} messages={messages[language]}>
                    <div className='img-bg mb-5' id={bgId}>
                        <div className='grid mx-auto sticky top-0 z-50 '>
                            <Navbar language={language} setLanguage={setLanguage} setBgId={setBgId}/>
                        </div>
                    </div>
                    {children}
                </IntlProvider>
            </body>
        </html>
    );
}
