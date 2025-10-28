import React , {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [email , setEmail] = useState("");
  const [password ,setPassword] = useState("");
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);


const handleSignup = (e) => {
  e.preventDefault();
  alert(`Signing up  with email: ${email} and password: ${password}`);
  navigate('/homepage');
}

 useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000 );

  return () => clearTimeout(timer);
}, []);


 return (
    <div className='flex flex-col items-center  h-screen bg-black'>

 {showPopup && (
        <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Tip!</h3>
            <p className="text-gray-700 mb-6">
              For now, just click the 'Sign Up' button. No worries about entering an email or password!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="text-white bg-red-600 w-full font-semibold rounded-lg py-3 text-lg shadow-lg hover:bg-red-700 transition duration-200"
            >
              Got it!
            </button>
          </div>
        </div>
      )}



<h1 className='text-white text-7xl font-bold text-center mt-20 '>Sign Up</h1> <br />
  <p className='text-white text-2xl font-light text-center '> Already have an account? </p>  

  <button 
  onClick ={() => navigate ('/login')}
  className= 'text-white bg-red-600 w-52 font-semibold rounded-lg py-3 mt-8 text-xl shadow-lg hover:bg-red-700 transition duration-200'
  >
    Log In 
    
  </button>

  <form onSubmit={ handleSignup} className='flex flex-col space-y-4 mt-8'>
    <input type="email"
    placeholder ="Email"
    value ={email}
    onChange = {(e) => setEmail (e.target.value)}
    className='w-80   px-3 py-3 rounded-lg text-white text-xl placeholder-gray-400 bg-gray-900 border border-gray-700 shadow-lg  focus:outline-none focus:ring-2 focus:ring-gray-800
' /> 

     
    <input type="password" 
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className='w-80 px-3 py-3 rounded-lg text-white text-xl placeholder-gray-400 bg-gray-900 border border-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-800
'/>

    
    
    <button
    type ="submit"
    className='text-white bg-red-600 w-80 font-semibold rounded-lg py-3  text-xl shadow-lg hover:bg-red-700 transition duration-200'
     >
      Sign Up
    </button>
    </form>

    <p className='text-white text-lg font-light text-center mt-4'>
      By signing up you agree to the Terms Of Service and <br /> Privacy Policy
    </p>

    </div>
  )
}

export default Signup
