import React from 'react'
import Header from './main/Header'
import Middle from './main/Middle'
import Activity from './main/Activity'
import Footer from './main/footer';

const Main = () => {
    return (
        <div className='grid grid-rows-[8%_7%_80%_5%]  '>
            <div className='border-b border-gray-300'>
                <Header />
            </div>
            <div className='border-b border-gray-300'>
                <Middle />
            </div>
            <Activity />
            <div className='border-b border-gray-300'>
                <Footer />
            </div>
        </div>

    )
}

export default Main