import React from 'react'
import './main.css'

import img1 from '../../assets/img (1).jpeg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

// import img1 from '../../assets/img (1).jpeg'
import img2 from '../../assets/img (2).jpg'
import img3 from '../../assets/img (3).jpg'
import img4 from '../../assets/img (4).jpg'
import img5 from '../../assets/img (5).jpg'
import img6 from '../../assets/img (6).jpg'

const Data = [

  {
    id : 1,
    imgSrc : img1,
    destTitle : 'Bora Bora',
    location : 'New Zeland',
    grade : 'CULTURAL RELAX',
    fees : '$700',
    description: 'The epitome of romance, Bora Bora is one of the besttravel destination in the World.'
  },

  {
    id : 2,
    imgSrc : img2,
    destTitle : 'Machu picchu',
    location : 'peru',
    grade : 'CULTURAL RELAX',
    fees : '$700',
    description: 'The epitome of romance, Bora Bora is one of the besttravel destination in the World.'
  },

  {
    id : 3,
    imgSrc : img3,
    destTitle : 'Great Barrier Reef',
    location : 'Australia',
    grade : 'CULTURAL RELAX',
    fees : '$800',
    description: 'The epitome of romance, Bora Bora is one of the besttravel destination in the World.'
  },

  {
    id : 4,
    imgSrc : img4,
    destTitle : 'Cappadocia',
    location : 'Turkey',
    grade : 'CULTURAL RELAX',
    fees : '$500',
    description: 'The epitome of romance, Bora Bora is one of the besttravel destination in the World.'
  },

  {
    id : 5,
    imgSrc : img5,
    destTitle : 'Guanajuato',
    location : 'Mexico',
    grade : 'CULTURAL RELAX',
    fees : '$600',
    description: 'The epitome of romance, Bora Bora is one of the besttravel destination in the World.'
  },

  {
    id : 6,
    imgSrc : img6,
    destTitle : 'Cinque Terre',
    location : 'Italy',
    grade : 'CULTURAL RELAX',
    fees : '$750',
    description: 'The epitome of romance, Bora Bora is one of the besttravel destination in the World.'
  },
]

const Main = () => {
  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="seccontent grid">
        {
          Data.map(((id, imgSrc, destTitle, location,  grade, fees, description )) => {
              return (
                <div key= {id} className="singleDestination">

                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade} <small>+1</small> </span>
                      </div>

                      <div className="price">
                        <h5>{fees} </h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description} </p>
                    </div>

                    <button className="btn flex">
                      DETAIlS <HiOutlineClipboardCheck className='icon'/>
                    </button>
                  </div>

                </div>
              )

          } )


        }

      </div>

    </section>
  )
}

export default Main
