"use client"

function Searchbar() {
    const handlesubmit=()=>{
    
    }
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handlesubmit}>
        <input 
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
        />
        <button className="searchbar-btn">Search</button>

    </form>
  )
}

export default Searchbar
