import React, { useState } from 'react'
import { UPDATE_PASSWORD } from '../Graphql/Mutation'
import { useMutation } from '@apollo/client'

function UpdatePassword () {
  const [ username, setUserName ] = useState('')
  const [ oldPassword, setOldPassword  ] = useState('')
  const [ newPassword, setNewPassword ] = useState('')

  const [ updatePasswd ] = useMutation(UPDATE_PASSWORD)

  return (
    <div>
      <input type="text" placeholder="Username..." onChange={ (event) => {
	setUserName(event.target.value)
      } } />
      <input type="password" placeholder="Current password" onChange={ (event) => {
	setOldPassword(event.target.value)
      } } />
      <input type="password" placeholder="New password" onChange={ (event) => {
	setNewPassword(event.target.value)
      } } />

	<button onClick={ () => {
	  updatePasswd({
	    variables: {
	      username: username,
	      oldPassword: oldPassword,
	      newPassword: newPassword
	    }
	  })
	} }>Update password</button>
    </div>
  )
}

export default UpdatePassword
