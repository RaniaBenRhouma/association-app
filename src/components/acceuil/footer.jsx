import React from 'react'

const Footer = () => {
    let copyR= "Copyright © 2020 Association Co3 - By Rania Ben Rhouma and GO MY C{>}DE encadrement";
    return ( 
        <div className="footDiv">

            <div className="barcontact">

            <a href="https://www.google.com/maps/place/CO3/@34.7314501,10.7556005,16z/data=!4m8!1m2!2m1!1sassociation+co3+sfax!3m4!1s0x0:0xf70e7840fc0f868b!8m2!3d34.7314501!4d10.7599778" target="_blank"><i class="fas fa-map-marker-alt"></i></a>
            <a href="mailto:associationco3@gmail.com" target="_blank"><i class="fas fa-at"></i></a>
            <a href="https://www.facebook.com/CO3SFAX" target="_blank"><i class="fab fa-facebook-f"></i></a>             
            </div>
           
            <div><i class="fas fa-phone"></i> 24 600 647 </div>


            
           

            <a href="#top"><i class="fas fa-chevron-circle-up"></i></a>
    <div className="copyrirht">{copyR}</div>

        </div>
     );
}

export default Footer;