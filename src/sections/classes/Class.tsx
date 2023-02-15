

type Props = {
    name: string;
    description? : string;
    image: string;
}

const Class = ({name, description = "some description", image}: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;
  
    return <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
            <p>{name}</p>
            <p>{description}</p>
            <img src={image} alt={`${image}`} />
        </div>
    </li>
}

export default Class