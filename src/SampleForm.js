import React from 'react'
import useForm from './useForm'

export default function SampleForm () {
  const [{ firstName, lastName, email, password, address }, values] = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: ''
  })
  return (
    <form onSubmit={ e => {
      e.preventDefault()
      console.log(values)
    }}>
      <h2>this is a sample form</h2>
      <div className='form-group'>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          className='form-control'
          placeholder='First Name'
          {...firstName}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          className='form-control'
          placeholder='Last Name'
          {...lastName}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-control'
          placeholder='Email'
          {...email}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Password'
          {...password}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='address'>Address</label>
        <input
          type='text'
          className='form-control'
          placeholder='Address'
          {...address}
        />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  )
}
