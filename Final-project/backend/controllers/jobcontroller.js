const Job = require("../models/Job");
const fs = require("fs");
const path = require("path");


function deletefileexists(filepathfromroot){
    try {
        if(!filepathfromroot) return;
        const fullpath = path.join(__dirname,"..",filepathfromroot);
        if(fs.existsSync(fullpath)) fs.unlinkSync(fullpath);
    } catch(e) {
        console.error(e);
    }
}
//createjob
exports.createjob = async (req,res)=>{
    const {title,company,location,salary,description} = req.body;
    const jobimage = req.file ? `/uploads/jobs/${req.file.filename}`: "";
    const job = await Job.create({
        title,
        company,
        location,
        salary: salary ? Number(salary) : 0,
        description,
        jobimage
    });
    res.status(201).json({success:true, message:"job created", job});
};
//get all jobs 

exports.getalljobs = async(req,res) => {
    const jobs = await Job.find();
     res.status(201).json({success:true, total:jobs.length, jobs});
}
//get singel job
exports.getbyjob = async(req,res) => {
    const job = await Job.findById(req.params.id);
     res.status(201).json(job);
}
//delete
exports.deletejob = async(req,res) => {
    const job = await Job.findById(req.params.id);
    deletefileexists(job.jobimage);
    await Job.findByIdAndDelete(req.params.id)
     res.status(201).json({message:"job deleted"});
}