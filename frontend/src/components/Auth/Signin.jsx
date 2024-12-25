import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { LoginUser } from './AuthAPI';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    const Login = async () => {
      try {
        const message = await LoginUser(formData);
        alert(message);
        navigate('/')
      } catch (error) {
        console.error('LOGIN ERROR ', error);
        alert('There is an error during login')
      }
    }
    Login();
    setFormData({ email: '', password: '' });
  };

  useEffect(()=>{
    if(user) navigate(-1);
  },[])


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="YourCompany"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSie-0GxrHebqQjWVXiovZul4TVGDYJHIA9EQ&s"
            className="mx-auto h-15 w-auto"
          />
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={submitHandler} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={formHandler}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={formHandler}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <NavLink to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Signup
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signin;
