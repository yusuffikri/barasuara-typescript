import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";


type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink>
        {children}
    </AnchorLink>
  )
}