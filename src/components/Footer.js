import React from "react";
import "../scss/footer.scss";
import instagram from "../assests/instagram.png"
const Footer = () => {
  return (
    <>
      <footer id="foooter">
        <div className="container">
          <div className="top">
            <h2>
              CONTACT</h2>

            <div className="icons">
              <a href="https://T.me/PepeWifeEth" target="_blank">
                <img src="https://static.wixstatic.com/media/1f3f2b_af942b4585dd4bf9baaa6e151c02f1b4~mv2.png/v1/fill/w_57,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twttttee2.png" alt="" />
              </a>
              <a href="https://Twitter.com/PepeWife" target="_blank">
                <img src="https://static.wixstatic.com/media/1f3f2b_f59a557a4c72456581fa206a9247dcac~mv2.png/v1/fill/w_57,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twtttt.png" alt="" />
              </a>

            </div>
            <p>
              <a href="mailto:contact@pepewife.io">contact@pepewife.io</a>
            </p>
            <p>
              $PEPEWIFE Pepe Wife coin has no association with Matt Furie or his creation Pepe the Frog. This is a fan token and community driven project

            </p>
            <p>
              $PEPEWIFE is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only
            </p>
          </div>
        </div>
      </footer>
      <div className="bottom">
        © 2023 by PEPE WIFE. All rights reserved!
      </div>
    </>
  );
};

export default Footer;
