import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}>{title}</i>
      </h1>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired, //->>ptsr
  icon: PropTypes.string, // ->> pts
};
Navbar.defaultProps = {
  title: "Contact Keepr",
  icon: "fas fa-id-card-alt",
};
export default Navbar;
