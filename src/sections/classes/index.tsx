import { SelectedPage } from '@/shared/types';
import image1  from '@/assets/image1.png';
import image2  from '@/assets/image2.png';
import image3  from '@/assets/image3.png';
import image4  from '@/assets/image4.png';
import image5  from '@/assets/image5.png';
import image6  from '@/assets/image6.png';
import {motion } from 'framer-motion';
import HText from '@/shared/HText';

const ourclass: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque ratione laborum a reprehenderit nam architecto doloremque molestiae. Fugit, odio aliquid accusamus iure modi quas.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque ratione laborum a reprehenderit nam architecto doloremque molestiae. Fugit, odio aliquid accusamus iure modi quas.",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque ratione laborum a reprehenderit nam architecto doloremque molestiae. Fugit, odio aliquid accusamus iure modi quas.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque ratione laborum a reprehenderit nam architecto doloremque molestiae. Fugit, odio aliquid accusamus iure modi quas.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque ratione laborum a reprehenderit nam architecto doloremque molestiae. Fugit, odio aliquid accusamus iure modi quas.",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque ratione laborum a reprehenderit nam architecto doloremque molestiae. Fugit, odio aliquid accusamus iure modi quas.",
        image: image6,
    },
]


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
        <div className='md:w-3/5'>
            <HText>
                OUR CLASSES
            </HText>
            <p className='py-5'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quidem? Cum nisi atque modi asperiores quisquam voluptatibus quibusdam? Illo qui itaque amet porro laudantium, aperiam odio maiores ab nemo consequatur?
            </p>
        </div>
        </motion.div>
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap'>
                {ourclass.map((item, index,) => (
                    <Class/> 
                ))}
            </ul>
        </div>
    </motion.div>
  </section>
}

export default Classes