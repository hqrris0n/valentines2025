import Image from "next/image";
import Paper from "./components/paper";

export default function Home() {
  return (
    <div className="m-0 p-0 border-none">
      <div className="bg-white w-screen h-screen">
        <Paper/>
      </div>
      <div className="bg-white w-screen h-screen">
        <Paper/>
      </div>
    </div>
  );
}
