"use client";
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';

const Navbar = ({ language, setLanguage, setBgId }) => {
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle dropdown
    let language2;
    if (language === 'jp') {
        language2 = 'gb';
    } else {
        language2 = 'jp';
    }
    console.log(language2)

    return (
        <nav className='flex w-full navbar bg-yellow-950 bg-opacity-60 isolate py-2'>
            <ul className='flex justify-between items-center mx-auto w-10/12'>
                <li>
                    <button onClick={() => setBgId('home-bg')}>
                        <Link href='/'><h1 className='navbar-text title px-3 py-3'>John Wayne Barbershop</h1></Link>
                    </button>
                </li>

                {/* Hamburger Icon for Small Screens */}
                <div className='flex items-center xl:hidden'>
                    <button onClick={() => setMenuOpen(!menuOpen)} className='focus:outline-none'>
                        {/* Hamburger Icon */}
                        <div className='space-y-2'>
                            <span className='block w-8 h-0.5 bg-white'></span>
                            <span className='block w-8 h-0.5 bg-white'></span>
                            <span className='block w-8 h-0.5 bg-white'></span>
                        </div>
                    </button>
                </div>

                {/* Full Menu for Large Screens */}
                <div className={`flex gap-5 ${menuOpen ? 'hidden' : 'hidden xl:flex'}`}>
                    <li>
                        <button onClick={() => setBgId('info-bg')}>
                            <Link href='/info' className='navbar-text'>
                                <FormattedMessage id='info' defaultMessage='Info'></FormattedMessage>
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setBgId('services-bg')}>
                            <Link href='/services' className='navbar-text'>
                                <FormattedMessage id='services' defaultMessage='Services'></FormattedMessage>
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setBgId('staff-bg')}>
                            <Link href='/staff' className='navbar-text'>
                                <FormattedMessage id='staff' defaultMessage='Staff'></FormattedMessage>
                            </Link>
                        </button>
                    </li>
                    <li className='relative group'>
                        <button className='focus:outline-none navbar-text xl:pe-3'>
                            <span className={`fi fi-${language}`}></span>
                        </button>
                        <ul className='absolute hidden group-hover:block dropdown w-full'>
                            <li className='navbar-text mb-0'>
                                <button onClick={() => setLanguage(language2)}>
                                    <span className={`fi fi-${language2}`}></span>
                                </button>
                            </li>
                        </ul>
                    </li>
                </div>

                {/* Dropdown Menu for Small Screens */}
                {menuOpen && (
                    <div className='absolute top-full right-0 w-full bg-yellow-950 bg-opacity-60 xl:hidden pb-5'>
                        <ul className='flex flex-col items-center'>
                            <li className='p-2 navbar-text '>
                                <Link href='/info' onClick={() => setMenuOpen(false)}>
                                    <FormattedMessage id='info' defaultMessage='Info'></FormattedMessage>
                                </Link>
                            </li>
                            <li className='p-2 navbar-text '>
                                <Link href='/services' onClick={() => setMenuOpen(false)}>
                                    <FormattedMessage id='services' defaultMessage='Services'></FormattedMessage>
                                </Link>
                            </li>
                            <li className='p-2 navbar-text '>
                                <Link href='/staff' onClick={() => setMenuOpen(false)}>
                                    <FormattedMessage id='staff' defaultMessage='Staff'></FormattedMessage>
                                </Link>
                            </li>
                            <li className='p-2 relative group'>
                                <button className='focus:outline-none navbar-text xl:pe-3'>
                                    <span className={`fi fi-${language}`}></span>
                                </button>
                                <ul className='absolute hidden group-hover:block dropdown w-full'>
                                    <li className='navbar-text mb-0'>
                                        <button onClick={() => setLanguage(language2)}>
                                            <span className={`fi fi-${language2}`}></span>
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
