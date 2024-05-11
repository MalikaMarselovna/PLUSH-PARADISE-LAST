import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";

function Footer() {
    const
  return (
    <div className="flex items-center justify-around p-2">
      <div className="flex-1 flex  flex-col flex-wrapcp-2">
        {/* Store information */}
        <h1 className="text-[25px]">Plush Paradise crochet stuffed toys</h1> 

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eveniet
          cum, earum laudantium harum, qui ipsam rem suscipit sit laborum dolore
          totam impedit voluptates. Sunt sapiente vel commodi amet expedita.
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={}>
            <Facebook />
          </div>
          <div>
            <Instagram />
          </div>
          <div>
            <Twitter />
          </div>
          <div>
            <YouTube />
          </div>
          <div>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2">
        contact div
      </div>
    </div>
  );
}

export default Footer;
