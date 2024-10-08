"use client"
import React, {Component, useState} from 'react';
// import projectModal from "./projectModal"

function Footer() {
  return ( 

          <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <p 
                class="col-md-10 mb-0" 
                style = {{
                  color: "rgba(255,255,255,0.5)",
                }} 
              > © 2024 Sean Biava, All Rights Reserved</p>
          
              <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
              </a>



            
              {/* <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">Features</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">Pricing</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">FAQs</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">About</a></li>
              </ul> */}
            </footer>
          </div>


   );
}

export default Footer;
