import React, { useContext, useEffect, useState } from 'react'
import GlobelContext from './Globel'

export default function MainSection() {

    const {getData , quote} = useContext(GlobelContext)

    const handleclick = () => {
        getData()
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className="pagal d-flex">
            <div class="card w-50 rounded-0 glass">
                <div class="card-body text-white">
                    <h5 class="card-title">{quote.content}</h5>
                    <p class="card-text">{quote.author}</p>
                    <a href="#" class="btn-btn-primary glass text-black" onClick={() => handleclick()}>NEW QUOTE</a>
                </div>
            </div>
        </div>
    )


}
