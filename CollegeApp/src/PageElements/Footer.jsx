import React from 'react'
import '../ElementStyles/FooterStyles.css'

function Footer() {
  return (

<div id='footer'>
    <div id='footerHeading'><p>ANORG TECHNOLOGIES PVT. LTD.</p></div>

        <div id='lists' >

            <div id='list1'>
            <ul>
                <li>Terms and conditions</li><br/>
                <li>Privacy policy</li><br/>
                <li>User agreement</li><br/>
            </ul>
            </div>

            <div id='list2'>
            <ul>
                <li>About</li><br/>
                <li>Services</li><br/>
                <li>Tools</li><br/>
            </ul>
            </div>

            <div id='list3'>
            <ul>
                <li>Instagram</li><br/>
                <li>Facebook</li><br/>
                <li>LinkedIn</li><br/>
            </ul>
            </div>

            <div id='list4'>
            <ul>
                <li>Support</li><br/>
                <li>Contact</li><br/>
                <li>Book a Call</li><br/>
            </ul>
            </div>

        </div>

            <div id='logos'>
                 <ul>
                <li>Insta</li>
                <li>FB</li>
                <li>LIn</li>
            </ul>
            </div>

</div>
  )
}

export default Footer