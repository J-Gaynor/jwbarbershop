"use client";
import Footer from '@/components/Footer.js';

export default function Home() {
    return (
        <div>
            <main>
                <div className='w-10/12 mx-auto grid md:grid-cols-2'>
                    <div className='flex home-title'>
                        <h2 className='mx-auto content-center page-title'>
                            Values
                        </h2>
                    </div>
                    <div className='home-content'>
                        <ul className='text-center'>
                            <li>
                                Utilise traditional barbering techniques
                            </li>
                            <li>
                                Deliver excellence in cutting, shaving and washing
                            </li>
                            <li>
                                Put customers first with sophisticated and professional service
                            </li>
                            <li>
                                Be the best place for gents grooming
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
