import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex flex-col justify-center w-[60%] bg-black text-white p-6 rounded-md text-lg gap-2">
        <p>
          To use Airtm, you must confirm your email address by accessing the
          link we sent you by email. If you haven&apos;t received it yet, please
          wait a few minutes or check your spam folder.
        </p>
        <p>
          If you have any questions, please{" "}
          <Link className="underline">contact us.</Link>
        </p>
      </div>
    </div>
  );
};

export default Notification;
