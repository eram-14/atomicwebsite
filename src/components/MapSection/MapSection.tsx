import React from 'react'
import './MapSection.css'
//@ts-ignore
import GoogleMapReact from 'google-map-react';
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";


const AnyReactComponent = ({ text }: any) => <div>{text}</div>;


const MapSection = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <div className="templateux-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 pr-md-5 mb-5">
                        <form action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols={30} rows={10} className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-primary py-3 px-5" value="Send Message" />
                            </div>
                        </form>
                    </div>
                    {/* map */}
                    <div className='col-md-7'
                        style={{ position: 'relative' }}
                    >
                        <div className='map' style={{
                            position: 'relative',
                            height: '80vh', width: '103%',
                            bottom: '218px',
                            left: '0px',
                            backgroundColor: 'rgb(229, 227, 223)'
                        }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text="My Marker"
                                />
                            </GoogleMapReact>
                        </div>
                    </div>

                </div>
                <div className="row iconrow">
                    <div className="col-md-4 mb-4">
                        <div className="media block-icon-1 d-block text-center">
                            <div className="icon small mb-3"><span><IoLocationOutline/></span></div>
                            <div className="media-body">
                                <h3 className="h5 mb-4">Arthur Bldg flr, New York City, USA</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="media block-icon-1 d-block text-center">
                            <div className="icon small mb-3"><span><IoCallOutline/></span></div>
                            <div className="media-body">
                                <h3 className="h5 mb-4">+1 209 923 2302</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="media block-icon-1 d-block text-center">
                            <div className="icon small mb-3"><span><AiOutlineMail/></span></div>
                            <div className="media-body">
                                <h3 className="h5 mb-4">info@templateux.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapSection
