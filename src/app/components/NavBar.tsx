import Link from 'next/link';



const Navbar = () => {
  return (
    
     <div className='flex flex-auto  items-center '>
      
       <div className=' flex flex-auto justify-center gap-2'>
       <ul>
          <li >
            <Link href="/" className=''>Home</Link>
          </li>
          </ul>
       </div>
       <div className=' flex flex-auto justify-center gap-2'>
       <ul>
          <li >
            <Link href="/shop" className=''>Shop</Link>
          </li>
          </ul>
       </div>
       <div className=' flex flex-auto justify-center gap-2'>
       <ul >
          <li >
            <Link href="/blog" className=''>Blog</Link>
          </li>
          </ul>
       </div>
       <div className=' flex flex-auto justify-center gap-2'>
       <ul >
          <li >
            <Link href="/contact" className=''>Contact</Link>
          </li>
          </ul>
       </div>
          
          <div className='flex flex-auto justify-center'>
          <ul className=' flex  justify-center gap-4'>
          <li> 🏠</li>
          <li>🛍️ </li>
          <li> 📝</li>
          <li>📞</li>
          </ul>
          </div>
      
     </div>
      
  );
};

export default Navbar;
