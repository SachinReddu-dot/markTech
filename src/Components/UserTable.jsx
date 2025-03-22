import React, { useEffect, useState } from 'react'

const UserTable = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    const getUsername = async()=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?q=${search}`)
        const result = await response.json()
        setData(result)
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            getUsername()
        }, 300)
        return () => clearTimeout(timer)
    }, [search])


  return (
    <>
    
    <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-6 text-center">User Information</h1>
        <div className='w-full flex justify-center my-5'>
            <input onChange={(e)=> setSearch(e.target.value)} value={search} placeholder='Search by Username' className='capitalize w-1/2 p-3 bg-zinc-800 rounded-xl outline-none max-sm:w-full' type='text'/>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto overflow-hidden rounded-xl">
                <thead>
                    <tr className="bg-zinc-800 text-white">
                        <th className="py-3 px-4 text-left">Name</th>
                        <th className="py-3 px-4 text-left">Username</th>
                        <th className="py-3 px-4 text-left">Email</th>
                        <th className="py-3 px-4 text-left">Phone No</th>
                        <th className="py-3 px-4 text-left">Website</th>
                        <th className="py-3 px-4 text-left">Address</th>
                    </tr>
                </thead>
                {data?.map((data)=>(
                    <tbody key={data.id}>
                        <tr className="border-t bg-zinc-800">
                            <td className="py-3 px-4">{data.name}</td>
                            <td className="py-3 px-4">{data.username}</td>
                            <td className="py-3 px-4">{data.email}</td>
                            <td className="py-3 px-4">{data.phone}</td>
                            <td className="py-3 px-4"><a href={data.website} className="text-blue-500 hover:underline">{data.website}</a></td>
                            <td className="py-3 px-4">{data.address.street}, {data.address.city}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    </div>
    </>
  )
}

export default UserTable