import './styles.css';
import logo1 from './img/arBl.png'
import logo2 from './img/arWh.png'
import Card1 from '../../components/Card1';
import Card2 from '../../components/Card2';
import Card3 from '../../components/Card3';
import Card4 from '../../components/Card4';
import Buttons1 from '../../components/Buttons1';
import Buttons2 from '../../components/Buttons2';

function App() {
  return (
    <div className='w-full h-full bg-white flex flex-col 2xl:pl-56 2xl:pr-56 bg-slate-100 min-h-screen  md:pl-4 md:pr-4 lg:pl-4 md:pr-4 items-center'>
      <div className='flex flex-row 2xl:w-11/12 sm:w-full 2xl:pl-0 2xl:pr-0 pr-4 pl-4 pt-6 justify-between bg-slate-100'>
        <p className='font-semibold text-3xl'>Лучшее</p>
        <div className='flex flex-row gap-8'>
          <img alt=''className='h-6' src={logo2}></img>
          <img alt='' className='h-6' src={logo1}></img>
      </div>
    </div>
      <div className='flex flex-row flex-wrap justify-center items-center pt-10 w-full h-fit bg-slate-100 pb-10'>
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
        <Card1/>
        <Card1/>
      </div>
      <div className='flex flex-row flex-wrap justify-start bg-slate-100 p-10 2xl:justify-start justify-center gap-3'>
        <Buttons1/>
        <Buttons2/>
      </div>
    </div>
  );
}

export default App;
