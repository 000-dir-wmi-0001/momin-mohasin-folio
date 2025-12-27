type ProjectStatus = "completed" | "published" | "inprogress";

interface StatusBadgeProps {
  status: string; // 👈 important
}

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  completed: {
    label: "Completed",
    className:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-emerald-500/20",
  },
  published: {
    label: "Published",
    className:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-emerald-500/20",
  },
  inprogress: {
    label: "In Progress",
    className:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 ring-amber-500/30",
  },
};

const fallbackConfig = {
  label: "Unknown",
  className:
    "bg-gray-500/10 text-gray-600 dark:text-gray-400 ring-gray-500/20",
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const config =
    statusConfig[status as ProjectStatus] ?? fallbackConfig;

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium
        backdrop-blur-md ring-1 shadow-sm
        ${config.className}`}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;
