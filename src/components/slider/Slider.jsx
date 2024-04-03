import { useState } from 'react'
import './slider.scss'

function Slider({images}) {
    const [imageIndex,setimageIndex]=useState(null)

    function changeSlide(direction){
        if(direction==='left'){
            if(imageIndex===0){
                setimageIndex(3)
            }
            else{
                setimageIndex(imageIndex-1)
            }
        }
        else{
            if(imageIndex===images.length-1){
                setimageIndex(0)
            }
            else{
                setimageIndex(imageIndex+1)
            }
        }
    }

    // function handelleftarrows(){
    //     if(imageIndex !==0){
    //         setimageIndex(imageIndex-1)
    //     }
    // }
    // function handelrightarrows(){
    //     if(imageIndex !==3){
    //         setimageIndex(imageIndex+1)
    //     }
    // }

  return (
    <div className='silder'>
        {imageIndex !== null && <div className="fullslider">
            <div className="arrow" onClick={()=>changeSlide('left')}>
                <img src="/arrow.png" alt="" /*onClick={handelleftarrows}*//>
            </div>
            <div className="imgContainer">
                <img src={images[imageIndex]} alt="" />
            </div>
            <div className="arrow" onClick={()=>changeSlide('right')}>
            <img src="/arrow.png" alt="" className='right'/*onClick={handelrightarrows}*//>
            </div>
            <div className="close" onClick={()=>setimageIndex(null)}>
                X
            </div>
        </div>}
        <div className="bigimg">
            <img src={images[0]} alt="" onClick={()=>setimageIndex(0)}/>
        </div>
        <div className="smallimages">
            {images.slice(1).map((image,index)=>(
                <img src={image} alt="" key={index} onClick={()=>setimageIndex(index+1)}/>
            ))}
        </div>
    </div>
  )
}

export default Slider