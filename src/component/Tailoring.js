import React from "react";
import { Button } from "react-bootstrap";


 export default function Tailoring () {
   
return (
<>
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
);
}
