import React from "react";
import { Button, Col, Row, Card, CardTitle, CardBody, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Coursedetail() {
    const navigate = useNavigate()

    const handledesc = () => {
        navigate('/Tailoring')
    }
    return (
        <>
            <div>
                <div className="container-fluid">
                    <Row>
                        <Col sm={7} className="sidecontent">
                            <h1>Tailoring Course</h1>
                            <p>In this comprehensive tailoring course , students will learn the fundamental skills and techniques required to create professional garments.</p>
                            <button className="butn">3 Months Course <i class="fa-solid fa-timer fa-xl" style={{ color: "rgb(27, 10, 92)" }}></i></button>     <button className="butn"> 2 Hours Session</button>
                            <br /><br />
                            <Button className="regi" onClick={() => handledesc('/Tailoring')}>Register Now</Button>
                        </Col>
                        <Col sm={5} className="sidesimage">
                            <Image src="images/tlr3.AVIF" alt="side image" className="side-image" />
                        </Col>
                    </Row>
                </div><br />
                <div className="container-fluid">
                <Row>
                    <Col sm={2}>
                        <div className="container-fluid side">
                            <ul>
                                <li>Course overview </li>
                                <li>What you'll learn</li>
                                <li>Syllabus</li>
                                <li>Course instructor</li>
                                <li>Projects</li>
                                <li>Students review</li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={10}>

                    <div className="container page">

                    <h4 className="mb-1 text-brown">Tailoring Course</h4><hr />
                    <p>In this comprehensive course students will have gained the skills and knowledge needed to become a proficient tailor and start their own tailoring business. For advanced students we offfer a module on advanced tailoring techniques including working with stretch fabrics and knits creating custom embellishments, and advanced  sewing techniques.Students will learn about the improtance of safety precautions in tailoring and how to properly use measuring tapes, scissors, and sewing machines.</p>
                    <br />

                    <h4 className="mb-1 text-brown">Prerequisites</h4><hr />
                    <p>No prior knowledge is required to successfully participate in the course</p>
                    <br />
                    <h4 className="mt-3 text-brown">What you'll learn</h4><hr />
                    <Row >
                        <Col lg={4} className="cardcon">
                            <h5 style={{ color: "chocolate" }}>01.</h5>
                            <h5 style={{ color: "darkcyan" }}>
                                Foundational Skills:
                            </h5>
                            <p>Basic sewing techniques,understanding of basic tailoring tools and fabric types.textures etc.</p>
                        </Col>
                        <Col lg={4} className="cardcon">
                            <h5 style={{ color: "chocolate" }}>02.</h5>
                            <h5 style={{ color: "darkcyan" }}>Pattern Making and Fitting:</h5>
                            <p>understanding of pattern making principles, how to alter patterrns for a perfect fit, fitting techniques for different body types.</p>
                        </Col>
                        <Col lg={4} className="cardcon">
                            <h5 style={{ color: "chocolate" }}>03.</h5>
                            <h5 style={{ color: "darkcyan" }}>Advanced Techniques:</h5>
                            <p>Working with stretch fabrics and knits, Creating a tailored suit or coat, Creating custom embellishments,and advanced sewing techniques.</p>
                        </Col>
                    </Row>

                    <Row style={{ paddingTop: "10px" }}>
                        <Col lg={4} className="cardcon">
                            <h5 style={{ color: "chocolate" }}>04.</h5>
                            <h5 style={{ color: "darkcyan" }}>Finishing Techniques:</h5>
                            <p>Hemming and seaming techniques, How to add nuttonholes and  eyelets, Pressing and steaming techniques and Finishing seams and edges.</p>
                        </Col>
                        <Col lg={4}></Col>
                        <Col lg={4}></Col>
                    </Row>
                    <h4 className="mt-3 text-brown">Syllabus</h4><hr />
                    <Row>
                        <Col lg={6} className="cardcon2">
                            <h5 style={{ color: "darkcyan" }}>01. Introduction of Tailoring</h5>
                            <ul>
                                <li>History of tailoring</li>
                                <li>Overview of tailoring and garment construction</li>
                                <li>Safety precaution in tailoring</li>
                            </ul>
                        </Col>
                        <Col lg={6} className="cardcon2">
                            <h5 style={{ color: "darkcyan" }}>02. Measuring and Fitting</h5>
                            <ul>
                                <li>Taking body measurements</li>
                                <li>understanding body types and proportions</li>
                                <li> Fitting techniques for different body types</li>
                            </ul>
                        </Col>
                    </Row>

                    <Row style={{ paddingTop: "10px" }}>
                        <Col lg={6} className="cardcon2">
                            <h5 style={{ color: "darkcyan" }}>03. Sewing and Garment construction</h5>
                            <ul>
                                <li>Basic sewing techniques like straight stitch and backstitch,etc.</li>
                                <li>Garment construction techniques like darts and seams etc.</li>
                                <li>Working with different fabrics and textures</li>
                            </ul>
                        </Col>
                        <Col lg={6} className="cardcon2">
                            <h5 style={{ color: "darkcyan" }}>04. Techniques and Advanced Projects</h5>
                            <ul>
                                <li>Creating custom embellishments like pockets, cuffs etc.</li>
                                <li>Advanced sewing techniques like overlocking, serging etc.</li>
                                <li>Working with stretch fabrics and knits</li>

                            </ul>
                        </Col>
                    </Row>
                    <h4 className="mt-3 text-brown">Meet your instructor</h4><hr />
                    <Row>
                        <Col lg={2}>
                            <Card className="instructor">
                                <Card.Img className="instructor" variant="top" src="images/instructor1.AVIF" alt="card image" />
                                <CardTitle className="mt-2, text-center">Aasha Shakya</CardTitle>
                                <CardBody>
                                    <i className="fa-brands fa-facebook fa-xl" style={{ color: " #126dce", marginRight: "10px" }}></i>
                                    <i className="fa-brands fa-square-twitter fa-xl" style={{ color: " #01d5c7", marginRight: "10px" }}></i>
                                    <i class="fa-brands fa-github fa-xl" style={{ marginRight: "10px" }}></i>
                                    <i class="fa-brands fa-linkedin fa-xl" style={{ color: " #1a6bb7" }}></i>

                                </CardBody>
                            </Card>

                        </Col>

                        <Col lg={10}>
                            <p>With over 10 years of experience in the sewing industry, Aasha Shakya is a skilled expert in all aspects of sewing. As a passionate instructor, she has taught numerous students the art of sewing, helping them develop their skills and confidence.Aasha believes that sewing is not just a skill, but a form of self-expression and creativity.She strives to create a supportive and encouraging learning environment thatt allows students to explore their imaginaton and bring their ideas to life.</p>
                            <h5 className="mt-1">Experience</h5>
                            <ul>
                                <li>10+ years of experiencein sewing and garment construction</li>
                                <li>Expertise in various sewing techniques, including embroidery, quilting and alterations</li>
                            </ul>
                        </Col>
                    </Row>


                    <h4 className="mt-5 text-brown">Some of our student's work</h4><hr />
                    <Row>
                        <Col lg={6} >
                            <Image src="images/gown4.JPEG" alt="no image" className="student-work" />
                        </Col>


                        <Col lg={6}>
                            <p>Our students have been working hard to create stunning tailoring projects.<br />A stunning wedding gown created from scratch, featuring intricate lace work and beading.<br />A series of alterations and repairs made to existing garments, demonstrating the student's atention to detail and technical skills.<br />"I never thought I could create something as beautiful as this bespoke suit.  The tailoring course has given me the skills and confidence to pursue my dreams."  <br />"I was amazed at how much I learned in just a few weeks.  The instructors were knowledgeable and supportive, and I'm so proud of what I've accomplished."</p>
                        </Col>

                    </Row>

                    <h4 className="mt-5 text-brown">What our students says about the course</h4><hr />
                    <Row className="mt-5">
                        <Col sm={2}><Image src="images/girl3.JPEG" alt="no image" className="photo" />
                        </Col>
                        <Col sm={10}>
                            <h5>David Jessica</h5>
                            <p>I loved  how the course started with the basics of pattern making and gradually moved on to more complex topics like embroidery and beading.</p>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col sm={2}><Image src="images/girl1.JPEG" alt="no image" className="photo" />
                        </Col>
                        <Col sm={10}>
                            <h5>Olivia Smith</h5>
                            <p>The course covered everything I needed to know about tailoring from cutting and sewing to finishing and alterations.</p>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col sm={2}><Image src="images/girl2.JPEG" alt="no image" className="photo" />
                        </Col>
                        <Col sm={10}><h5>White Wilson</h5>
                            <p>I appreciated how the instructors broke down complex techniques into simple, easy to follow steps. It made learning so much easier!.</p>
                        </Col>
                    </Row>

                </div>

                    </Col>
                </Row>
                </div>


            </div>
        </>
    )
}