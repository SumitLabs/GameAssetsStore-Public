import './search.css'

const Search = () => {
  return (
    <section className="search">
      <div className="search_bar">
       <form action="" method="get" className='flex_box align_center'>
        <input type="search" name="" className='round' placeholder='Search Assets...'/>
        <input type="button" value="Search" className='round'/>
       </form>
      </div>
    </section>
  )
}

export default Search