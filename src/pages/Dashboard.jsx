
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

const Dashboard = () => {
  return (
    <div className='grid grid-rows-[8%_92%] h-screen'>
      <Navbar />
      <div className="bg-white grid grid-cols-[5%_95%]">
        <div className="border-r border-gray-300">
          <Sidebar />
        </div>
        <Main />
      </div>
    </div>
  )
}

export default Dashboard