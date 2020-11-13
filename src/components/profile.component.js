import React, { Component } from "react";
import axios from "axios";
export default class Profile extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron text-center">
          <div class="container">
            <div class="row">
              <div class="col">
                <img
                  src="https://scontent-atl3-2.xx.fbcdn.net/v/t1.0-1/p480x480/83515734_10218933948533572_3539986490031341568_n.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=SHdWaCDPxzMAX_8NFQE&_nc_ht=scontent-atl3-2.xx&tp=6&oh=64f75dd5c153c4937980873a508d28c7&oe=5FD1F293"
                  class="img-fluid img-thumbnail rounded-circle"
                  alt="..."
                />
              </div>
            </div>
            <div class="row justify-content-center">
              <div>
                <h1 class="">Azim Shaik </h1>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/000000/instagram-verification-badge.png" />
              </div>
            </div>
            <p>Founder at CEO at Contaqt</p>
            <p>Cleveland, Ohio</p>
            <button type="button" class="btn btn-secondary">
              Connect
            </button>
            <p>
              {" "}
              <a href="tel:919-889-2549">Call</a>|{" "}
              <a href="sms:919-889-2549">Text</a> |{" "}
              <a href="mailto:azimshaik91@gmail.com">Email</a>
            </p>
            <hr />
            <p class="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
            <div class="row">
              <div class="col">Quora</div>
              <div class="col"> HackerRank</div>
              <div class="col"> Medium</div>
              <div class="col"> Stackoverflow</div>
            </div>
            <div class="row">
              <div class="col">Leetcode</div>
              <div class="col"> Github</div>
              <div class="col"> CodePen</div>
              <div class="col"> JSFiddle</div>
            </div>
            <div class="row">
              <div class="col">Behance</div>
              <div class="col"> Dribbble</div>
              <div class="col"> YouTube</div>
              <div class="col">
                {" "}
                <a href="https://www.instagram.com/azimshaik1/">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
