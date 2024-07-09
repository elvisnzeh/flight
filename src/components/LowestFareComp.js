import React,{useState} from 'react';
import { LOWEST_FARE_LIST } from './constants/Appconstants';
import ButtonYellow from './ButtonYellow';
import { Element } from 'react-scroll';
import { PaystackButton } from 'react-paystack'
import axios from 'axios'
import swal from 'sweetalert';



export default function LowestFareComp() {
  const publicKey = "pk_test_7d707c1a665d8b3e13b857ae3297db3d5ca14b77"
  // const amount = 1000000
  const [email, setEmail] = useState("elvis@gmail.com")
  const [name, setName] = useState("elvis")
  const [phone, setPhone] = useState("098977774444")
  const [amount, setAmount] = useState(300)
  const [flight,setFlight] = useState({})

  localStorage.setItem('flight',JSON.stringify(flight))

  const componentProps = {
    email: "elvis@gmail.com",
    amount : amount * 100,
    currency: "GHS" ,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      let flightData = localStorage.getItem('flight')
      let user = localStorage.getItem('userdetail')
      flightData =JSON.parse(flightData)
      user =JSON.parse(user)
      axios.post(`http://localhost:4000`,{...user,...flightData}).then(res=>{
        swal("Suucess", "Your Ticket is booked \n An email will be sent to you !", "success");
      })

      // console.log({...user,...flightData})
    },
    onClose: () => alert("Wait! Don't leave :("),

    
  }

  const handleFlight = async(heading,price)=>{
    setFlight({heading:heading,price:price})
    localStorage.setItem('flight',JSON.stringify(flight))
  }

  return (
    <Element className="relative h-[80%] px-20 py-20 bg-[#1a63a8]" id='flights'>
    <p className="text-sm text-center text-white">CURRENT FARE</p>
    <p className="text-3xl mt-1 text-center text-white">
      Today's Lowest Fare
    </p>
      <div className='flex  absolute bottom-[-100px] ml-[2%]'>
        {LOWEST_FARE_LIST.map((item,index)=> {
         
          return(
            <div key={`lowest-fare-${item.id}`} className='bg-white px-5 py-5 text-center mr-5 rounded-lg'>
              <img src={item.image} className='h-[150px] rounded-lg' />
              <p className='mt-2 font-semibold'> {item.heading}</p>
              <p className='text-sm'>
               <span className='text-gray 400'> starting from</span>{""}
                <spn className="text-red-400 font-semibold">$ {item.price}</spn>
              </p>
              <button type='submit' onClick={()=>handleFlight(item.heading,item.price)}>
              <PaystackButton {...componentProps} />
              </button>
              </div>
          )
        })}
      </div>
    </Element>
  )
}
