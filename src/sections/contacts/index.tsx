import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic"


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contacts
 = ({setSelectedPage}: Props) => {
  return (
    <div>Contacts
    </div>
  )
}

export default Contacts
