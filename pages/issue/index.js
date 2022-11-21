import { FaWallet } from "react-icons/fa";
import Input from "../../components/input";

export default function Home() {
  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-green-700 text-xxl mb-3 ml-1">ISSUE CERTIFICATE</p>
        <form action="/send-data-here" method="post">
          <div className="grid gap-6 mb-6 md:grid-rows-2">
            <Input name="Certificate Name" placeholder="Name"></Input>
            <Input name="Reciever Address" placeholder="0x0000a0123123"><FaWallet /></Input>
            <label class="block">
              <span class="sr-only">Choose profile photo</span>
              <input type="file" accept="image/png, image/jpeg" class="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-500 file:text-white
                  hover:file:bg-blue-600
                "/>
            </label>
          </div>
          <div class="py-0.5 bg-gray-200 my-5"></div>
        </form>
        <button type="button" class="py-3 px-4 inline-flex gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
          Submit
        </button>
      </div>
    </section>
  );
}