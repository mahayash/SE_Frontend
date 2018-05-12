import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const NavigationBar = () => (
  <Navbar collapseOnSelect fixedTop inverse >
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"> Square Education Institute</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={0}>
          <Link to="/courses/"> Courses</Link>
        </NavItem>
        <NavItem eventKey={1}>
          <Link to="/online"> Online</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/form"> Forms</Link>
        </NavItem>
        <NavItem eventKey={3}>
          <Link to="/students"> Students</Link>
        </NavItem>
        <NavItem eventKey={4}>
          <Link to="/team"> Team</Link>
        </NavItem>
        <NavItem eventKey={5}>
          <Link to="/contact"> Contact</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

// const Header = () => (
//   <div
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div>
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}
//         >
//           Square Education
//         </Link>
//         <h4
//           style={{
//             float: 'right',
//           }}
//         >
//           <Link
//             to="/about/"
//             style={{
//               color: 'white',
//               textDecoration: 'none',
//             }}
//           >
//             {' '}
//             About
//           </Link>
//           <Link
//             to="/team/"
//             style={{
//               color: 'white',
//               textDecoration: 'none',
//             }}
//           >
//             {' '}
//             Team
//           </Link>
//           <Link
//             to="/contact"
//             style={{
//               color: 'white',
//               textDecoration: 'none',
//             }}
//           >
//             {' '}
//             Contact
//           </Link>
//         </h4>
//       </h1>
//     </div>
//   </div>
// )

export default NavigationBar
