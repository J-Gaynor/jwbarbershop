"use client";
import Image from 'next/image';
import Footer from '@/components/Footer';

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
                                Shop Manager
                            </b>
                            <br/>
                            <b>
                                Hiro Moritaka
                            </b>
                            <p>
                                📍 Nara
                            </p>
                            <p>
                                'Welcoming customers with the best smile, and making them smile with the best haircut.'
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
                                Stylist
                            </b>
                            <br/>
                            <b>
                                Naoto Shirakawa
                            </b>
                            <br/>
                            <p>
                                📍 Hyogo
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
