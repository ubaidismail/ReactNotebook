import React from 'react'
export function Dashboard() {
    return (
        <div classNameName='content'>
            <div className="container d-flex justify-content-center pt-4">
                <div className="card p-3 mt-3">
                    <h5 className="mt-3 mb-3">Performance score</h5>

                    <div className="border p-2 rounded d-flex flex-row align-items-center">

                        <div className="p-1 px-4 d-flex flex-column align-items-center score rounded">
                            <span className="d-block char text-success">A</span>
                            <span className="text-success">98%</span>
                        </div>


                        <div className="ml-2 p-3">
                            <h6 className="heading1">PageSpeed Score</h6>
                            <span>The average page speed score is 75%</span>
                        </div>
                    </div>



                    <div className="border p-2 rounded d-flex flex-row align-items-center mt-2">
                        <div className="p-1 px-4 d-flex flex-column align-items-center speed rounded">
                            <span className="d-block char text-warning">C</span>
                            <span className="text-warning">72%</span>
                        </div>

                        <div className="ml-2 p-4">
                            <h6 className="text">YSlow Score</h6>
                            <span>The average YSlow score is 76%</span>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
