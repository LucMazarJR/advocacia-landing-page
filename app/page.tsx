import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Hero from "./components/sections/hero";
import Services from "./components/sections/services";
import Specialties from "./components/sections/specialties";

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Specialties />
            <Contact />
        </div>
    )
}
