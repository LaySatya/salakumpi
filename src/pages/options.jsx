import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Options() {
    const navigate = useNavigate();

    // Function to handle click and navigate
    const handleOptionClick = (type) => {
      navigate(`/questions/${type}`);
    };
    return (
        <>
            <div className='w-screen h-screen bg-gray-800'>
                <div className="navbar">
                    <div className="flex-1">
                        <Link to={"/"}>
                            <a className="btn btn-primary btn-md text-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                </svg>
                                ត្រឡប់
                            </a>
                        </Link>
                    </div>
                    <div className="flex gap-2">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/476226445_647715824286098_4533025413894353029_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFPOGkYBu1p-qYnipQSR-2SLJX1srK55FEslfWysrnkUaRVAD1iT_DzRbWLfO2R-ZV6B2huWxBtp6ourRH8wxAu&_nc_ohc=gM0Ju9Rmt48Q7kNvgGQkhLf&_nc_oc=AdnlT5ykNgJzjgCMHHytamJquuLuMpufAkAJqx9ZReGGbAcfRobNUJraDNDhi9YRW2M&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&_nc_gid=MJZen4jwfAdEnqM1XPgZig&oh=00_AYEnPaWYDo6F9_yx6FxihGD8iEUv5-J-mTFPkAY3MgGS_A&oe=67E8093D" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col">
                    <div className="card rounded-box grid h-20 place-items-center text-white">
                        <h3 className='text-2xl md:m-10 m-5'>
                            សូមស្វាគមន៍មកកាន់ការឆ្លើយសំណួរ
                            សូមរើសជម្រើសដែលអ្នកចង់ឆ្លើយ ✝️
                        </h3>
                    </div>
                    <div className="card rounded-box grid h-20 place-items-center mt-16">
                        <ul className="menu menu-xl text-white md:w-56 w-11/12 bg-gray-700 rounded-box">
                            <li><a onClick={() => handleOptionClick(1)}>អេសរ៉ា</a></li>
                            <hr />
                            <li><a onClick={() => handleOptionClick(2)}>នេហេមា</a></li>
                            <hr />
                            <li><a onClick={() => handleOptionClick(3)}>អេសធ័រ</a></li>
                            <hr />
                            <li><a onClick={() => handleOptionClick(4)}>កិច្ចការ</a></li>
                            <hr />
                            <li><a onClick={() => handleOptionClick(0)}>ទាំងអស់</a></li> {/* 0 means show all */}
                        </ul>
                </div>
            </div>
        </div >
        </>
    )
}

export default Options