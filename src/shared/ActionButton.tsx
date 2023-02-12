import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";
import React from "react";


type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
    className="rounded-md text-white bg-secondary-500 px-10 py-2  hover:bg-primary-500 hover:text-white" onClick={() => setSelectedPage(SelectedPage.Contacts)}
    href={`#${SelectedPage.Contacts}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton