import PictureTemplate from "../components/PictureTemplate";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import PixelTrail from '../components/bits/PixelTrail';

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero__content">
          <h1>Créations Mélioristes</h1>
          <p>Making the world a little better, one design at a time.</p>
          <a href="/projects" className="btn">
            View My Work
          </a>
        </div>
        {/* <div className="hero__image">
          <PictureTemplate
            template="hero/city/city_zlpk8g_c_scale"
            widths={[901, 981, 1059, 1124, 1190, 1613]}
            alt="City view"
            fetchPriority="high"
          />
        </div> */}
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {/* {projects
            .filter((p) => p.featured)
            .map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))} */}
        </div>
      </section>

      <section className="about-preview">
        <h2>About Me</h2>
        <p>
          I’m a UX, web design, and development specialist based in Belgium.
          I combine creativity with technical expertise to craft meaningful,
          engaging experiences.
        </p>
        <a href="/about" className="btn">Learn More</a>
      </section>



      
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

    </main>
  );
}


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