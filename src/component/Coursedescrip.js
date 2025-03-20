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

        <div>
    <div className='tlr'>
</div><br/>
<br/>

<div className='container'>
    <h1>Tailoring Course Registration Form</h1><br/><br/>
<form>
<label htmlFor='name'>Name:</label>
<input type="text" placeholder='Enter your name' name="name"/><br/><br/>

<label htmlFor='age'>Age:</label>
<input type="number" placeholder='Enter your age' name="age"/><br/><br/>

<label htmlFor='qualification'>Qualification:</label>
<input type="text" placeholder='Enter your qualification' name="qualification"/><br/><br/>

<label htmlFor='guardian'>Father/Husband's Name:</label>
<input type="text" placeholder='Enter your Father/Husband name' name="guardian"/><br/><br/>

<label htmlFor='occupation'>Occupation:</label>
<input type="text" placeholder='Enter your occupation' name="work"/><br/><br/>

<label htmlFor='address'>Address:</label>
<textarea name="address" id="address" cols="10" rows="2" placeholder='Enter your Address'></textarea><br/><br/>

<label htmlFor='phone'>Phone No:</label>
<input type="number" placeholder='Enter your phone number' name="phone"/><br/><br/>

<label htmlFor="timing">Timing:</label><br/>
<input type="radio" name="timing"/>9:00 AM -11:00 AM<br/><br/>
<input type="radio" name="timing"/>11:00 AM -1:00 PM<br/><br/>
<input type="radio" name="timing"/>2:00 PM -4:00 PM<br/><br/>
<input type="radio" name="timing"/>4:00 PM -6:00 PM<br/><br/>
<input type="radio" name="timing"/>6:00 PM -8:00 PM<br/>
<br/><br/>
< Button className="sew" type='button' >Reset</Button>
<Button  className="sew" type='submit' >Submit</Button><br/><br/>
</form>
</div>
</div> 
        
        </>
    )
        
        
    
}