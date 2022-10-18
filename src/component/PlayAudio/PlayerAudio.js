import React,{ useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

function PlayAudio(){

    const { id } = useParams();
    const [url, setUrl] = useState('');
    const refAudio = useRef();
    const reloadAudio = () => {
      setUrl('http://localhost:8088//' + id);
      refAudio.current.audio.current.play();
    };
  
    console.log(id);
    console.log(url);
    useEffect(() => {

      setUrl('http://localhost:8088//' + id);
      
      const audio = document.getElementById('myaudio');
      audio.load();
    }, [refAudio]);

return(
    <>
    <div id = 'player'>
        <audio
        id ='audio'
        controls = 'controls'
        preload='none'
        crossOrigin='anonymous'
        style={{ width: '100%' }}
        >
            <source src={url} type='audio/mpeg' />
        Browser not support this audio!
        </audio>
    </div>
    </>
);
}