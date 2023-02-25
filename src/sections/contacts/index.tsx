import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contacts
 = ({setSelectedPage}: Props) => {
  return <section id="contacts" className="mx-auto w-5/6 pt-24 pb-32">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contacts
      )}>
        {/* Header */}
        <motion.div
        className="md:w-3/5" initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{ hidden: {opacity: 0, x:-50},
        visible: {opacity: 1, x: 0},
       }}>
        <HText>
          <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
        </HText>
        <p className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia repellat error commodi deserunt amet, exercitationem vel, velit incidunt aliquid totam libero eius corrupti beatae voluptatum.</p>

        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div className="mt-10 basis-3/5 md:mt-0" initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{ hidden: {opacity: 0, y:50},
        visible: {opacity: 1, y: 0},
       }}>
            <form target="_blank" onSubmit={onSubmit}></form>
          </motion.div>
        </div>

    </motion.div>
  </section>
}

export default Contacts
