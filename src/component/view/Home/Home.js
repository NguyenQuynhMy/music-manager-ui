import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import styles from './Home.module.scss';

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
    ButtonGroup,
}
from 'react-bootstrap';
import {useParams} from 'react-router-dom';
// import { async } from 'q';
import Container from 'react-bootstrap/esm/Container';
// import { async } from 'q';
// import { classes } from 'istanbul-lib-coverage';


export default function Home() {
    const pageNumbers = [];
    const [user, setUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);
    const [currentPage, setCurrentPage] = useState();
    const [totalPage, setTotalPage] = useState();
    const [totalItems, setTotalItems] = useState();
    const [idDelete, setIdDelete] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [nameSearch, setNameSearch] = useState(' ');
    

        if(currentPage == undefined) {
            setCurrentPage(0);
        }
        useEffect(() => {
            if(currentPage == undefined) {
                setCurrentPage(0);
            }
            UsersGet();
        }, [currentPage, selectedUser])
        const UsersGet = () => {
            fetch(

            )
        }
        const UpdateUser = (id) =>{
            window.location ='/update' + id;
        };
        
        const handleDeleteItem = (id) => {
            var check = window.confirm("Are you sure to delete this song ?");
            if (check) {
                var listId = [];
                listId.push(id);
                console.log(typeof id);
                console.log(listId);
                fetch('http://localhost:8088/delete', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/jison',
                    },
                    body: JSON.stringify(listId),
                })
                .then((result) => {
                    console.log(result);
                    if (result.ok) {
                       alert('Delete Success!');
                       UsersGet();
                    }
                });
                let remainUsers;
                remainUsers = user.filter((remainUsers) => remainUsers.isChecked !== true);
                setUser(remainUsers);
                setSelectedItems(0);
                let checkbox = document.getElementById('default-checkbox');
                checkbox.check = false;
            }
        };
        const multiDelete = (event) => {
            console.log(users);
            var checked = window.confirm('Are you sure to delete them');
            if (checked) {
              let deletedUser;
              let deleteTemp = [];
              deletedUser = users.filter((tempUser) => tempUser.isChecked === true);
              deletedUser.forEach((deletedUser) => deleteTemp.push(deletedUser.id));
              console.log(deleteTemp);
              console.log(deletedUser);
              fetch('http://localhost:8088/delete', {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(deleteTemp),
              }).then((result) => {
                console.log(result);
                if (result.ok) {
                  alert('Delete Success');
                  UsersGet();
                }
              });
              let remainUsers;
              remainUsers = users.filter((remainUser) => remainUser.isChecked !== true);
              setUsers(remainUsers);
              setCountSelected(0);
              let checkbox = document.getElementById('default-checkbox');
              checkbox.checked = false;
            }
          };

        const handlePageChange = (event, value) => {
            setCurrentPage(value -1);

            UsersGet();
        };
        
        const handleAllChecked = (event) => {
            console.log(event);
            const tempUser = user;
            tempUser.forEach(
            (user) => (user.isChecked = event.target.checked),
        );
            setUser(tempUser);
            console.log(tempUser);
            setSelectedUser(
            tempUser.filter((item) => item.isChecked === true),
        );
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            for (var checkbox of checkboxes) {
            checkbox.checked = event.target.checked;
        }
    };

    const handleCheckChieldElement = (event) => {
        console.log(event.target.checked);
        let tempUser = user;
        let tempSelectedUser = [];
        tempUser.forEach((employee) => {
          if (user.id.toString() === event.target.value) {
            user.isChecked = event.target.checked;
          }
          if (user.isChecked) {
            tempSelectedUser.push(employee);
          }
          setSelectedUser(tempSelectedUser);
        });
      };
      let temp;
      if (selectedUser.length === 0) {
        temp = false;
      } else temp = true;

    const handleSelectedItems = (event) => {
        let selected = 0;
        const checkboxes = document.getElementsByClassName('item-checkbox');
        for ( var checkbox of checkboxes) {
            if(checkbox.checked === true){
                selected++;
            }
        }
        console.log(selected);
        return selected;
    };

    
        
    return (
    <>
    <h4 className={clsx([styles.title])}>Music Manager</h4>
    <br />
    <hr />
    <Form>
        <Link to = '/create/'>
        <Button  variant ='outline-dark'>
        ADD
        </Button>
        </Link>
    </Form>
    <Button variant ='outline-dark' onClick={multiDelete}>
    DELETE
    </Button>
    <Form className={clsx([styles.formSearchEmployee])}>
    <Form.Group className='mb-3' controlId='formBasicText'>
        <input
        type ='text'
        className='form-control'
        placeholder='Search by Name'
        onChange={(e) => {
            setNameSearch(e.target.value);
        }}
        />
        </Form.Group>
        </Form>
        <Button variant ='outline-dark' onClick={UsersGet}>
        Search
        </Button>

    <Table>
        <thead>
            <tr>
                <th>
                    <Form.Check
                    type = 'checkbox'
                    id={`default-checkbox`}
                    onClick={handleAllChecked}
                    ></Form.Check>
                </th>
                <th>No. </th>
                <th>Name</th>
                <th>Genres</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
            {user.map((user) => (
                <tr key={user.id}>
                    <td>
                    <input
                    type ='checkbox'
                      id = {`default-checkbox`}
                      className={'item-checkbox'}
                      value = {user.id}
                      defaultChecked={user.isChecked}
                      onClick={handleCheckChieldElement}
                      ></input>
                    </td>
                    
                      <td>{user.Name}</td>
                      <td>{user.Genres}</td>
                      <TableCell align='left'>
                        <ButtonGroup
                            color = 'primary'
                            aria-label='outlined primary button group'>
                                <Button onClick={() => UpdateUser(user.id)}>
                                    Edit
                                </Button>
                                <Button onClick={() => UserDelete(user.id)}>
                                    Delete
                                </Button>
                            </ButtonGroup>
                      </TableCell>
                      </TableRow>
            ))}
            </TableBody>
    </Table>
    </TableContainer>

    {/* <div>
    <Button variant="outline-dark">Add</Button>{' '}
    <Button variant="outline-dark">Delete</Button>{' '}
    <input type="text" name=""/>
    </div>

    <Table striped bordered hover>
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Genres</th>
                <th scope="col">Action</th>
                <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><input type='checkbox' name='' /></th>
                <td>Rolling in the deep</td>
                <td>Pop</td>
                <td>
                <i class="fas fa-play"></i>{' '}
                <i class="fa-solid fa-pen" />
                </td>
            </tr>   
            <tr>
                <th scope="row"><input type ='checkbox' name=''/></th>
                <td>Healing in the world</td>
                <td>Pop</td>
                <td>
                <i class="fas fa-play"></i>{' '}
                <i class="fa-solid fa-pen" />
                </td>
            </tr>
            <tr>
                <th scope="row"><input type='checkbox' name='' /></th>
                <td>Mad world</td>
                <td>Rock</td>
                <td>
                <i class="fas fa-play"></i>{' '}
                <i class="fa-solid fa-pen" />
                </td>
            </tr>
            <tr>
                <td>
                <b>Total Items: </b>
                <p>Selected Items: </p>
                </td>
            </tr>
        </tbody>
        </Table> */}
        
        
        
    
                


    </>
    )
}
