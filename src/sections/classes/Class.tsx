type Props = {
    name: string;
    description?: string;
    image: string;
}

const Class = ({ name, description = "some description", image }: Props) => {
    const overlayStyles = `p-5 absolute top-0 z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 bg-opacity-0 text-center text-white group-hover:bg-opacity-60`;

    return <li className="group relative mx-5 inline-block h-[380px] w-[450px]">
        <img className="" src={image} alt={`${image}`} />
        <div className={overlayStyles}>
            <p className="opacity-0 transition mb-5 font-bold duration-900  group-hover:opacity-100">{name}</p>
            <p className="opacity-0 transition duration-900 group-hover:opacity-100 ">{description}</p>
        </div>
    </li>
}