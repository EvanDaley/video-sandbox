
import useStore from '../../store'

export default function Navigation() {
  const videoIndex = useStore(state => state.videoIndex)
  const videoPaths = useStore(state => state.videoPaths)

  const currentVideo = document.location.origin + window.location.pathname + videoPaths[videoIndex]

  return (
    <>
      <div>
        <video autoPlay muted loop className="cover-screen" key={currentVideo}>
          <source src={currentVideo} type="video/mp4" />
        </video>
      </div>
    </>
  )
}