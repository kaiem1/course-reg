import PropTypes from 'prop-types';
import { FaBookOpen } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";




const CourseCard = ({ blog }) => {
    const {title, cover, description, price, credit} = blog;
    return (
       
        <div className='w-15 border-solid border-2 border-indigo-600 gap-2 bg-slate-100	p-3 rounded-lg'>
            <img src={cover} alt="" />
            <h2 className="text-xl font-bold">{title}</h2>
            <p> {description} </p>
            <div className='flex justify-between gap-y-5 mt-4'>
                <div>
                    <button><BsCurrencyDollar />
                    </button>
                    Price: {price}
                </div>
                <div >
                    <button className='gap-10 pt-1 text-xl'><FaBookOpen />
                    </button>  <span className=''> Credit: {credit}</span>
                </div>
            </div>
            <div className='text-center mt-5'>
                <button className='px-28 py-3 rounded-lg text-white bg-sky-600 gap-y-5'>Select</button>
            </div>
        </div>
    );
};

CourseCard.propTypes = {
    blog: PropTypes.object.isRequired
};

export default CourseCard;