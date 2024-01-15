import HomeImage from '../assets/HomeImage.jpg'
import { Link } from 'react-router-dom';

function Home() {

  return (
          
          <div className=' grid grid-cols-1 max-w-6xl mx-auto py-6 gap-y-4'>

              {/* home_top */}
              <div className=' grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 '>
                  
                  {/* document_card */}
                  <div className = ' bg-gray-100 p-6 shadow-lg space-y-3 rounded-2xl'>
                       
                       {/* home_image */}
                       <div className=" w-[225px] md:w-[300px] h-[200px] ">

                           <img src= { HomeImage } alt=" image " className='rounded-xl h-full' />
                           
                       </div>

                       {/* home_title */}
                       <div className=' space-y-4'>

                            <h2 className=' text-2xl font-bold' > ငှက် <span className=' text-base '> ( Bird ) </span> </h2> 
                            <div className=" flex justify-center items-center gap-10 ">

                                <p className=' text-base font-semibold leading-7'> ငှက်သည် အမွှေးအတောင်ရှိ၍ အတောင်ပံနှစ်ဖက်ရှိသော သွေးနွေးသတ္တဝါအမျိုးအစားတွင်ပါဝင်သည်။ </p>
                                <Link to='/document' className=' bg-black text-white p-2 px-3 rounded-full'> <i class="fa-solid fa-arrow-right-long"></i> </Link>     

                            </div>


                       </div>

                  </div>

                   {/* social_link */}
                   <div className=' flex justify-evenly items-center gap-6 md:gap-0 '>

                        {/* wiki */}
                        <a href='https://my.wikipedia.org/wiki/%E1%80%84%E1%80%BE%E1%80%80%E1%80%BA' target='_blank' className=' w-40 h-40 bg-gray-100 flex flex-col gap-4 justify-center items-center shadow-lg rounded-lg '> 

                             <div className=' w-12 h-12 flex justify-center items-center rounded-full bg-black text-white'> 
                                 <i class="fa-brands fa-wikipedia-w"></i>   
                             </div>
                             <p className=' text-base font-semibold '> Wikipedia </p>  
                              
                        </a>

                        <a href='https://web.facebook.com/bin.birdsinnature' target='_blank'  className=' w-40 h-40 bg-gray-100 flex flex-col gap-4 justify-center items-center shadow-lg rounded-lg ' > 
                        
                              <div className=" w-12 h-12 flex justify-center items-center rounded-full bg-black text-white ">
                                  <i class="fa-brands fa-facebook-f"></i> 
                              </div>
                              <p className=' text-base font-semibold '> Nature Lover </p>

                        </a>

                   </div>

              </div>

              {/* home_bottom */}
              <div className=' grid grid-cols-4 p-12 gap-12'>

                  <div className=" bg-gray-100 p-4 shadow-lg rounded-2xl space-y-3">

                      <p className=' text-3xl font-bold text-center'>၈၆၀၀</p>
                      <p className=' text-base font-semibold text-center '>ငှက်မျိုးစိတ်ပေါင်း</p>

                  </div>

                  <div className="bg-gray-100 p-4 shadow-lg rounded-2xl space-y-3">

                      <p className=' text-3xl font-bold text-center'>၁၆၀၀</p>
                      <p className=' text-base font-semibold text-center'>မျိုးစုပေါင်း </p>

                  </div>

                  <div className="bg-gray-100 p-4 shadow-lg rounded-2xl space-y-3">

                     <p className=' text-3xl font-bold text-center'>၁၅၅</p>
                     <p className=' text-base font-semibold text-center'>မျိုးရင်းပေါင်း </p>

                  </div>

                  <div className=" bg-gray-100 p-4 shadow-lg rounded-2xl space-y-3">

                      <p className=' text-3xl font-bold text-center'>၂၇</p>
                      <p className=' text-base font-semibold text-center'>မျိုးစဉ်ပေါင်း </p>

                  </div>

              </div>
          

          </div>
  )
}

export default Home;
