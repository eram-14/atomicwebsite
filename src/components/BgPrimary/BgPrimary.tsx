import React, { useEffect, useState } from 'react'

function BgPrimary() {
    const [num, setNum] = useState({
        loc: 0,
        nop: 0,
        noc: 0
    })
    const [loc, setLoc] = useState(0)
    useEffect(() => {
        lineOfCodes()
    }, [loc])


    const lineOfCodes = () => {
        setInterval(function () {
            if (loc < 99399) {
                setLoc(loc + 7647)
            }
            else{
                setLoc(99399)
            }
            console.log(loc);
        }, 100);
        
    }


    return (
        <div className="templateux-section bg-primary" id="templateux-counter-section">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div className="templateux-counter text-center">
                            <span className="templateux-number" data-number="99399">{loc}</span>
                            <span className="templateux-label">Lines of Codes</span>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="templateux-counter text-center">
                            <span className="templateux-number" data-number="99">{num.nop}</span>
                            <span className="templateux-label">Number of Projects</span>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="templateux-counter text-center">
                            <span className="templateux-number" data-number="124">{num.noc}</span>
                            <span className="templateux-label">Number of Clients</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BgPrimary
