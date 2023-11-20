export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Vincent</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">A Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I'am a passionate software developer with a knack from crafting innovative and efficient solutions across the entire technology stack.
            <br /> With a solid background in both front-end and backend development, I thrive on transforming ideas into scalable and user-centric applications. 
          </p>
        </div>
        <a href="mailto:vincentkhamala9@gmail.com" className="btn btn-primary">Get In Touch</a>
        
          <a href="tel:+254710439414" className="btn btn-primary bt1">Call</a>
          <a href="sms:+254710439414" className="btn btn-primary bt2">SMS</a>
        
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
