import React from 'react'
import Myheaderpage from './Myheaderpage';
import placement from '../images/placement.jpg';
import Cardcarousel from './Cardcarousel';
import Slider from 'react-slick';
import Myfooterpage from './Myfooterpage';
const companies = [
  {
    img: require('../images/addverb.png')
  },
  {
    img: require('../images/triazine.png')
  },
  {
    img: require('../images/jellyfish.png')
  },
  {
    img: require('../images/ar-software.png')
  },
  {
    img: require('../images/birlasoft.png')
  },
  {
    img: require('../images/appsquadz-software.png')
  }
]

const companies2 = [
  {
    img: require('../images/moptra.png')
  },
  {
    img: require('../images/telecom-system.png')
  },
  {
    img: require('../images/trackobit.png')
  },
  {
    img: require('../images/rezo-ai.png')
  },
  {
    img: require('../images/traviyo.png')
  }
]
function Myplacement() {


  const settings = {
    className: "center",
    centerPadding:"60px",
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow:1
        }
      },
        {breakpoint: 768,
        settings: {
          slidesToShow:2
        }
      },
       {
         breakpoint: 980,
        settings: {
          slidesToShow:3
        }
      }
    ]
  };
  const settings2 = {
    className: "center",
    centerPadding:"60px",
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow:1
        }
      },
        {breakpoint: 768,
        settings: {
          slidesToShow:2
        }
      },
       {
         breakpoint: 980,
        settings: {
          slidesToShow:3
        }
      }
    ]
  }

  return (
    <>
    <Myheaderpage />
    <div>
          <img src={placement} alt='placement written' className='placement' />
    </div>
    <div>
    <h2 className='place-heading'>Placed Students</h2>
    </div>
    <Cardcarousel/>

    <div>
    <h2 className='place-heading'>Our Alumni work in Top Companies </h2>
    </div>


    <div style={{ width: "80%",height:"120px", margin: "auto", marginTop: "20px", marginBottom:"20px" }}>
        <div>
        <Slider {...settings}>
            {companies.map((d, index) => (
                <>

                <div key={index}className="card-img" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", backgroundColor: "white",paddintRight: "20px", borderRadius: "5px", boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)" }}>
                  
                    <img src={d.img}  alt={d.name} style={{ height: "100px", width: "200px" }}/>
                
                    </div>
                    
                    </>
            ))}
            </Slider>
        </div>
    </div>


    <div style={{ width: "80%",height:"120px", margin: "auto", marginTop: "20px", marginBottom:"20px" }}>
        <div>
        <Slider {...settings2}>
            {companies2.map((d, index) => (
                <>

                <div key={index}className="card-img" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", backgroundColor: "white",paddintRight: "20px", borderRadius: "5px", boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)" }}>
                  
                    <img src={d.img}  alt={d.name} style={{ height: "100px", width: "200px" }}/>
                
                    </div>
                    </>
            ))}
            </Slider>
        </div>
    </div>


    <div className='query-box'>
      <h3>Have Placement queries? Get Answere(s) From the <br/> Placement head of ZenCode</h3>
      <div>
      <section>
        <div>
          
        </div>

        <div>

        </div>
      </section>


      <section>

      </section>
      </div>
    </div>
    <Myfooterpage />
          </>
  )
}

export default Myplacement