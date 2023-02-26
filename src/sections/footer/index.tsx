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
            <p className="my-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, assumenda? Nam nesciunt hic enim temporibus dolores velit facere quas officia sequi et!
            </p>
            <p>
            Yusuf Fikri © 2022 All Rights Reserved
            </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Lorem ipsum dolor sit amet.</p>
            <p className="my-5">Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum.</p>
        </div>
        <div>
        <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">lortem alakazam biuw.</p>
            <p className="my-5">(333)234-3552</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer