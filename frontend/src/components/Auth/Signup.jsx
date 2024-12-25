import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RegisterUser } from './AuthAPI';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const [formData, setFormData] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    avatar: null
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    setNewUser({...newUser, [name]: value });
  };

  const avatarHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewUser({ ...newUser, avatar: file });
    }
  };


  const submitHandler = (e) => {
    e.preventDefault();
    const newFormData = new FormData();

    newFormData.append('name', newUser.name);
    newFormData.append('email', newUser.email);
    newFormData.append('password', newUser.password);
    newFormData.append('avatar', newUser.avatar);
    setFormData(newFormData);
    setNewUser({ name: '',  email: '', password: '',  avatar: null });
  };

  useEffect(() => {
    if(formData){
      const createUser = async () => {
        try {
          const message = await RegisterUser(formData);
          alert(message);
          navigate('/signin')
        } catch (error) {
          console.error('REGISTERATION ERROR ', error);
          alert('There is an error during user registeration');
        }
      }
      createUser();
    }
  },[formData]);

  useEffect(()=>{
    if(user) navigate(-1);
  },[])

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSie-0GxrHebqQjWVXiovZul4TVGDYJHIA9EQ&s"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-5 text-center text-2xl font-bold tracking-tight text-gray-900">
            Sign up for a new account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={submitHandler} method='POST' className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={newUser.name}
                  onChange={formHandler}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

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
                  value={newUser.email}
                  onChange={formHandler}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={newUser.password}
                  onChange={formHandler}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="avatar" className="block text-sm font-medium text-gray-900">
                Avatar
              </label>
              <div className="mt-2">
                <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  accept="image/jpeg"
                  onChange={avatarHandler}
                  className="block w-full text-sm text-gray-900 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:bg-white file:text-gray-900 file:hover:bg-gray-50 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <NavLink to="/signin" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign in here
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}


export default Signup;