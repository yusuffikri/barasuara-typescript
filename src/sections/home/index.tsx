import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/useMediaQuery';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedbull from '@/assets/SponsorRedbull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const index = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width=1060px");


  return <section id="home" className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
    {/* Image and Main Header */}
    <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6  '>
        {/* Main Header */}
        <div className='z-10 mt-32 md:basis-3/5'>
            {/* Heading */}
            <motion.div className='md:-mt-20' initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}}>
                <div className='relative'> 
                    <div className='before:absolute before:-top-20  before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                        <img src={HomePageText} alt="homepage-text" />
                    </div>
                </div>

                <p className='mt-8 text-sm'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At maxime fuga excepturi labore quia necessitatibus ex vitae? Quos, omnis quidem?
                </p>
            </motion.div>
            {/* Action Button */}
            <div className='mt-8 flex items-center gap-8'>
                <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                </ActionButton>
                <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500' onClick={() => setSelectedPage(SelectedPage.Contacts)} href={`#${SelectedPage.Contacts}`}>
                    <p>Learn More</p>
                </AnchorLink>
            </div>
        </div>
        {/* Images */}
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
            <img src={HomePageGraphic} alt="HomepageGraphic" />
        </div>
    </div>

    {/* Sponsor */}
    {isAboveMediumScreens && (
        <div className='h-[150px] w-full bg-primary-100 py-10 '>
            <div className='mx-auto w-5/6'>
                <div className='flex w-3/5 items-center justify-between gap-8'>
                    <img src={SponsorRedbull} alt="redbull" />
                    <img src={SponsorForbes} alt="forbess" />
                    <img src={SponsorFortune} alt="fortune" />
                </div>
            </div>
        </div>

    )}
  </section>
}

export default index