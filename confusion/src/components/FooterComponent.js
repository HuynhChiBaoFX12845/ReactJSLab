import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="contactus.html">Contact</a></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              Vinhome, Quận 9 HCM<br />
		              Thành phố Tây Ninh<br />
		              Việt Nam<br />
		              <i className="fa fa-phone fa-lg"></i>: 0825999871<br />
		              <i className="fa fa-fax fa-lg"></i>: 0825999871<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         baohc110902@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a> <br/>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/profile.php?id=100011720023694"><i className="fa fa-facebook"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>Liên hệ để làm việc trực tiếp</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;