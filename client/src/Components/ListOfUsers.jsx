import React from 'react'
import { GET_ALL_USERS } from '../Graphql/Queries'
import { useQuery } from '@apollo/client'

function ListOfUsers () {
  const { data } = useQuery(GET_ALL_USERS)

  return (
    <div>
      {data && data.getAllUsers.map((user) => {
        return (
          <div key={user.id}>{user.name} / {user.username}</div>
        )
      })}
    </div>
  )
}

export default ListOfUsers
