import { useState } from "react"
import { Card } from "../../Components/Card"
import Layout from "../../Components/Layout"
import { useEffect } from "react"


function Home() { 
    const [items, setitems] = useState()

   useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response=> response.json())
    .then(data => setitems(data))
   },[])
  return (
    <Layout>
      Home 
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
       { 
        items?.map(item=>(
      <Card key={item.id} data={item}/>
        ))
       }
      </div>
    </Layout>
  )
}

export default Home