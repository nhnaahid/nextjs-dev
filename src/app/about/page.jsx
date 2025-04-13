import AboutContent from "@/components/about/AboutContent";
import Link from "next/link";

const getTime = async () => {
    const res = await fetch('http://localhost:3000/time', { next: { revalidate: 5 } })
    const data = await res.json();
    console.log(data);
    return data.currentTime;
}

const AboutPage = () => {

    const currentTime = getTime()
    return (
        <div>
            <AboutContent></AboutContent>
            <div className="flex  gap-5">
                <Link className="border-2 rounded-lg px-2" href={'/about/history'}>History</Link>
                <Link className="border-2 rounded-lg px-2" href={'/about/mission'}>Mission</Link>
                <p>Time: {currentTime}</p>
            </div>
        </div>
    );
};

export default AboutPage;