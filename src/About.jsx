import React from "react";
import img from "./images/aboutimg.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const About = () => {
  return (
    <>
        <div className="container-fluid">
          <div className="row"> 
              <div className="col">
                <div className="row d-flex justify-content-center">
                <div className="content-session">
                      <h1>About Us</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non minus voluptate dignissimos iure dolore, tenetur eius iste culpa. At enim optio quidem sapiente in error. Distinctio deleniti consequuntur hic consectetur mollitia facere, culpa illum corporis eligendi natus doloremque ex itaque repellendus aperiam animi temporibus, veniam voluptatum maxime minima corrupti aspernatur? Autem culpa quaerat rerum accusantium eos dignissimos aperiam iure quas aut sapiente ea eius minus magnam, quos veritatis neque beatae, cum quae ullam dolore labore nemo iusto officia. Harum, nemo rem ad porro nulla quibusdam, labore sapiente voluptate cumque ut accusamus perspiciatis fugit recusandae. Iure ipsum inventore qui reiciendis porro?
                      </p>
                      <button class="btn btn-outline-primary btn-sm" type="submit">Read More</button>
                       <div className="social">
                            <FacebookIcon/>
                            <InstagramIcon/>
                            <TwitterIcon/>
                        </div> 
                  </div>
                  <div className="about-img">
                      <img src={img}/>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </>
  );
};

export default About;
