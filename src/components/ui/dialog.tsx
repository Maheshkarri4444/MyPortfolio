import { useProjects } from "../../utils/project-context";
import { ExternalLink, Github, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface DialogProps {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
}

export const Dialog = ({ showDialog, setShowDialog }: DialogProps) => {
  const { singleProject } = useProjects();

  return (
    <>
      {showDialog && (
        <div
          className="fixed inset-0 z-50 grid bg-black/50 backdrop-blur-md place-items-center"
          onClick={(e) => e.target === e.currentTarget && setShowDialog(false)}
        >
          <div className="bg-black/80 w-11/12 md:w-1/2 h-4/5 md:h-[90%] overflow-hidden rounded-xl">
            {singleProject && (
              <div className="relative ">
                <button
                  className="absolute grid text-white bg-black border rounded-full top-4 right-4 size-8 border-white/40 place-items-center"
                  onClick={() => setShowDialog(false)}
                >
                  <X size={20} />
                </button>
                <img
                  src={singleProject.image.url}
                  width={300}
                  height={300}
                  alt={singleProject.title}
                  className="w-full h-full aspect-video md:aspect-[12/6] object-cover object-center"
                />
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-4xl font-bold">
                      {singleProject.title}
                    </h5>
                    <div className="flex items-center gap-4">
                      <Link to={singleProject.githuburl}>
                        <Github />
                      </Link>
                      <Link to={singleProject.liveurl}>
                        <ExternalLink />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 py-3">
                    {singleProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-sm border border-white/40 rounded-2xl"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-white/50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, tempora. Officiis eveniet harum nemo sed sint
                    distinctio fugiat earum cumque aliquid in magnam nam odio
                    molestias architecto veniam, asperiores voluptates?
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
