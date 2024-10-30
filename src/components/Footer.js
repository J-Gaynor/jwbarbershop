import Image from 'next/image';

const Footer = () => {
    return(
        <footer className="grid grid-start-3 gap-3 flex-wrap items-center justify-center bg-yellow-950 bg-opacity-10 pt-5">
            <div className='flex gap-6 justify-center'>
                <a href="https://www.facebook.com/johnwayne.barber.7" target="_blank">
                    <Image
                        src='/images/fb.png'
                        width={32}
                        height={32}
                    />
                </a>
                <a href="https://www.instagram.com/barber_john_wayne" target="_blank" rel="noopener noreferrer">
                    <Image
                        src='/images/ig.png'
                        width={32}
                        height={32}
                        alt="Instagram"
                    />
                </a>
            </div>
            <div className='flex content-bottom'>
                <p className='text-xs'>Copyright (C) 2014-2024 HAIR DRESSING SHOJI</p>
            </div>
        </footer>
    )
}

export default Footer;
