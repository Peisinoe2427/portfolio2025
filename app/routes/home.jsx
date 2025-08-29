import PicturePicture from "../components/ProjectPicture";
import Carousel from "../components/Carousel";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router";
import "./home.css";
import Dither from '../components/bits/ditherBg';
import { getAllProjects} from "../utilis/utilis"; 
import ContactSection from "../components/ContactSection.jsx";



export default function Home() {
  const featured = getAllProjects().filter(p => p.featured).slice(0, 3);
  return (
    <main>
      <section className="hero">
        <div className="hero__intro">
          <picture className="img__hero">
            <source
              sizes="(max-width: 600px) 100vw, 600px"
              srcSet="
                /assets/hero/hero_hti4ik_c_scale,w_320.avif 320w,
                /assets/hero/hero_hti4ik_c_scale,w_576.avif 576w,
                /assets/hero/hero_hti4ik_c_scale,w_600.avif 600w"
              type="image/avif"
            />
            <img
              sizes="(max-width: 600px) 100vw, 600px"
              srcSet="
                /assets/hero/hero_tvcykr_c_scale,w_320.png 320w,
                /assets/hero/hero_tvcykr_c_scale,w_363.png 363w,
                /assets/hero/hero_tvcykr_c_scale,w_402.png 402w,
                /assets/hero/hero_tvcykr_c_scale,w_438.png 438w,
                /assets/hero/hero_tvcykr_c_scale,w_472.png 472w,
                /assets/hero/hero_tvcykr_c_scale,w_503.png 503w,
                /assets/hero/hero_tvcykr_c_scale,w_530.png 530w,
                /assets/hero/hero_tvcykr_c_scale,w_558.png 558w,
                /assets/hero/hero_tvcykr_c_scale,w_586.png 586w,
                /assets/hero/hero_tvcykr_c_scale,w_594.png 594w,
                /assets/hero/hero_tvcykr_c_scale,w_600.png 600w" 
              src="/assets/hero/hero_tvcykr_c_scale,w_600.png"
              alt="Picture of Melisa Lauriola"
              width={600}
              height={361}
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          
          <div className="hero__info">
            <p>Portfolio 2025</p>
            <h1>Melisa Lauriola</h1>
            <ul className="heroList">
              <li>UX</li>
              <li> Visual</li>
              <li>Dev</li>
            </ul>
          </div>
        </div>
        
        <div className="hero__text">
          <p className="hero__textTitle">Designing impact,<br /> not pixels</p>
          <div>
            <p>Years of working as a dog trainer and as a team manager taught me to <strong>be observant, lead with empathy,</strong> and <strong>think on my feet</strong>, skills I now use to craft experiences for the person in front of the screen to the community and world they&#39;re part of.</p>
            <Link to="/my-work" className="btn btn--large btn--primary">
              View My Work
            </Link>
          </div>
        </div>
      </section>
      
      <section className="dna">
        <h2 className="leftMargin">My Design DNA</h2>
        <div className="dnaList"> 
          <div className="dnaItem">
            <p className="h5 dnaTitle">Human + Society <br />Centered Mindset</p>
            <p className="dnaText">Crafting experiences that serve individual users but also consider their impact on communities and the whole environment.</p>
          </div>
          <div className="dnaItem">
            <p className="h5 dnaTitle">Analytical & Observant</p>
            <p className="dnaText">I&#39;m at my best in complex spaces, reading patterns and finding clarity where worlds and perspectives collide.</p>
          </div>
          <div className="dnaItem">
            <p className="h5 dnaTitle">Master Planner</p>
            <p className="dnaText">Skilled at breaking down complex projects into structured plans that keep work moving smoothly and on schedule.</p>
          </div>
          <div className="dnaItem">
            <p className="h5 dnaTitle">Cross-Disciplinary</p>
            <p className="dnaText">Blend of UX, visual design, and web development, bridging creative ideas and technical execution.</p>
          </div>
          <div className="dnaItem">
            <p className="h5 dnaTitle">High Empathy</p>
            <p className="dnaText">Striving to understand users beyond surface-level needs, facilitate collaboration in diverse teams and design solutions with systemic sensitivity.</p>
          </div>
          <div className="dnaItem dnaCTA">
            <p className="h5 dnaTitle dnaCTATitle">These are the traits, <br />now meet the human</p>
            <Link to="/about" className="btn btn--large btn--primary btnDna">
              More About Me
            </Link>
          </div>
        </div>
      </section>

      <section className="featuredSection">
        <h2 className="margins">Featured Projects</h2>

        {/* Mobile carousel */}
        <div className="carousel-only">
          <Carousel featured={featured} />
        </div>

        {/* Desktop grid */}
        <div className="grid-only margins">
            {featured.map(p => (
              <ProjectCard key={p.slug || p.id} project={p} variant="stacked" />
            ))}
        </div>
          
        <div className="margins workCTA">
          <p className="large">Curious for more? <br />Explore the rest</p>
          <Link to="/my-work" className="btn btn--large btn--primary">
            View All My Work
          </Link>
        </div>
      </section>

      <section className="dither">
        <h2 className="display ditherTitle">Pixel That Serve People</h2>
        <Dither
          waveColor={[0.717, 0.757, 0.996]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.2}
          colorNum={3}
          waveAmplitude={0.7}
          waveFrequency={0.7}
          waveSpeed={0.08}
        />
      </section>
      
      <ContactSection/>
    </main>
  );
}


