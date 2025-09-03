import { MonitorSmartphone, Lightbulb, Layers3, SearchCheck, Code2, BadgeCheck } from 'lucide-react';

const CoreSkills = () => {
  return (
    <section className=" py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">My Core Skills</h2>
        <p className="text-lg text-gray-300 mb-12">
          I love crafting full-stack applications that combine clean code with beautiful UI. My work is rooted in solving real-world problems with curiosity, consistency, and a passion for continuous learning.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Skill Card 1 */}
          <div className="bg-[#111827] rounded-xl p-6 shadow-md hover:shadow-yellow-400/30 transition-all duration-300">
            <MonitorSmartphone size={36} className="text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-400">
              Skilled in creating responsive and accessible UIs using React.js, Tailwind CSS, and Figma for design consistency.
            </p>
          </div>

          {/* Skill Card 2 */}
          <div className="bg-[#111827] rounded-xl p-6 shadow-md hover:shadow-yellow-400/30 transition-all duration-300">
            <Layers3 size={36} className="text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend & APIs</h3>
            <p className="text-gray-400">
              Experienced in building scalable backend systems using Node.js, Express, and MongoDB, with RESTful APIs.
            </p>
          </div>

          {/* Skill Card 3 */}
          <div className="bg-[#111827] rounded-xl p-6 shadow-md hover:shadow-yellow-400/30 transition-all duration-300">
            <SearchCheck size={36} className="text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Debugging & Optimization</h3>
            <p className="text-gray-400">
              Passionate about debugging, performance tuning, and writing clean, maintainable code that scales.
            </p>
          </div>

          {/* Skill Card 4 */}
          <div className="bg-[#111827] rounded-xl p-6 shadow-md hover:shadow-yellow-400/30 transition-all duration-300">
            <Lightbulb size={36} className="text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Creative Problem Solving</h3>
            <p className="text-gray-400">
              I enjoy tackling complex problems and finding intuitive solutions through logic, design, and collaboration.
            </p>
          </div>

          {/* Skill Card 5 */}
          <div className="bg-[#111827] rounded-xl p-6 shadow-md hover:shadow-yellow-400/30 transition-all duration-300">
            <Code2 size={36} className="text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Project Development</h3>
            <p className="text-gray-400">
              Developed multiple real-world projects including Homy, e-commerce, document scanning systems, and dashboards.
            </p>
          </div>

          {/* Skill Card 6 */}
          <div className="bg-[#111827] rounded-xl p-6 shadow-md hover:shadow-yellow-400/30 transition-all duration-300">
            <BadgeCheck size={36} className="text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaboration & Git</h3>
            <p className="text-gray-400">
              Effective team collaborator with hands-on GitHub version control and experience managing multi-feature branches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreSkills;
