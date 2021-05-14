import React from 'react'
import { GET_ALL_USERS,  } from '../Graphql/Queries'
import { DELETE_USER } from '../Graphql/Mutation'
import { useMutation, useQuery } from '@apollo/client'

function ListOfUsers () {
  const { data } = useQuery(GET_ALL_USERS)
  const [ deleteUser ] = useMutation(DELETE_USER)

  const executeDelete = (id) => {
    deleteUser(id)
  }

  return (
    <div>
      {data && data.getAllUsers.map((user) => {
        return (
	  <div key={user.id}>
	    {user.name} / {user.username} 
	    <button onClick={
	      () => {executeDelete({ variables: { id: user.id } })}
	    }>Delete user</button>
	  </div>
        )
      })}
    </div>
  )
}

export default ListOfUsers
