// function Footer(props) {
//   return <h1>Footer</h1>;
// }

// export default Footer;

const Footer = (props) => {
  return <div className="Footer">
      <div className="socials">
          <a href="https://www.youtube.com/" target="_blank">Youtube <i class="fab fa-youtube"></i></a>
          <a href="https://www.instagram.com/mlaude/" target="_blank">Instagram <i class="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/matthew.laude.52" target="_blank">Facebook <i class="fab fa-facebook"></i></a>
          <a href="https://twitter.com/home" target="_blank">Twitter <i class="fab fa-twitter"></i></a>
      </div>
      
      <div className="more">
          <a href="#"><h4>MORE MATT</h4></a>
          <a href="#"><h4>SHOWER THOUGHTS PODCAST</h4></a>
          <a href="#"><h4>CONTACT</h4></a>
      </div>
      <p>Copyright © 2021 Mott Inc. All rights reservered.</p>
  </div>
}

export default Footer