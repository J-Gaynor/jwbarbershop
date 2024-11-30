"use client";
import Footer from '@/components/Footer';

export default function Info() {
    return (
        <div>
            <main className="">
                <div className='grid md:grid-cols-2 w-10/12 justify-between mx-auto'>
                    <div className='flex'>
                        <h2 className='mx-auto content-center text-center page-title'>What we offer</h2>
                    </div>
                    <div className='w-full my-10 text-end'>
                        <table className='mx-auto'>
                            <tbody>
                                <tr>
                                    <td className='text-start'>
                                        Standard (Cut, Shave & Shampoo)
                                    </td>
                                    <td className='text-end'>¥6000</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        Cut & Shave
                                    </td>
                                    <td className='text-end'>¥5000</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        Cut & Shampoo
                                    </td>
                                    <td className='text-end'>¥4500</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        Cut Only
                                    </td>
                                    <td className='text-end'>¥4000</td>
                                </tr>
                                <tr className='h-4'></tr>
                                <tr>
                                    <td className='text-start'>
                                        Perm (Cut & Shave Included)
                                    </td>
                                    <td className='text-end'>¥10000</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        Colouring (Cut & Shampoo Included)
                                    </td>
                                    <td className='text-end'>¥9000</td>
                                </tr>
                                <tr className='h-4'></tr>
                                <tr>
                                    <td className='text-start'>
                                        Shampoo Set
                                    </td>
                                    <td className='text-end'>¥2500</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        Shave Only
                                    </td>
                                    <td className='text-end'>¥2500</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        Shave & Shampoo
                                    </td>
                                    <td className='text-end'>¥3500</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        Ladies' Shave
                                    </td>
                                    <td className='text-end'>¥3500</td>
                                </tr>
                                <tr className='h-4'></tr>
                                <tr>
                                    <td className='text-start'>
                                        Anti-Grey
                                    </td>
                                    <td className='text-end'>¥2000</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        Head Spa
                                    </td>
                                    <td className='text-end'>¥2000</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        Face Massage
                                    </td>
                                    <td className='text-end'>¥1500</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        Nose Wax
                                    </td>
                                    <td className='text-end'>¥500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
