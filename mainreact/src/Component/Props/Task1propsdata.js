import React from 'react';

const Task1propsdata = (data) => {
    return (


        <div className='col-4  '>

            <div className='text-center ' style={{
                boxShadow: "5px 10px 8px #888888"

            }}  >
                <div className="card  m-3 " >
                    <div className="card-body ">
                        <h5 className="card-title">albumId: {data.alldata.albumId}</h5>
                        <h5 className="card-title">id: {data.alldata.id}</h5>
                        <h5 className="card-title">title: {data.alldata.title}</h5>
                        {/* <p ></p> */}
                        <img src={data.alldata.url} className='w-50 mx-auto' alt="" /><br />
                        <img src={data.alldata.thumbnailUrl} className='w-50 mx-auto' alt="" /><br />
                        <a href="#" className="btn btn-outline-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Task1propsdata;
