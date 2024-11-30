"use client";
import Image from 'next/image';
import Footer from '@/components/Footer';
import { FormattedMessage } from 'react-intl';

export default function Info() {
    return (
        <div>
            <main className="">
                <div className='grid md:grid-cols-2 w-10/12 justify-between mx-auto'>
                    <div className='flex'>
                        <h2 className='mx-auto content-center text-center page-title'>
                            <FormattedMessage id='menu' defaultMessage='menu'></FormattedMessage>
                        </h2>
                    </div>
                    <div className='w-full my-10 text-end'>
                        <table className='mx-auto'>
                            <tbody>
                                <tr>
                                    <td className='text-start'>
                                        <FormattedMessage id='standard' defaultMessage='standard'></FormattedMessage>
                                    </td>
                                    <td className='text-end'>¥6000</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        <FormattedMessage id='cutShave' defaultMessage='cutShave'></FormattedMessage>
                                    </td>
                                    <td className='text-end'>¥5000</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        <FormattedMessage id='cutShampoo' defaultMessage='cutShampoo'></FormattedMessage>
                                    </td>
                                    <td className='text-end'>¥4500</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        <FormattedMessage id='cut' defaultMessage='cut'></FormattedMessage>
                                    </td>
                                    <td className='text-end'>¥4000</td>
                                </tr>
                                <tr className='h-4'></tr>
                                <tr>
                                    <td className='text-start'>
                                        <FormattedMessage id='perm' defaultMessage='perm'></FormattedMessage>
                                    </td>
                                    <td className='text-end'>¥10000</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        <FormattedMessage id='colouring' defaultMessage='colouring'></FormattedMessage>
                                    </td>
                                    <td className='text-end'>¥9000</td>
                                </tr>
                                <tr className='h-4'></tr>
                                <tr>
                                    <td className='text-start'>
                                        <FormattedMessage id='shampoo' defaultMessage='shampoo'></FormattedMessage>
                                    </td>
                                    <td className='text-end'>¥2500</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        <FormattedMessage id='shave' defaultMessage='shave'></FormattedMessage>
                                    </td>
                                    <td className='text-end'>¥2500</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        <FormattedMessage id='shaveShampoo' defaultMessage='shaveShampoo'></FormattedMessage>
                                    </td>
                                    <td className='text-end'>¥3500</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        <FormattedMessage id='ladiesShave' defaultMessage='ladiesShave'></FormattedMessage>
                                    </td>
                                    <td className='text-end'>¥3500</td>
                                </tr>
                                <tr className='h-4'></tr>
                                <tr>
                                    <td className='text-start'>
                                        <FormattedMessage id='grey' defaultMessage='grey'></FormattedMessage>
                                    </td>
                                    <td className='text-end'>¥2000</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        <FormattedMessage id='headSpa' defaultMessage='headSpa'></FormattedMessage>
                                    </td>
                                    <td className='text-end'>¥2000</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        <FormattedMessage id='faceMassage' defaultMessage='faceMassage'></FormattedMessage>
                                    </td>
                                    <td className='text-end'>¥1500</td>
                                </tr>
                                <tr>
                                    <td className='text-start'>
                                        <FormattedMessage id='noseWax' defaultMessage='noseWax'></FormattedMessage>
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
