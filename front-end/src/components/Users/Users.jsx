import React from 'react'

export function Users() {
  return (
    <div className="users">
      users
    </div>
  )
}
export function Login() {
  return (
    <div className="login w-full pt-8 flex flex-col items-center pb-6">
    <h1 className='font-bold text-2xl pb-6'>Login</h1>
    <form action="">
      <div className="email flex gap-x-6 items-center text-gray-700 mb-4">
        <label className='w-28'>Email</label>
        <input className="py-2 px-2 placeholder:text-gray-300 border border-gray-300 rounded-sm" placeholder='FouleFouleni@gmail.com' type="text" />
      </div>
      <div className="password flex gap-x-6 items-center text-gray-700">
        <label className='w-28'>Mot de passe</label>
        <input className="py-2 px-2 placeholder:text-gray-300 border border-gray-300 rounded-sm" placeholder='Votre mot de passe' type="password" />
      </div>
      <a href="/user/dashboard" className='my-4 text-center w-full bg-blue-600 text-white py-2 rounded-sm inline-block'>Login</a>
      <p className="flex gap-x-2 justify-end">Already have an accout?<a href="/user/login" className="text-blue-600">Login</a></p>
    </form>
  </div>

  )
}
export function Register() {
  return (
    <div className="register w-full pt-8 flex flex-col items-center pb-6">
      <h1 className='font-bold text-2xl pb-6'>Register</h1>
      <form action="">
        <div className="name flex gap-x-6 items-center text-gray-700 mb-4">
          <label className='w-28'>Votre Nom</label>
          <input className="py-2 px-2 placeholder:text-gray-300 border border-gray-300 rounded-sm" placeholder='FouleFouleni' type="text" />
        </div>
        <div className="email flex gap-x-6 items-center text-gray-700 mb-4">
          <label className='w-28'>Email</label>
          <input className="py-2 px-2 placeholder:text-gray-300 border border-gray-300 rounded-sm" placeholder='FouleFouleni@gmail.com' type="text" />
        </div>
        <div className="password flex gap-x-6 items-center text-gray-700">
          <label className='w-28'>Mot de passe</label>
          <input className="py-2 px-2 placeholder:text-gray-300 border border-gray-300 rounded-sm" placeholder='Votre mot de passe' type="password" />
        </div>
        <a href="/user/dashboard" className='my-4 text-center w-full bg-blue-600 text-white py-2 rounded-sm inline-block'>Register</a>
        <p className="flex gap-x-2 justify-end">Already have an accout?<a href="/user/login" className="text-blue-600">Login</a></p>
      </form>
    </div>
  )
}
