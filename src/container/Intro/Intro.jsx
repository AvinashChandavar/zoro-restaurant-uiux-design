import { useRef, useState } from 'react';
import { meal } from '../../constants';
import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) videRef.current.pause();
    else videRef.current.play();
  };

  return (
    <div className="app__video">
      <video
        ref={videRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      {/*  */}
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#FFF" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#FFF" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
