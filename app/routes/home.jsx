import PictureTemplate from "../components/PictureTemplate";
import Carousel from "../components/Carousel";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router";
import "./home.css";
import Dither from '../components/bits/ditherBg';
import { getAllProjects} from "../utilis/utilis"; 




export default function Home() {
  const featured = getAllProjects().filter(p => p.featured).slice(0, 3);
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
        <div className="dnaList"> 
          <div className="dnaItem">
            <p className="h5 dnaTitle">Human + Society <br />Centered Mindset</p>
            <p className="dnaText">Crafting experiences that serve individual users but also consider their impact on communities and the whole environment.</p>
          </div>
          <div className="dnaItem">
            <p className="h5 dnaTitle">Analytical & Observant</p>
            <p className="dnaText">I’m at my best in complex spaces, reading patterns and finding clarity where worlds and perspectives collide.</p>
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

      <section >
        <h2 className="margins">Featured Projects</h2>

        {/* Mobile carousel */}
        <div className="carousel-only">
          <Carousel featured={featured} />
        </div>

        {/* Desktop grid */}
        <div className="grid-only margins">
          <div className="projects__grid">
            {featured.map(p => (
              <ProjectCard key={p.slug || p.id} project={p} variant="default" />
            ))}
          </div>
        </div>
          
        <div className="margins">
          <p className="large">Curious for more? Explore the rest</p>
          <Link to="/projects" className="btn btn--large btn--primary">
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
          mouseRadius={0.5}
          colorNum={6}
          waveAmplitude={0.2}
          waveFrequency={0.1}
          waveSpeed={0.08}
        />
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