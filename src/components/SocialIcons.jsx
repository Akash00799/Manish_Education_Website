import React from "react";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const SOCIAL_LINKS = [
  {
    href: "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=ARpgrqeF8wB5pEZ9RgasDWKOgOSenZ1nnhLQAoZ6-F3H1bY34PZ8yFlb-y9NSa6yde2RSWuz0elOIg&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
    icon: <SiGmail />,
  },
  {
    href: "https://www.facebook.com/",
    icon: <FaFacebookF />,
  },
  {
    href: "https://www.linkedin.com/checkpoint/rm/sign-in-another-account?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin",
    icon: <AiFillLinkedin />,
  },
];

const SocialIcons = React.memo(() => {
  return (
    <div className="social-icons">
      {SOCIAL_LINKS.map(({ href, icon }, index) => (
        <a
          key={index}
          href={href}
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </a>
      ))}
    </div>
  );
});

export default SocialIcons;
