import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  CircleFadingArrowUpIcon,
  OctagonAlert,
  ShieldAlert,
} from "lucide-react";


export default function AlertCalloutDemo() {
  return (
    <div className="w-full space-y-4">
      <Alert className="bg-emerald-600/10 dark:bg-emerald-600/15 text-emerald-500 border-none">
        <CircleFadingArrowUpIcon className="size-4" />
        <AlertTitle>Your action has been completed successfully.</AlertTitle>
      </Alert>
      <Alert className="bg-blue-500/10 dark:bg-blue-600/20 text-blue-500 border-none">
        <CircleFadingArrowUpIcon className="size-4" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
      <Alert className="bg-amber-600/10 dark:bg-amber-600/15 text-amber-500 border-none">
        <ShieldAlert className="size-4" />
        <AlertTitle>Changes will overwrite existing data.</AlertTitle>
      </Alert>
      <Alert className="bg-destructive/10 dark:bg-destructive/15 text-destructive border-none">
        <OctagonAlert className="size-4" />
        <AlertTitle>
          Unable to process your request. Please try again later.
        </AlertTitle>
      </Alert>
    </div>
  );
}

export const Warning = ({ children }: { children: React.ReactNode }) => {
  return (
    <Alert className="flex items-center bg-amber-600/10 dark:bg-amber-600/15 text-amber-500">
      <div className="pr-4">
      <ShieldAlert className="size-4" />
      </div>
      <div className="flex flex-col gap-0">
        <AlertTitle>
          Warning
        </AlertTitle>
        <AlertDescription>{children}</AlertDescription>
      </div>
    </Alert>
  );
}


export const Note = ({ children }: { children: React.ReactNode }) => {
  return (
    <Alert className="flex items-center bg-blue-500/10 dark:bg-blue-600/20 text-blue-500 ">
      <div className="pr-4">
<CircleFadingArrowUpIcon className="size-4" />
      </div>
      <div className="flex flex-col gap-0">
        <AlertTitle>
          Note
        </AlertTitle>
        <AlertDescription>{children}</AlertDescription>
      </div>
    </Alert>
  );
}
