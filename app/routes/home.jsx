import PictureTemplate from "../components/PictureTemplate";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import PixelTrail from '../components/bits/PixelTrail';
import { Link } from "react-router";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Designing for impact beyond the screen</h1>
        <p>Years of working as a dog trainer and as a team manager taught me to be observant, lead with empathy, and think on my feet, skills I now use to craft experiences for the person in front of the screen to the community and world they’re part of. </p>
        <Link to="/projects" className="btn btn--large btn--primary">
          View My Work
        </Link>
        <div>
            <p className="h5">Melisa Lauriola</p>
            <p className="large">UX</p>
            <p className="large">VISUAL DESIGN</p>
            <p className="large">WEB DEV</p>
        </div>
      </section>
      
      <section className="dna">
        <h2>My Design DNA</h2>
        <div className="dna-list"> 
          <div className="dna-item">
            <p className="h5">Human + Society Centered Mindset</p>
            <p>Crafting experiences that serve individual users but also consider their impact on communities and the whole environment.</p>
          </div>
          <div className="dna-item">
            <p className="h5">Analytical & Observant</p>
            <p>I’m at my best in complex spaces, reading patterns and finding clarity where worlds and perspectives collide.</p>
          </div>
          <div className="dna-item">
            <p className="h5">Master Planner</p>
            <p>Skilled at breaking down complex projects into structured plans that keep work moving smoothly and on schedule.</p>
          </div>
          <div className="dna-item">
            <p className="h5">Cross-Disciplinary</p>
            <p>Blend of UX, visual design, and web development, bridging creative ideas and technical execution.</p>
          </div>
          <div className="dna-item">
            <p className="h5">High Empathy</p>
            <p>Striving to understand users beyond surface-level needs, facilitate collaboration in diverse teams and design solutions with systemic sensitivity.</p>
          </div>
          <div className="dna-item">
            <p className="h5">These are the traits, now meet the human</p>
            <Link to="/about" className="btn btn--large btn--primary">
              More About Me
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2>Featured Projects</h2>
        <Link to="/projects" className="btn --large btn--primary">
          View All My Work
        </Link>
      </section>

      <section>
        <h2 className="display">Pixel That Serve People</h2>
      </section>

      
    </main>
  );
}
{/* PIXEL TRAIL */}
    {/* <div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
      <PixelTrail
        gridSize={50}
        trailSize={0.1}
        maxAge={250}
        interpolate={5}
        color="#fff"
        gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
      />
    </div> */}

// import PictureByTemplate from "~/components/PictureByTemplate";

// const widths = [901, 981, 1059, 1124, 1190, 1260, 1325, 1395, 1463, 1534, 1600, 1613];

// <PictureByTemplate
//   avifTemplate="/assets/hero/city/city_zlpk8g_c_scale,w_{w}.avif"
//   fallbackTemplate="/assets/hero/city/city_a5wezl_c_scale,w_{w}.png"
//   widths={widths}
//   sizes="(max-width: 1613px) 100vw, 1613px"
//   alt="woodprint image of the city of Antwerp"
//   fetchPriority="high"
//   width={1613}
//   height={756}
// />

 {/* <div className="hero__image">
        <PictureTemplate
          template="hero/city/city_zlpk8g_c_scale"
          widths={[901, 981, 1059, 1124, 1190, 1613]}
          alt="City view"
          fetchPriority="high"
        />
      </div> */}