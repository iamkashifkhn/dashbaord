import React, {useState} from 'react'
import './scans.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Spin, Tooltip, DatePicker, Button } from "antd";



function Scan() {
  const [repoList, setRepoList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [asc, setAsc] = useState(true);
  const [desc, setDesc] = useState(false);
  const [date, setDate] = useState("");

  const uploadedRepo = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8000/api/getRepositories/"
        // "http://18.133.41.137:8000/api/getRepositories/"
      );
      setRepoList((result.data).sort((a, b) => (a['ID'] < b['ID'] ? 1 : -1)));
      setLoader(!loader);
    } catch (err) {
      console.log(err);
    }
  };
  const onChange = (date, dateString) => {
    setDate(dateString);
  };

  useEffect(() => {
    uploadedRepo();
  }, []);

  useEffect(() => {
    setRepoList(repoList.sort((a, b) => (a.ID > b.ID) ? 1 : -1))
  }, [asc]);

useEffect(() => {
    setRepoList(repoList.sort( (a, b) => (a.ID < b.ID) ? 1 : -1))
  }, [desc]);

    //to render all the repos after every 15 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        uploadedRepo();
        setLoader(!loader);
      }, 15000);
      return () => clearInterval(interval);
    }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#455590" }}> Scan Results </h1>
      <div className='scan-repo-bar'>
        <button className='scan-button'>
          <i className='pi pi-plus'/>
          <Link to="/main/upload" className='scan-link'> Add new Scan </Link>
        </button>
      
      <div className="sort-search" onClick={()=>setAsc(!asc)}>
        <Tooltip title="Ascending">
        <span className="arrow-up">
        <i class="pi pi-arrow-up"></i>
        </span>
        </Tooltip>
        <Tooltip title="Descending">
        <span className="arrow-down" onClick={()=> setDesc(!desc)}>
        <i class="pi pi-arrow-down"></i>
        </span>
        </Tooltip>
        <DatePicker  className='pick-date' format='DD-MM-YYYY' onChange={onChange}/>
      <input
        type="text"
        className="search-bar"
        placeholder="Search Repositories"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      </div>
      </div>

      {loader ? (
        <div className="repos-loader">
          <Spin size="large" />
        </div>
      ) : (
        <>
        {repoList.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val['Project Name'].toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).filter((valdata) => {
          if (date === "") {
            return valdata;
          } else if (valdata['Date'].includes(date)) {
            return valdata;
          }
        }
        ).map((repo, idx) => {
          return (
            <>
              <div className="repo-name" key={idx}>
                  <div className="name-date">
                    <span> {repo["Project Name"]} </span>
                    <span className="date">{repo["Date"]}</span>
                  </div>
                  <Link
                    // to="/main/uploadedRepos/1"
                    to={`/main/scans/${repo["ID"]}`}
                    style={{ textDecoration: "none" }}
                  >
                    <button className="view-details"> View Details </button>
                  </Link>
              </div>
            </>
          )})}
        </>
      )}
      </div>
  )
}

export default Scan