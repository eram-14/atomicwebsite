import React from 'react'

type propsImg = {
    img: string
}

function Item({ img }: propsImg) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <a href={img} data-fancybox="gallery" data-caption="Caption #1">
                <img src={img} className="img-fluid" />
            </a>
        </div>
    )
}

export default Item
