import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Coursedescrip(){
     const navigate=useNavigate()

     const handledesc=()=>{
        navigate('/Tailoring')
    }
    return(
        <>
        <div className="container details">
      <div className="course-title">
        <br/><br/>
        <h1 >Tailoring Class Course Details</h1>
        <p>Learn the fundementals of tailoring and garment construction in this comprehensive course.</p>
        </div><br/>

        <div className="course-details">
        <h2>What will you learn?</h2><br/>
        <ul>
            <li>Understand the  basics of tailoring and garment construction</li><br/>
            <li>Learn to measure and fit patterns to individual body types </li><br/>
            <li>Develop skills in cutting and sewing fabrics</li><br/>
            <li>Create a professional looking garment from start to finish</li><br/>
        </ul>

        <h2>Course Curriculam</h2><br/>
        <ol>
            <li><h3>Introduction to Tailoring </h3>
            <p>Overview of tailoring basics, understandingg fabric types and selection </p></li><br/>
            <li><h3>Pattern Making and Cutting</h3>
            <p>Understanding pattern making principles, cutting fabrics accurately</p></li><br/>
            <li><h3>Measuring and Fitting</h3>
            <p>Taking body measurements, creating a custom fit pattern</p></li><br/>
            <li><h3>Sewing and Garment Construction</h3>
            <p>Basic sewing techniques, constructing a garment from start to finish</p></li><br/>
            <li><h3>Finishing Techniques</h3>
            <p>Hemming and seaming, adding buttons and zippers</p></li><br/>
            </ol>
            <h2>Target Audience</h2><p>Beginners interested in learning tailoring skills</p>
            <br/>
            <h2>Assessment</h2><p>Students will be assessed based on their participation, homework and final project.</p><br/>
        <Button  className="regi" onClick={()=>handledesc('/Tailoring')}>Register Now</Button><br/><br/>
        
        </div> 
        </div>
        
        </>
    )
        
        
    
}