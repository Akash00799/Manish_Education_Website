import React, { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaComments,
  FaSearch,
} from "react-icons/fa";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchBarRef = useRef(null);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">MK Classes</Link>
      </div>
      <ul
        className={`${styles.navLinks} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
      >
        <li className={styles.dropdown}>
          <Link to="/home">Home</Link>
          <ul className={styles.dropdownContent}>
            <li>
              <Link to="/home/overview">Overview</Link>
            </li>
            <li>
              <Link to="/home/updates">Updates</Link>
            </li>
            <li>
              <Link to="/home/announcements">Announcements</Link>
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <Link to="/courses">Courses</Link>
          <ul className={styles.dropdownContent}>
            <li>
              <Link to="/courses/web-development">Web Development</Link>
            </li>
            <li>
              <Link to="/courses/data-science">Data Science</Link>
            </li>
            <li>
              <Link to="/courses/design">Design</Link>
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <Link to="/teachers">Teachers</Link>
          <ul className={styles.dropdownContent}>
            <li>
              <Link to="/teachers/list">Our Teachers</Link>
            </li>
            <li>
              <Link to="/teachers/join">Join as a Teacher</Link>
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <Link to="/blogs">Blogs</Link>
          <ul className={styles.dropdownContent}>
            <li>
              <Link to="/blogs/tech">Tech</Link>
            </li>
            <li>
              <Link to="/blogs/lifestyle">Lifestyle</Link>
            </li>
            <li>
              <Link to="/blogs/education">Education</Link>
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <Link to="/contact-us">Contact Us</Link>
          <ul className={styles.dropdownContent}>
            <li>
              <Link to="/contact/email">Email</Link>
            </li>
            <li>
              <Link to="/contact/phone">Phone</Link>
            </li>
            <li>
              <Link to="/contact/address">Address</Link>
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <Link to="/about-us">About Us</Link>
          <ul className={styles.dropdownContent}>
            <li>
              <Link to="/about-us/company">Our Company</Link>
            </li>
            <li>
              <Link to="/about-us/team">Team</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={styles.searchBarContainer} ref={searchBarRef}>
          <button className={styles.searchButton} onClick={toggleSearchBar}>
            <FaSearch />
          </button>
          <input
            type="text"
            className={`${styles.searchInput} ${
              isSearchOpen ? styles.searchInputActive : ""
            }`}
            placeholder="Search..."
          />
        </li>
        <li className={styles.chatIcon}>
          <Link to="/chatPage">
            <FaComments size={22} />
          </Link>
        </li>
        <li className={styles.cartIcon}>
          <Link to="/cart">
            <FaShoppingCart size={22} />
            {totalQuantity > 0 && (
              <span className={styles.cartCount}>{totalQuantity}</span>
            )}
          </Link>
        </li>
      </ul>
      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
