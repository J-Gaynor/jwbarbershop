"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ setBgId }) => {
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle dropdown

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
                                Information
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setBgId('services-bg')}>
                            <Link href='/services' className='navbar-text'>
                                Services
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setBgId('staff-bg')}>
                            <Link href='/staff' className='navbar-text'>
                                Staff
                            </Link>
                        </button>
                    </li>
                    <li className='relative group'>
                        <button className='focus:outline-none navbar-text xl:pe-3'>
                            <span className={`fi fi-gb`}></span>
                        </button>
                        <ul className='absolute hidden group-hover:block dropdown w-full'>
                            <li className='navbar-text mb-0'>
                                <a href='/'>
                                    <span className={`fi fi-jp`}></span>
                                </a>
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
                                    Information
                                </Link>
                            </li>
                            <li className='p-2 navbar-text '>
                                <Link href='/services' onClick={() => setMenuOpen(false)}>
                                    Services
                                </Link>
                            </li>
                            <li className='p-2 navbar-text '>
                                <Link href='/staff' onClick={() => setMenuOpen(false)}>
                                    Staff
                                </Link>
                            </li>
                            <li className='p-2 relative group'>
                                <button className='focus:outline-none navbar-text xl:pe-3'>
                                    <span className={`fi fi-en`}></span>
                                </button>
                                <ul className='absolute hidden group-hover:block dropdown w-full'>
                                    <li className='navbar-text mb-0'>
                                        <a href='/'>
                                            <span className={`fi fi-jp`}></span>
                                        </a>
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
