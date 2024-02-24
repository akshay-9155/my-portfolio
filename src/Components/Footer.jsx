import React from "react";

const Footer = () => {
  return (
    <div className="pt-32 px-5 sm:px-20 bg-zinc-700">
      <div className="text-[4.9rem] leading-snug tracking-tighter font-serif sm:hidden">
        <h1>you can</h1>
        <h1>get in</h1>
        <h1>touch with</h1>
        <h1>me via</h1>
        <h1>
          <a
            className=" text-red-400 italic hover:line-through"
            href="mailto:akshayanand9162@gmail.com"
            target="null"
          >
            mail
          </a>{" "}
          or
        </h1>
        <h1>
          <a
            className=" text-yellow-600 italic hover:line-through"
            href="https://www.instagram.com/_a__kshay?igsh=MXJ6amwxcWdtZm1xOQ=="
            target="null"
          >
            instagram
          </a>
        </h1>
        <h1>
          or{" "}
          <a
            className=" text-sky-300 italic hover:line-through"
            href="https://www.linkedin.com/in/akshay-anand-7aa481288"
            target="null"
          >
            linkedIn
          </a>
          .
        </h1>
      </div>
      <div className=" hidden sm:block text-[10vw] leading-snug tracking-wide font-serif">
        <h1>
          you can get in touch with me via{" "}
          <a
            className=" text-red-400 italic hover:line-through"
            href="mailto:akshayanand9162@gmail.com"
            target="null"
          >
            mail
          </a>{" "}
          or{" "}
          <a
            className=" text-yellow-600 italic hover:line-through"
            href="https://www.instagram.com/_a__kshay?igsh=MXJ6amwxcWdtZm1xOQ=="
            target="null"
          >
            instagram
          </a>{" "}
          or{" "}
          <a
            className=" text-sky-300 italic hover:line-through"
            href="https://www.linkedin.com/in/akshay-anand-7aa481288"
            target="null"
          >
            linkedIn
          </a>
          .
        </h1>
      </div>
      <div className="flex items-center justify-center mt-14 h-20">
        <h1 className="text-3xl sm:text-4xl tracking-tighter">
          created with ❤️ by me
        </h1>
      </div>
    </div>
  );
};
export default Footer;
