import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar expand="lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center'>
              <svg width="48px" height="48px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M413.72 19.395v98.64l-46.116 46.117-34.198-34.2-6.607 6.61-141.52 141.516 113.513 113.51-52.775 52.773.002 50.31h18.687v-42.568l47.3-47.3 21.4 21.4 148.122-148.124-60.165-60.164 67.447-67.45V19.395h-18.687v123.33l-61.975 61.975-27.332-27.333 51.59-51.59V19.395H413.72zM19.36 30.303V48.99h186.607l44.254 44.254c-2.56 4.393-4.032 9.496-4.032 14.947 0 16.422 13.312 29.736 29.732 29.736s29.732-13.314 29.732-29.735c0-16.42-13.312-29.73-29.732-29.73-4.143 0-8.088.85-11.672 2.382l-50.54-50.54H19.36zm0 55.478v18.69l131.126.003 44.254 44.254c-2.56 4.392-4.035 9.496-4.035 14.947 0 16.42 13.312 29.732 29.732 29.732s29.733-13.312 29.733-29.732-13.312-29.733-29.732-29.733c-4.144 0-8.088.85-11.672 2.382l-50.54-50.54H19.362zm83.386 55.482l-83.385.002v18.69l75.646-.003 44.254 44.26c-2.56 4.39-4.033 9.496-4.033 14.946 0 16.42 13.312 29.733 29.732 29.733s29.73-13.313 29.73-29.734c0-16.42-13.31-29.734-29.73-29.734-4.145 0-8.09.85-11.675 2.383l-50.54-50.543zm230.66 15.12L455.1 278.08 333.406 399.77 211.71 278.08l121.696-121.695zm-1.254 27.388l-94.574 94.574 95.012 95.015 13.215-13.214-81.797-81.8 81.36-81.362-13.216-13.214zm-312.79 21.558v51.207l160.13 160.13v78.005h18.69V384.146L19.362 205.328zm346.51 8.397L352.66 226.94l51.48 51.482-51.77 51.77 13.218 13.214 64.982-64.984-64.695-64.697zm-29.93 33.16c-17.45 0-31.592 14.147-31.592 31.594 0 17.445 14.143 31.59 31.59 31.59 17.45 0 31.593-14.145 31.593-31.59 0-17.45-14.143-31.595-31.592-31.595zM19.36 295.35v51.207l94.886 94.88v53.233h18.688v-85.75L19.362 295.35zm427.378 73.154c-16.42 0-29.732 13.312-29.732 29.732s13.312 29.735 29.732 29.735c3.994 0 7.802-.794 11.28-2.222l36.62 36.615v-26.427l-22.402-22.4c2.688-4.47 4.237-9.704 4.237-15.3 0-16.42-13.314-29.732-29.735-29.732zM19.36 386.19V437.4l31.294 31.29-.002 25.982H69.34l.006-58.496L19.36 386.19zm371.902 37.796c-16.42 0-29.733 13.312-29.733 29.733 0 16.42 13.31 29.73 29.732 29.73 3.513 0 6.882-.612 10.01-1.73l12.955 12.95h26.43l-24.58-24.578c3.104-4.697 4.917-10.322 4.917-16.373 0-16.422-13.312-29.734-29.732-29.734z"/></svg>
              <span className='mx-2 text-light lh-1 fw-semibold'>
                Department of
                <br></br>
                Electronics and
                <br></br>
                Telecommunication
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About us</Nav.Link>
              <Nav.Link href='/blog' className='text-uppercase'>Events</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Get in touch</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <footer>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-4'>
              <Link to="/contact">
                <button type='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Get In Touch</button>
              </Link>
              <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
                <Link to="/contact">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" class="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#dc3545"><path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zM8.95 9.4H6.16v8.1h2.8V9.4zm6.84-.19c-1.32 0-2 .63-2.38 1.16l-.13.18V9.4h-2.79l.01.49V17.5h2.78v-4.52a1.52 1.52 0 0 1 1.52-1.64c.96 0 1.37.66 1.41 1.66v4.5H19v-4.64c0-2.49-1.37-3.65-3.2-3.65zM7.58 5.5C6.62 5.5 6 6.1 6 6.9c0 .73.54 1.32 1.38 1.4h.18c.97 0 1.57-.62 1.57-1.4-.01-.8-.6-1.4-1.55-1.4z" /></svg>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" class="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </li>
                </Link>
              </ul>
            </div>
            <div className='col-md-7 col-lg-6'>
              <div className='d-row d-md-flex justify-content-between align-items-center'>
                <div className='col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0'>
                  <ul className='footer-navigation list-unstyled mb-0'>
                    <Link to="/" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Home</li>
                    </Link>
                    <Link to="/about" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>About us</li>
                    </Link>
                    <Link to="/blog" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Events</li>
                    </Link>
                    <Link to="/contact" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Get In Touch</li>
                    </Link>
                  </ul>
                </div>
                <div className='col-12 col-md-6 col-lg-7'>
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <p>Main Address - 1st Lobby, Main building, IIEST Shibpur</p>
                    </li>
                    <li>
                      <p>Phone Number - 033-26684561-63 (Extn.270)</p>
                    </li>
                    <li>
                      <p>Email - hod@telecom.iiests.ac.in</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-body-tertiary'>
          <div className='container'>
            <p className='p-3 m-0 text-center'>copyright @ ASETE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
