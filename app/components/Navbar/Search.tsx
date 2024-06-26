"use client"
import UseCart from '@/hooks/useCart'


const Search = () => {
 const {search,setSearch} = UseCart()
  return (
    <div className='flex-1 hidden md:flex'>
      <input className='py-2 px-3 border-none outline-none flex flex-1 placeholder:"Search.....' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button className='p-2 bg-orange-800 text-sm border border-transparent'>Search</button>
      </div>
  )
}

export default Search