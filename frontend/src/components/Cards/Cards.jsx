import React, {useState, useEffect} from 'react'
import './cards.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Cards() {
    const [repo, setRepo] = useState()
    const [no_of_projects, setNo_of_projects] = useState()
    const getResult = async () => {
        try {
            const result = await axios.get('http://localhost:8000/api/getRepositories/')
            // const result = await axios.get("http://18.133.41.137:8000/api/getRepositories/")
            setRepo((result.data).slice(0, 5))
            setNo_of_projects(result.data.length)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getResult()
    }, [])
  return (
    <div>
    <div className='widgets'>
    <div className='widget'>
        <div className='widget-left'>
            <span className='title'> Total Project Scanned </span>
            <span className='noOfProject'> {no_of_projects} </span>
            <span><Link to='/main/scans'> View Link </Link> </span>
        </div>
        <div className='widget-right'>
            <span> 20% </span>
            <span> <i className='pi pi-book'/> </span>
        </div>
    </div>

    <div className='widget'>
        <div className='widget-left'>
            <span className='title'> High Risk </span>
            <span className='noOfProject'> 4 </span>
            <span><Link to='/main/scans'> View Link </Link> </span>
        </div>
        <div className='widget-right'>
            <span> 20% </span>
            <span> <i className='pi pi-times-circle'/> </span>
        </div>
    </div>

    <div className='widget'>
        <div className='widget-left'>
            <span className='title'> Low Risk </span>
            <span className='noOfProject'> 24 </span>
            <span><Link to='/main/scans'> View Link </Link> </span>
        </div>
        <div className='widget-right'>
            <span> 20% </span>
            <span> <i className='pi pi-check-circle'/></span>
        </div>
    </div>
 
    </div>
    </div>
  )
}

export default Cards