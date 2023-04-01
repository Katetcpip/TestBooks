
const Buttons1 = () =>{
    return(
        <div className="flex flex-col w-fit border border-dashed border-indigo-500 p-6 rounded-md mt-4">
            <div className="p-2 border border-solid border-black rounded-md px-10 font-semibold mb-2 hover:scale-110 duration-500">В корзину</div>
            <div className="p-2 rounded-md px-10 font-semibold bg-red-800 text-white mb-2 hover:opacity-75 duration-500">В корзину</div>
            <div className="p-2 rounded-md px-10 font-semibold bg-black text-white mb-2 hover:translate-y-1 duration-500">В корзину</div>
            <div className="p-2 rounded-md px-10 font-semibold mb-2 bg-slate-300 text-slate-400 hover:skew-x-6 duration-500">В корзину</div>
        </div>
    )
}
export default Buttons1;