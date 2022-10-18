import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Form, Table, Modal, Button, Col, Row } from 'react-bootstrap';
import styles from './Songdetails.module.scss';
import clsx from 'clsx';

export default function Songdetails() {
    const[show, setShow]=useState(false);
    const [user, setUser] = useState([]);
    const [namemusic, setNameMusic]= useState('');
    const [genres, setGenres]= useState('');
    const {id} = useParams();

    // useEffect(() => {
    //     fetch('http://localhost:8088/musicdetail/' + id)
    //       .then((res) => res.json())
    //       .then((result) => {
    //         setName(result.name);
    //         setGenenes(result.generes);
    //       });
    //   }, [id]);
    // const url = 'http://localhost:8088/files/' + id;

    const handleClose = () => {
      setShow(false);
    };
    const handleShow = () => {
      setShow(true);
    };
    

    // return(
    //     <>
    //     <div>
    //         {/* <span className={clsx([styles.btnadd])}onClick={handleShow}>
    //             <fas fa-play/>
    //         </span> */}
    //         <h4 className={clsx([styles.title])}>Songdetails</h4>
    //         <br></br>

    //         <form className={classes.form} onSubmit={handleSubmit}>
    //       {' '}
    //       <Grid container spacing={2}>
    //         <Grid item xs={12}>
    //           <TextField
    //             disabled={isDisabled}
    //             autoComplete='name'
    //             name='name'
    //             variant='outlined'
    //             required
    //             fullWidth
    //             id='Name'
    //             label='Name'
    //             // value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             placeholder='Name'
    //             autoFocus
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField
    //             disabled={isDisabled}
    //             variant='outlined'
    //             required
    //             fullWidth
    //             id='generes'
    //             label='Generes'
    //             value={generes}
    //             onChange={(e) => setGenenes(e.target.value)}
    //             placeholder='Generes'
    //           />
    //         </Grid>
    //       </Grid>
    //       <Button
    //         disabled={isDisabled}
    //         type='submit'
    //         variant='contained'
    //         color='primary'
    //         className={classes.submit}
    //       >
    //         Save
    //       </Button>
    //     </form>
    //     <Button
    //       type='submit'
    //       variant='contained'
    //       color='primary'
    //       className={classes.submit}
    //       onClick={handleClickEnebled}
    //     >
    //       Edit
    //     </Button>
    //   </div>
            
        
        

    //     </>
    // )
}