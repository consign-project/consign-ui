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
            <Input name="Reciever Address" placeholder="0x0000a0123123"><FaWallet/></Input>

          </div>
        </form>
      </div>
    </section>
  );
}
