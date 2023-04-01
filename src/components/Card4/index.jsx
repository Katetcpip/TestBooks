import heart from './heart.png'
import "./styles.css"
import book from './Group 916.png'


const Card4 = () => {
    return(
        <div className="flex flex-col p-4 hover:bg-gray-100 rounded-md duration-300 bg-slate-100 ml-2 mb-4"> 
            <div className='w-full justify-end flex relative'>
                <img alt='' className='h-4 w-5 absolute -top-1 -right-2 hover:scale-110 z-20' src={heart}/>
            </div>
           <div className='w-full relative flex flex-col'>
                <img alt="" className='p-4 border border-sold border-gray-200 rounded-md hover:scale-90 duration-500 relative' src={book}/>    
            </div>
            <div className='w-full flex flex-row justify-start relative z-0'>
                <p className='font-semibold w-fit mt-1 mr-4 cursor-pointer'>Нет в продаже</p>      
            </div>
            <h1 className='font-thin text-md  cursor-pointer'>Пиковая Дама</h1>
            <h3 className='font-thin text-gray-500 text-sm  cursor-pointer'>Пушкин Александр</h3>
            <p className='font-thin text-gray-500 text-sm  cursor-pointer mb-10'>Лабиринт/Детская художес...</p>
            
            <button className='p-2 border border-solid border-black rounded-md mt-2 mb-3 font-semibold hover:bg-orange-400 hover:border-none hover:text-white'>В корзину</button>
            <p className='font-semibold text-green-600 text-sm'>Доставим бесплатно</p>
        </div>
    );
};

export default Card4;