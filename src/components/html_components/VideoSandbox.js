
import { useEffect, useRef } from 'react'
import useStore from '../../store'

console.log("HERE")

const baseVideoPath = document.location.origin + window.location.pathname + '/video/'
const videoOne = baseVideoPath + 'blue_hex.mp4'
const videoTwo = baseVideoPath + 'red_hex.mp4'

export default function Navigation() {
  // const videoIndex = useStore(state => state.videoIndex)
  // const videoPaths = useStore(state => state.videoPaths)
  // const currentVideo = document.location.origin + window.location.pathname + videoPaths[videoIndex]

  const canvasRef = useRef()

  useEffect(() => {
    console.log(canvasRef)

    const ctx = canvasRef.current.getContext("2d")
    const video = document.createElement("video")

    const draw = () => {
      var width = video.videoWidth >> 1;  // half width
      var vh = video.videoHeight;
      ctx.drawImage(video, 0, 0, width, vh, 150, 0, 150, canvasRef.current.height); // draw left half to the right
      ctx.drawImage(video, width, 0, width, vh, 0, 0, 150, canvasRef.current.height);  // draw right half to the left

      console.log("HERE")
      requestAnimationFrame(draw);
    }

    video.oncanplay = draw;
    video.loop = video.autoplay = video.muted = true
    video.src = videoOne
    ctx.fillText("Loading video...", 20, 20)
  }, []);


  return (
    <>

      <div>
        <canvas ref={canvasRef} style={{width: '100%'}}/>
        {/*         
        <video autoPlay muted loop className="cover-screen" key={videoOne}>
          <source src={videoOne} type="video/mp4" />
        </video> */}
      </div>
    </>
  )
}