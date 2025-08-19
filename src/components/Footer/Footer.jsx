import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube_icon} alt="youtube_icon" />
        <img src={instagram_icon} alt="instagram_icon" />
        <img src={facebook_icon} alt="facebook_icon" />
        <img src={twitter_icon} alt="twitter_icon" />
      </div>
      <ul>
        <li>Audio and Subtitles</li>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Cookie Preferences</li>
        <li>Legal Notices</li>
        <li>Account</li>
        <li>Ways to Watch</li>
        <li>Corporate Information</li>
        <li>Only on Netflix</li>
        <li>Terms of Use</li>
      </ul>
      <p className="copyright-text">© 1997-2025 Netflix, Inc.</p>
    </div>
  );
}

export default Footer