import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const className =
  "text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg";

const ProjectContent = ({ name, description, scope }) => (
  <>
    <div className="flex min-w-0 items-center justify-center space-x-2">
      <h2 className="shrink-0 text-foreground">{name}</h2>
      <p className="truncate text-muted hidden sm:inline-block">{description}</p>
    </div>
    <div className="mx-2 mb-1 flex-1 self-end border-b border-dashed border-muted bg-transparent" />
    <p className="shrink-0 text-muted sm:text-foreground">{scope}</p>
  </>
);

const ProjectLayout = ({ name, description, scope, demoLink }) => {
  if (!demoLink) {
    return (
      <motion.div variants={item} className={className}>
        <ProjectContent name={name} description={description} scope={scope} />
      </motion.div>
    );
  }

  return (
    <motion.div variants={item} className="w-full">
      <Link
        href={demoLink}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        <ProjectContent name={name} description={description} scope={scope} />
      </Link>
    </motion.div>
  );
};

export default ProjectLayout;
