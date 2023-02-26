import { SelectedPage } from "@/shared/types"
import Logo from '@/assets/logo.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer className="bg-primary-100 py-16 ">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img src={Logo} alt="Logo" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, assumenda? Nam nesciunt hic enim temporibus dolores velit facere quas officia sequi et!
            </p>
        </div>
        <div>

        </div>
        <div>

        </div>
        </div>
    </footer>
  )
}

export default Footer