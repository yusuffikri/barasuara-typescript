import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";


const benefits: Array<BenefitType> = [
  {
    icon : <HomeModernIcon className="h-6 w-6 "/>,
    title : "State of the Art Facilities",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, minus!",
  },
  {
    icon : <UserGroupIcon className="h-6 w-6 "/>,
    title : "100's of Diverse Classes",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, minus!",
  },
  {
    icon : <AcademicCapIcon className="h-6 w-6 "/>,
    title : "Experts and Pro Trainers",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, minus!",
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 ">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
       {/* Header */}
        <motion.div className="md:my-5 md:w-3/5"
        initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{ hidden: {opacity: 0, x:-50},
        visible: {opacity: 1, x: 0},
       }}>
            <HText>MORE THAN JUST A GYM.</HText>
            <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam tempora corrupti quaerat dolor cumque voluptatibus sed, molestiae similique id fugit libero hic magni aliquid nesciunt ex alias debitis corporis.</p> 
        </motion.div>

            {/* Benefits */}
            <motion.div className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5}} variants={container}>
              {benefits.map((benefit:BenefitType) => (<Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage}/>))}
            </motion.div>
          
       {/* Graphic And Description */}
       <div>
        {/* Graphic */}
        <img src="" alt="" />

        {/* Description */}
        <div>
          {/* Title */}
        <div className="relative">
          <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
            <div>
              <HText>
                MILLIONS OF HAPPY MEMBER GETTING {""} 
                <span className="text-primary-500">FIT</span>
              </HText>
            </div>

          </div>
        </div>
          {/* Descript */}

          {/* Button */}

        </div>
       </div>

    </motion.div> 
  </section>
}

export default Benefits