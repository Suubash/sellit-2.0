import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { default as cn } from "classnames";

interface IAlert {
  type?: String;
  message: String;
}

export const Alert = (props: IAlert) => {
  const { type, message } = props;

  return (
    <div
      className={cn(
        "flex p-4 mb-2 rounded-sm bg-dark-secondary text-light",
        type === "success" && "bg-green-600/20 text-green-600",
        type === "warning" && "bg-yellow-600/20 text-yellow-600",
        type === "danger" && "bg-red-600/20 text-red-600"
      )}
      role="alert"
    >
      <InformationCircleIcon className="flex-shrink-0 w-5 h-5" />
      <span className="sr-only">Info</span>
      <div className="ml-3 text-sm font-medium">{message}</div>
      <button
        type="button"
        className={cn(
          "ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 bg-dark-tertiary ",
          type === "success" &&
            "bg-green-600/20 focus:ring-green-600 hover:bg-green-600/20",
          type === "warning" &&
            "bg-yellow-600/20 focus:ring-yellow-600 hover:bg-yellow-600/20",
          type === "danger" &&
            "bg-red-600/20 focus:ring-red-600 hover:bg-red-600/20"
        )}
      >
        <span className="sr-only">Close</span>
        <XMarkIcon className="w-5 font-medium" />
      </button>
    </div>
  );
};
