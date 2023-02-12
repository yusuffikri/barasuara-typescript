import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/useMediaQuery';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedbull from '@/assets/SponsorRedbull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const index = ({setSelectedPage}: Props) => {
  return <div>Home</div>
}

export default index