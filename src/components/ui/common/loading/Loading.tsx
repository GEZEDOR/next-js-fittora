import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
      <span className="ml-2 text-sm text-gray-500">Загрузка...</span>
    </div>
  );
}
