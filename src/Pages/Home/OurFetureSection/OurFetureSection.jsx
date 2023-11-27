import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const OurFetureSection = () => {
    return (
       <div className="mt-44">
         <SectionTitle subHeading='stay with us' heading='Our Features'></SectionTitle>
        <div className=' my-16 md:w-94 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
            
            {/* card one  */}
            <div className="card bg-base-100 border-4 border-purple-400 shadow-xl text-center">
                <figure><img className='w-32' src='https://i.ibb.co/BPdN51y/2203124.png' alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto text-2xl font-bold">
                    Super Fast Delivery
                    </h2>
                    <blockquote>Revolutionize your shopping with our Super Fast Delivery—swift, reliable, and instant gratification. Experience the thrill of lightning-fast service as we bring your orders to your doorstep in record time!</blockquote>

                   </div>
            </div>
            {/* card two  */}
            <div className="card bg-base-100 border-4 border-purple-400 shadow-xl text-center">
                <figure><img className='w-32' src='https://i.ibb.co/sRdD4qj/3313293-200.png' alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto text-2xl font-bold">
                    Parcel Safety
                    </h2>
                    <blockquote>At Delivery Tiger, your parcels safety is our top priority. We employ state-of-the-art security measures, meticulous handling, and real-time tracking to ensure your packages arrive securely and on time!</blockquote>

                   </div>
            </div>
            {/* card three  */}
            <div className="card bg-base-100 shadow-2xl border-4 border-purple-400 text-center">
                <figure><img className='w-32' src='https://i.ibb.co/7bK3LXc/3757397.png' alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto text-2xl font-bold">
                    Certification
                    </h2>
                    <blockquote>Trust with confidence! Our certifications signify our commitment to excellence. Delivery Tiger is certified, ensuring reliability, quality, and adherence to industry standards, guaranteeing a secure and trustworthy service for you.!</blockquote>

                   </div>
            </div>
        </div>
       </div>
    );
};

export default OurFetureSection;