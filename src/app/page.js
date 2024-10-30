"use client";
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Footer from '@/components/Footer.js';

export default function Home() {
    return (
        <div>
            <main>
                <div className='w-10/12 mx-auto grid md:grid-cols-2'>
                    <div className='flex home-title'>
                        <h2 className='mx-auto content-center page-title'>
                            <FormattedMessage id='values' defaultMessage='Values'></FormattedMessage>
                        </h2>
                    </div>
                    <div className='home-content'>
                        <ul className='text-center'>
                            <li>
                                <FormattedMessage id='barbering_skills' defaultMessage='Barbering Skills'></FormattedMessage>
                            </li>
                            <li>
                                <FormattedMessage id='excellence_in_cutting' defaultMessage='Excellence in Cutting'></FormattedMessage>
                            </li>
                            <li>
                                <FormattedMessage id='customers_first' defaultMessage='Customers First'></FormattedMessage>
                            </li>
                            <li>
                                <FormattedMessage id='best_place_for_grooming' defaultMessage='Best Place for Grooming'></FormattedMessage>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
