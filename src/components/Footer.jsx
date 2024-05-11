import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";

function Footer() {
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
        <div>
          <div>
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
      <div>
        i am contacts
        {/* Contact information */}
      </div>
    </div>
  );
}

export default Footer;
