import React from "react";

function Footer() {
  return (
    <div className="row ppc-background p-2 justify-content-center">
      <div className="col-auto d-flex align-items-center">
        Donations: PM7jjBUPjzpkZy1UZtD7mvmHoXJ2BGvbx9
      </div>
      <div className="col-auto d-flex align-items-center">
        <span>
          Icons:{" "}
          <a href="https://sumcoin.org" target="_blank" rel="noreferrer">
            icon
          </a>
        </span>
      </div>
      <div className="col-12 col-sm-auto d-flex align-items-center">
        <a
          href="https://github.com/sumcoinlabs/sumcoin.rip"
          target="_blank"
          rel="noreferrer"
        >
          <img src="assets/img/github.png" alt="github icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
