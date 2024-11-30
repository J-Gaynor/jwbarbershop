"use client";
import Footer from '@/components/Footer';

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
                                    Tel. & Fax:
                                </b>
                            </li>
                            <li>
                                06-6252-7338
                            </li>
                            <li>
                                <b>
                                    Location:
                                </b>
                            </li>
                            <li>
                                <a href='https://maps.app.goo.gl/xMQK3vHvQkRJB47F7' target='_blank'>
                                    Oe Building 1F, 1-6-18 Higashi-Shinsaibashi, Chuo Ward, Osaka City
                                </a>
                            </li>
                            <br/>
                            <li>
                                <b>
                                    Opening Hours:
                                </b>
                            </li>
                            <ul>
                                <li>
                                    Weekdays: 10:00-20:00
                                </li>
                                <li>
                                    Weekends & Holidays: 09:00-19:00
                                </li>
                            </ul>
                            <li>
                                <b>
                                    Closed:
                                </b>
                            </li>
                            <ul>
                                <li>
                                    Monday
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
