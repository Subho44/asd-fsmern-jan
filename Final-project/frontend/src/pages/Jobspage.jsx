import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import Jobform from '../components/Jobform';
import Joblist from '../components/Joblist';
import {Alert,Box,Snackbar} from "@mui/material"

const BASE_URL = "http://localhost:5500";

const Jobspage = () => {
  const [jobs,setJobs] = useState([]);
  
  const [toast,setToast] = useState({open:false, msg:"",type:"success"});
  const showToast = (msg, type="success") => setToast({open:true, msg, type});
  const closeToast = ()=> setToast(p=>({...p,open:false}));


   const fetchjobs = async ()=> {
    try {
        const res = await axios.get(`${BASE_URL}/api/jobs`);
        setJobs(res.data.jobs || []);
    } catch(e) {
        console.error(e);
    }
  }
  //read all jobs
  useEffect(()=>{
    fetchjobs();
  },[]);

 
  //create job
  const addjob = async(formdata) => {
    try {
        const res = await axios.post(`${BASE_URL}/api/jobs`,formdata);
        showToast(res.data.msg || "job added");
        fetchjobs();
        return true;
    } catch(e) {
        console.error(e);
    }
  }
  //delete job
  const deletejob = async (id)=> {
    try {
        const res = await axios.delete(`${BASE_URL}/api/jobs/${id}`);
        showToast(res.data.msg ||"job deleted");

        setJobs((prev)=>prev.filter((j)=>j._id !== id));
    } catch(e) {
         showToast(e?.response?.data?.msg || "Delete no","error");
    }
  }


  return <>
  <Box>
    <Jobform onAdd={addjob}/>
    <Joblist jobs={jobs} onDelete={deletejob} baseurl={BASE_URL} />
    <Snackbar open={toast.open} autoHideDuration={2500} onClose={closeToast}>
        <Alert onClose={closeToast} severity={toast.type} variant='filled' sx={{width:"100%"}}>
        {toast.msg}
        </Alert>
    </Snackbar>
   
    
  </Box>
  
  </>
}

export default Jobspage