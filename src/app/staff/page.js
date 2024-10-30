"use client";
import Image from 'next/image';
import Footer from '@/components/Footer';
import { FormattedMessage } from 'react-intl';

export default function Info() {
    return (
        <div>
            <main className="">
                <div className='w-10/12 mx-auto grid md:grid-cols-2'>
                    <div className='flex'>
                        <h2 className='mx-auto content-center text-center page-title'>Meet the barbers</h2>
                    </div>
                    <div className='grid lg:grid-cols-2 xl:grid-rows-2 gap-5 my-10 justify-center'>
                        <Image 
                            src="/images/jw-hiro.jpeg"
                            alt="Shop" 
                            width={1280}
                            height={480}
                        />
                        <div className='text-center lg:my-auto'>
                            <b>
                                <FormattedMessage id='manager' defaultMessage='manager'></FormattedMessage>
                            </b>
                            <br/>
                            <b>
                                <FormattedMessage id='managerName' defaultMessage='managerName'></FormattedMessage>
                            </b>
                            <p>
                                <FormattedMessage id='managerFrom' defaultMessage='managerFrom'></FormattedMessage>
                            </p>
                            <p>
                                <FormattedMessage id='managerQuote' defaultMessage='managerQuote'></FormattedMessage>
                            </p>
                        </div>    
                        <Image 
                            src="/images/jw-naoto.jpeg"
                            alt="Shop" 
                            width={1280}
                            height={480}
                        />
                        <div className='text-center my-auto'>
                            <b>
                                <FormattedMessage id='stylist' defaultMessage='stylist'></FormattedMessage>
                            </b>
                            <br/>
                            <b>
                                <FormattedMessage id='stylistName' defaultMessage='stylistName'></FormattedMessage>
                            </b>
                            <br/>
                            <p>
                                <FormattedMessage id='stylistLocation' defaultMessage='stylistLocation'></FormattedMessage>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
