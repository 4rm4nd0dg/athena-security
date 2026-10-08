import React from "react";

interface PlaceholderNoticeProps {
  label?: string;
  inline?: boolean;
}

export const PlaceholderNotice: React.FC<PlaceholderNoticeProps> = ({
  label = "À COMPLÉTER PAR LE CLIENT",
  inline = true,
}) => {
  if (inline) {
    return (
      <span className="inline-flex items-center px-2 py-0.5 text-xs font-mono font-medium bg-amber-100 text-amber-900 border border-amber-300 rounded-[2px] ml-1 select-none" title="Information non spécifiée - à fournir par la société ATHENA SECURITY">
        [{label}]
      </span>
    );
  }

  return (
    <div className="p-3 my-2 text-xs font-mono bg-amber-50 text-amber-900 border-l-4 border-amber-500 rounded-[2px]">
      <strong className="block mb-0.5">Information en attente :</strong>
      <span>[{label}]</span>
    </div>
  );
};
