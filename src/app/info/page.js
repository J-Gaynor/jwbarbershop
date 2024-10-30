"use client";
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Info() {
    return (
        <div>
            <main>
                <div className='my-10 w-10/12 justify-between mx-auto grid md:grid-cols-2'>
                    <div className='flex'>
                        <h2 className='mx-auto content-center text-center page-title'>John Wayne Barbershop</h2>
                    </div>
                    <div className='text-center my-auto'>
                        <br/>
                        <ul>
                            <li>
                                <b>
                                    <FormattedMessage id='contact' defaultMessage='contact'></FormattedMessage>
                                </b>
                            </li>
                            <li>06-6252-7338</li>
                            <li>
                                <b>
                                    <FormattedMessage id='location' defaultMessage='location'></FormattedMessage>
                                </b>
                            </li>
                            <li>
                                <a href='https://maps.app.goo.gl/xMQK3vHvQkRJB47F7' target='_blank'>
                                    <FormattedMessage id='address' defaultMessage='address'></FormattedMessage>
                                </a>
                            </li>
                            <br/>
                            <li>
                                <b>
                                    <FormattedMessage id='openingHours' defaultMessage='openingHours'></FormattedMessage>
                                </b>
                            </li>
                            <ul>
                                <li>
                                    <FormattedMessage id='weekdays' defaultMessage='weekdays'></FormattedMessage>
                                </li>
                                <li>
                                    <FormattedMessage id='weekends' defaultMessage='weekends'></FormattedMessage>
                                </li>
                            </ul>
                            <li>
                                <b>
                                    <FormattedMessage id='closed' defaultMessage='closed'></FormattedMessage>
                                </b>
                            </li>
                            <ul>
                                <li>
                                    <FormattedMessage id='closedDays' defaultMessage='closedDays'></FormattedMessage>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
