import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about blogs?</h2>
        <p className="text-gray-400 my-2">
          Checkout these resources with your idea
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <Link to="/search" target="_blank" rel="noopener noreferrer">
            see blogs
          </Link>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://t4.ftcdn.net/jpg/06/37/34/29/360_F_637342919_2XygScvMbUcwOzkH8lMozgaobhpiRnZh.jpg" />
      </div>
    </div>
  );
}
