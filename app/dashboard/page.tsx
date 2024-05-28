import Link from 'next/link';
 
function Dashboard() {
  return (
    <div className='flex justify-center items-center h-screen gap-4'>
        <h1>Select the Screen</h1>
        <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" href='/dashboard/desktop'>Desktop</a>
        <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" href='/dashboard/mobile'>Mobile</a>
    </div>
  )
}

export default Dashboard