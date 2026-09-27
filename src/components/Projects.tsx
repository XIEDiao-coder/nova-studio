import { projects } from "@/content/home";
import MeetingMockup from "./mockups/MeetingMockup";
import CommerceMockup from "./mockups/CommerceMockup";
import DeveloperMockup from "./mockups/DeveloperMockup";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal>
          <div className="heading-row">
            <SectionHeading
              label="SELECTED CONCEPTS"
              title="不止想象，看见可能。"
              description="三个概念项目，探索不同产品的最佳表达。"
            />
            <span className="concept-note">
              <span /> CONCEPT WORK · 非客户项目
            </span>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`project-card project-${project.id}`}
              >
                <div className="project-stage">
                  <div className="project-stamp">
                    {String(index + 1).padStart(2, "0")} / CONCEPT DEMO
                  </div>
                  {project.id === "meeting" ? (
                    <>
                      <div className="project-meeting-copy">
                        <span className="orbit-word">✳ orbit</span>
                        <h3>
                          Every meeting.
                          <br />A step forward.
                        </h3>
                        <p>
                          Less note-taking.
                          <br />
                          More moving forward.
                        </p>
                        <span className="project-demo-label">
                          AI MEETING ASSISTANT
                        </span>
                      </div>
                      <div className="project-meeting-window">
                        <MeetingMockup compact />
                      </div>
                    </>
                  ) : project.id === "commerce" ? (
                    <CommerceMockup />
                  ) : (
                    <DeveloperMockup />
                  )}
                </div>
                <div className="project-info">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.name}</h3>
                  </div>
                  <span className="project-number">0{index + 1}</span>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
