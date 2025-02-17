import { ParallaxText } from "./ui/scroll-velocity";

const SkillsSection = () => {
    // Static skill data
    const skills = [
      { _id: 1, name: "React", sequence: 1, enabled: true },
      { _id: 2, name: "Node.js", sequence: 2, enabled: true },
      { _id: 3, name: "Express.js", sequence: 3, enabled: true },
      { _id: 4, name: "Golang", sequence: 4, enabled: true },
      { _id: 5, name: "Dockers", sequence: 5, enabled: true },

    ];
  
    // Sort and filter enabled skills
    const sortedSkills = skills.sort((a, b) => a.sequence - b.sequence);
  
    return (
      <section  className="skills-section bg-black/30">
        <ParallaxText baseVelocity={-5}>
          {sortedSkills.map((skill) =>
            skill.enabled ? (
              <span
                key={skill._id}
                className="text-xl font-semibold uppercase md:text-7xl text-white/60"
              >
                {skill.name} •
              </span>
            ) : null
          )}
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          {sortedSkills.map((skill) =>
            skill.enabled ? (
              <span
                key={skill._id}
                className="text-xl font-semibold uppercase md:text-7xl text-white/60"
              >
                {skill.name} •
              </span>
            ) : null
          )}
        </ParallaxText>
        <ParallaxText baseVelocity={-5}>
          {sortedSkills.map((skill) =>
            skill.enabled ? (
              <span
                key={skill._id}
                className="text-xl font-semibold uppercase md:text-7xl text-white/60"
              >
                {skill.name} •
              </span>
            ) : null
          )}
        </ParallaxText>
      </section>
    );
  };
  
  export default SkillsSection;