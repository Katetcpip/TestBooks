import book from './book.png'
import star from './star.png'
import heart from './heart.png'
import com from './com.png'
import present from './present.png'
import "./styles.css"
import arr from './arrow-rotate-left-01.png'

const Card1 = () => {
    return(
        <div className="flex flex-col p-4 hover:bg-gray-100 rounded-md duration-300 bg-slate-100 mb-4"> 
            <div className='w-full justify-end flex relative'>
                <img alt='' className='h-4 w-5 absolute -top-1 -right-2 hover:scale-110 z-20' src={heart}/>
            </div>
           <div className='w-full relative flex flex-col'>
                <img alt="" className='p-4 border border-sold border-gray-200 rounded-md hover:scale-90 duration-500 relative' src={book}/>
                <div className='p-2 bg-orange-400 rounded-2xl w-fit absolute bottom-10 ml-2 hover:bg-orange-600 hover:scale-110'><img alt='' className=' w-5 h-5' src={present}/></div>
                <div className='p-1 bg-black font-semibold text-white w-3/4 text-md rounded-tr-lg rounded-bl-lg absolute bottom-0'>-55% еще 2 дня</div>
            </div>
            <div className='w-full flex flex-row justify-start relative z-0'>
                <p className='font-semibold w-fit mt-1 mr-4 cursor-pointer'>1350 ₽</p>
                <p className='font-thin text-gray-500 mt-1 del w-fit text-center cursor-pointer'>500 ₽</p>
                <img alt='' className='w-6 h-6 ml-10 mt-1 right-0 absolute' src={arr}/>
            </div>
            <p className='font-thin text-gray-500 text-sm  cursor-pointer'>за 2 тома</p>
            <h1 className='font-thin text-md  cursor-pointer'>Пиковая Дама</h1>
            <h3 className='font-thin text-gray-500 text-sm  cursor-pointer'>Пушкин Александр</h3>
            <p className='font-thin text-gray-500 text-sm  cursor-pointer'>Лабиринт/Детская художес...</p>
            <div className='flex flex-row gap-2 w-full justify-start items-center mt-2'>
                <img alt='' src={star} className='w-4 h-4'/>
                <p className='font-thin text-gray-800 text-sm  cursor-pointer'>4,8</p>
                <img alt='' src={com} className='w-4 h-4 mt-1'/>
                <p className='font-thin text-gray-800 text-sm cursor-pointer'>1234</p>
            </div>
            <button className='p-2 border border-solid border-black rounded-md mt-2 mb-1 font-semibold hover:bg-orange-400 hover:border-none hover:text-white'>В корзину</button>
            <p className='font-semibold text-green-600 text-sm'>Доставим бесплатно</p>
        </div>
    );
};

export default Card1;