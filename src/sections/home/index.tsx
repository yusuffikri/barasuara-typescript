import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/useMediaQuery';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedbull from '@/assets/SponsorRedbull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const index = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width=1060px");


  return <section id="home" className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
    {/* Image and Main Header */}
    <div>
        {/* Main Header */}
        <div>
            {/* Heading */}
            <div>
                <div>
                    <div>
                        <img src={HomePageText} alt="homepage-text" />
                    </div>
                </div>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At maxime fuga excepturi labore quia necessitatibus ex vitae? Quos, omnis quidem?
                </p>
            </div>
            {/* Action Button */}
            <div>
                <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                </ActionButton>
                <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500' onClick={() => setSelectedPage(SelectedPage.Contacts)} href={`#${SelectedPage.Contacts}`}>
                    <p>Learn More</p>
                </AnchorLink>
            </div>
        </div>
        {/* Images */}
        <div>
            <img src={HomePageGraphic} alt="HomepageGraphic" />
        </div>
    </div>

    {/* Sponsor */}
  </section>
}

export default index