import React from "react";
import { Button,Form, Image} from "react-bootstrap";


 export default function Tailoring () {
   
return ( 
<>
<div className="body">

<div className="form-container">
    
    <div className="brand-header">
        <div className="brand-logo">
            <Image src="images/logos.jpg" alt="AIWA Logo"/>
        </div>
        <div>
            <div className="brand-text">Al INFAAQ WELFARE ASSOCIATION</div>
            <div className="brand-description">Join our FREE course and learn the about the latest technologies required for Full Stack web development and explore the career opportunities in Software development.</div>
        </div>
    </div>
    
    

    <h6>Fill out the form below to enroll in our<span className="gradient-text"> Free Tailoring Course</span> course</h6>
    <Form id="registrationForm">
        
      <Form.Group>
       <Form.Label>Name <span className="required">*</span></Form.Label>
        <Form.Control type="text"  id="name" placeholder="Enter your name"/>
        <small id="nameError" className="text-danger"></small>
        </Form.Group>
    
        
      <Form.Group>
      <Form.Label>Gender <span className="required">*</span></Form.Label>
        <div className="gender-note">
            Currently not available for female students.For details,
            <a href="tel:+919585434368" class="contact-link">Contact us</a>
        </div>
        <div className="form-check">
            <Form.Check type="radio" name="gender" value="Male"/>
           <Form.Label>Male</Form.Label>
        </div>
        <div className="form-check">
            <Form.Check type="radio" name="gender" value="Female" disabled/>
            <Form.Label> Female</Form.Label>
        </div>
        <small id="genderError" className="text-danger"></small>
     </Form.Group>   
    
      <Form.Group>
        <Form.Label>Date of Birth <span className="required">*</span></Form.Label>
        <Form.Control type="date" id="dob"/>
        <small id="dobError" className="text-danger"></small>
  </Form.Group> 
      
      <Form.Group>
        <Form.Label>Mobile Number (WhatsApp) <span className="required">*</span></Form.Label>
        <Form.Control type="tel" id="mobile" placeholder="Enter Mobile number"/>
        <small id="mobileError" className="text-danger"></small>
    </Form.Group>
      
      <Form.Group>
        <Form.Label>Alternate Mobile Number</Form.Label>
        <Form.Control type="tel" id="alternate" placeholder="Enter alternate number"/>
        <small id="alternateError" className="text-danger"></small>
    </Form.Group> 
       
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" id="email" placeholder="Enter your email"/>
        <small id="emailError" className="text-danger"></small>
  </Form.Group>
        
      <Form.Group>
        <Form.Label>Experience <span className="required">*</span></Form.Label>
        <div className="form-check">
            <Form.Check type="radio" name="experience" value="workingit"/>
            <Form.Label>Working professional - IT</Form.Label>
        </div>
        <div className="form-check">
            <Form.Check type="radio" name="experience" value="workingnonit"/>
            <Form.Label>Working professional - Non-IT</Form.Label>
        </div>
        <div className="form-check">
            <Form.Check type="radio" name="experience" value="finalyear"/>
            <Form.Label>College student - Final year</Form.Label>
        </div>
        <div className="form-check">
            <Form.Check type="radio" name="experience" value="prefinalyear"/>
            <Form.Label >College student - 1st to pre-final year</Form.Label>
        </div>
        <div className="form-check">
            <Form.Check type="radio" name="experience" value="others"/>
            <Form.Label>Others</Form.Label>
        </div>
        <small id="experienceError" className="text-danger"></small>
  </Form.Group>  
        
      <Form.Group>
        <Form.Label>Graduation Year <span className="required">*</span></Form.Label>
        <Form.Select id="graduationYear">
            <option value="">Select Graduation Year</option>
            <option value="Not Applicable">Not Applicable</option>
           
            
         </Form.Select>
        <small id="graduationYearError" className="text-danger"></small>
        </Form.Group>
    
      <Form.Group>
        <Form.Label>Time Slot <span className="required">*</span></Form.Label>
        <div className="form-check">
            <Form.Check type="radio" name="timeSlot" value="7-8 PM" disabled/>
<Form.Label>7:00 - 8:00 PM (Not Available)</Form.Label>
        </div>
        <div className="form-check">
         <Form.Check type="radio" name="timeSlot" value="9-10 PM"/>
      <Form.Label>9:00 - 10:00 PM</Form.Label>
        </div>
        <small id="timeSlotError" className="text-danger"></small>
        </Form.Group>
        
        <div id="loader" style={{display:"none", textAlign:"center", marginTop:"10px"}}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Processing...</span>
            </div>
            <p>Please wait...</p>
        </div>
        <Button type="submit" id="submitBtn" className="btn-submit mt-4">Submit</Button>
 
            <p className="privacy-text">
                I authorize AL INFAAQ Welfare Association to contact me with course updates via Email/SMS/Whatsapp/Call.
            </p>
    </Form>
    <div id="alertContainer"></div>

<div class="footer-credit">
    Created by <a href="https://astasystech.com"  className="gradient-text">Asta Systech</a>
</div>
 </div>  
 </div>
</>
);
}
