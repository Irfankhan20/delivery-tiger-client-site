
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-3xl uppercase border-y-4 border-purple-300 py-4">{heading}</h3>
            <p className="text-[#5b4d91] mb-2">---{subHeading}---</p>
        </div>
    );
};

export default SectionTitle;