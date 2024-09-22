import AboutContent from "@/components/about/AboutContent";
import Link from "next/link";


const AboutPage = () => {
    return (
        <div>
            <AboutContent></AboutContent>
            <div className="flex  gap-5">
                <Link className="border-2 rounded-lg px-2" href={'/about/history'}>History</Link>
                <Link className="border-2 rounded-lg px-2" href={'/about/mission'}>Mission</Link>
            </div>
        </div>
    );
};

export default AboutPage;