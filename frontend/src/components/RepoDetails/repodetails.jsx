import axios from "axios";
import "./repodetails.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Spin, Tooltip } from "antd";
import { PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";
import {Table } from 'antd';

function RepoResults() {
  const coloumns = [
    {
      title:'ID',
      dataIndex:'id',
      key:'id',
      sorter :{
        compare: (a, b) => a.id - b.id,
      }
    },
    {
      title: "Author",
      dataIndex: "Author",
      key: "author",
    },
    {
      title: "Project Name",
      dataIndex: "Repo Name",
      key: "project_name",
    },
    {
      title:'File Name',
      dataIndex:'File Name',
      key:'file_name'
    },
    {
      title: "File Matched with",
      dataIndex: "File Matched with",
      key: "file_matched_with",
    },
    {
      title:'Similarity',
      dataIndex:'Similarity',
      key:'similarity',
      sorter :{
        compare: (a, b) => a.Similarity - b.Similarity,
      }
    },
    {
      title:'License',
      dataIndex:'License',
      key:'license'
    },
    {
      title:'URL',
      dataIndex:'URL',
      key:'url'
    }
  ]
  let history = useNavigate();
  const [data, setData] = useState([]);
  // const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  let SimilarityPercentage;

  const { id } = useParams();
  const getApiData = async () => {
    try {
      const result = await axios.post(
        "http://localhost:8000/api/getBomResponse/",
        // "http://18.133.41.137:8000/api/getBomResponse/",
        {
          ID: id,
        }
      );
      setLoading(!loading);
      setData(
        result.data
      );
    } catch (err) {
      console.log("error file");
      console.log(err);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getApiData();
      setLoading(!loading);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="repo-results">
      <div className="repo-details-header">
        <PageHeader
          className="site-page-header"
          title="Matching Results"
          onBack={() => history("/main/scans")}
        />
      </div>
      <div className="refresh-btn">
        <div>

          <CSVLink data={data} filename={"Matching_Results.csv"} className="csv-link">
            <i className="pi pi-download" />
          Download CSV
        </CSVLink>
        </div>
      </div>
      {loading ? (
        <div className="repo-details-loading">
          <Spin size="large" />
        </div>
      ) : (
        <div style={{marginTop:'20px', marginRight:'20px'}}>
          <Table
            columns={coloumns}
            dataSource={data}
            responsive={true}
            style={{width:'100%'}}
          />
        </div>
      )}
    </div>
  );
}

export default RepoResults;
