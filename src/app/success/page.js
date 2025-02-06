import Image from "next/image";
import Paper from "../../components/paper";
import { metadata } from "../layout";

export default function Home() {
    return (
    <div className="m-0 p-0 border-none">
        <div className="flex justify-center items-center bg-white w-screen h-screen">
        <Paper/>
        <Image
        src="/valentines2025/happy.png"
        alt="happy"
        width={1200}
        height={1200}
        className="z-10 show"
        />
        </div>
    </div>
    );
}
