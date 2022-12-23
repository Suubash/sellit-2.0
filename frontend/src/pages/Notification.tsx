import { Alert } from "../components/shared";

export const Notification = () => {
  return (
    <div className="bg-gradient-to-b from-dark-secondary to-dark text-light">
      <div className="pt-10 padding-custom-x">
        <h2 className="text-xl font-black pb-3 tracking-tight leading-tight">
          Notifications
        </h2>

        <Alert
          message={
            "A simple info alert with an example. Give it a click if you like."
          }
        />
        <Alert
          message={
            "A simple info alert with an example. Give it a click if you like."
          }
          type="success"
        />
        <Alert
          message={
            "A simple info alert with an example. Give it a click if you like."
          }
          type="warning"
        />
        <Alert
          message={
            "A simple info alert with an example. Give it a click if you like."
          }
          type="danger"
        />
      </div>
    </div>
  );
};
