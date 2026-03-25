import * as React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type Props = {
  url?: string;
  title?: string;
  className?: string;
  onTrigger?: () => void;
  children: React.ReactNode;
};

function withEmbedQuery(url: string) {
  return url.includes("?") ? `${url}&embed=1` : `${url}?embed=1`;
}

export default function CalBookingModal({
  url = "https://cal.com/clipotmx/30min",
  title = "Agenda tu diagnóstico",
  className,
  onTrigger,
  children,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const src = withEmbedQuery(url);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className={className}
          onClick={() => {
            onTrigger?.();
          }}
        >
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="w-[min(96vw,1100px)] max-w-none p-0 overflow-hidden">
        <div className="px-6 pt-6">
          <div className="text-base font-semibold">{title}</div>
        </div>
        <div className="h-[min(78vh,760px)] w-full">
          <iframe
            title={title}
            src={src}
            className="h-full w-full"
            allow="camera; microphone; fullscreen; payment"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
