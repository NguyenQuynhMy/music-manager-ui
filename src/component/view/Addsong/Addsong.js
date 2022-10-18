import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import styles from './Addsong.module.scss';

import {FaPlay, FaEdit} from 'react-icons';
import clsx from 'clsx';
import {
    Col,
    Row,
    Form,
    Tab,
    Table,
    Tabs,
    Button,
    Modal,
}
from 'react-bootstrap';
import {useParams} from 'react-router-dom';
// import { async } from 'q';
import Container from 'react-bootstrap/esm/Container';
// import { classes } from 'istanbul-lib-coverage';

 function Addsong(){
    const [namemusic, setNameMusic] = useState('');
    const [genres, setGenres] = useState('');
    const [singer, setSinger] = useState('');
    const {id} = useParams;
    const [urlImg, setUrlImg] = useState();
    const [avatar, setAvatar] = useState();

    

 
//  return(
//     <>
//     <div>
//         <form 
//         className={classes.form}
//         >
            
//         </form>
//     </div>

//     </>
//  )
 }
export default Addsong;

