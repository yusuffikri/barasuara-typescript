type Props = {
    name: string;
    description?: string;
    image: string;
}

const Class = ({ name, description = "some description", image }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white group`;

    return <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
            <p className="opacity-0 transition duration-700 group-hover:opacity-90 ">{name}</p>
            <p className="opacity-0 transition duration-900 group-hover:opacity-90 ">{description}</p>
            <img className="" src={image} alt={`${image}`} />
        </div>
    </li>
}

export default Class