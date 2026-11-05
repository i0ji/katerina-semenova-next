import projectManifest from '@/data/projects.json';
import { Header, Slides, Footer } from '@/components/index';

export default function Home() {
  return (
    <>
      <Header />
      {projectManifest.map((project, index) => (
        <Slides
          key={project.description}
          slides={project.slides}
          description={project.description}
          isFirstProject={index === 0}
        />
      ))}
      <Footer />
    </>
  );
}
