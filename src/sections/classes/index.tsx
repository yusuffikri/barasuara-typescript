import { SelectedPage } from '@/shared/types';
import Image1  from '@/assets/image1.png';
import Image2  from '@/assets/image2.png';
import Image3  from '@/assets/image3.png';
import Image4  from '@/assets/image4.png';
import Image5  from '@/assets/image5.png';
import Image6  from '@/assets/image6.png';
import {motion } from 'framer-motion';
import HText from '@/shared/HText';



type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const Classes = ({setSelectedPage}: Props) => {
  return <section id="classes" className='w-full bg-primary-100 py-4'>
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}>
        <motion.div className='mx-auto w-5/6 '
        initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{ hidden: {opacity: 0, x:-50},
        visible: {opacity: 1, x: 0},
       }}>
        <div>
            <HText>
                Our Classes
            </HText>
        </div>
        </motion.div>
    </motion.div>
  </section>
}

export default Classes