import React from 'react'
import "aos/dist/aos.css";
import "./BgPrimary.css";
import CountUp from 'react-countup';

const BgPrimary = () => {
    return (
        <div className="templateux-section bg-primary" id="templateux-counter-section">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div className="templateux-counter text-center">
                            <span className="templateux-number" data-number="99399">
                                <CountUp end={99399} />
                            </span>
                            <span className="templateux-label">Lines of Codes</span>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="templateux-counter text-center">
                            <span className="templateux-number" data-number="99"><CountUp end={99} /></span>
                            <span className="templateux-label">Number of Projects</span>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="templateux-counter text-center">
                            <span className="templateux-number" data-number="124"><CountUp end={124} /></span>
                            <span className="templateux-label">Number of Clients</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BgPrimary

