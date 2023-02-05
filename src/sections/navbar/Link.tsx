import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
}

const Link = ({
    page,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "")

  return <AnchorLink
  className={`#${selectedPage === lowerCasePage}`}
  href={`#${lowerCasePage}`}
  onClick={}
  >
    {page}
  </AnchorLink>
}

export default Link