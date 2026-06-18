import { useEffect } from "react";
import { Linkedin, Github, Instagram, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://id.linkedin.com/in/rizky-fadhilah-ramadhan-6062a4263",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@przky_",
    icon: Instagram,
    url: "https://www.instagram.com/przky_",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@RickyRvs",
    icon: Github,
    url: "https://github.com/RickyRvs",
    color: "#24292e",
    gradient: "from-[#333] to-[#24292e]"
  },
  {
    name: "TikTok",
    displayName: "Tiktok",
    subText: "@kymusicc",
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd"><g transform="translate(8,6)">
          <path d="M29.52 9.45C28.08 9.05 26.76 8.29 25.68 7.26C25.51 7.1 25.35 6.93 25.19 6.75C23.9 5.28 23.21 3.38 23.23 1.42L17.36 1.42L17.36 23.71C17.36 27.79 15.15 29.95 12.42 29.95C11.69 29.96 10.98 29.81 10.32 29.51C9.66 29.21 9.08 28.78 8.61 28.23C8.14 27.68 7.8 27.03 7.6 26.34C7.41 25.64 7.37 24.91 7.49 24.2C7.61 23.49 7.88 22.81 8.29 22.22C8.7 21.62 9.23 21.12 9.85 20.75C10.47 20.39 11.17 20.16 11.89 20.09C12.61 20.02 13.33 20.11 14.01 20.35L14.01 14.36C13.49 14.24 12.95 14.19 12.42 14.19C10.25 14.19 8.17 14.83 6.39 16.02C4.62 17.21 3.23 18.91 2.42 20.88C1.61 22.86 1.39 25.03 1.82 27.13C2.24 29.22 3.27 31.15 4.78 32.66C6.29 34.17 8.22 35.19 10.32 35.61C12.41 36.02 14.59 35.81 16.56 34.99C18.54 34.17 20.22 32.78 21.41 31C22.6 29.23 23.23 27.14 23.23 25L23.23 12.82C25.5 14.39 28.22 15.13 31.13 15.19L31.13 9.69C30.59 9.67 30.05 9.59 29.52 9.45Z" fill="#FE2C55"/>
          <path d="M25.2 6.75C24.79 6.48 24.41 6.17 24.06 5.83C22.82 4.66 22.01 3.11 21.74 1.43C21.66 0.95 21.62 0.48 21.62 0L15.74 0L15.74 22.64C15.74 27.51 13.54 28.52 10.8 28.52C10.08 28.53 9.37 28.38 8.71 28.08C8.05 27.78 7.47 27.34 7 26.79C6.53 26.24 6.18 25.6 5.99 24.9C5.8 24.21 5.76 23.48 5.88 22.77C5.99 22.05 6.27 21.38 6.68 20.78C7.08 20.18 7.62 19.69 8.24 19.32C8.86 18.95 9.56 18.73 10.28 18.66C10.99 18.59 11.72 18.68 12.4 18.92L12.4 12.93C5.4 11.82 0 17.48 0 23.58C0 26.44 1.15 29.19 3.17 31.22C5.2 33.24 7.95 34.38 10.81 34.39C16.77 34.39 21.62 30.74 21.62 23.58L21.62 11.39C23.9 12.98 26.62 13.71 29.52 13.76L29.52 8.26C27.97 8.19 26.47 7.67 25.2 6.75Z" fill="#25F4EE"/>
        </g></g>
      </svg>
    ),
    url: "https://tiktok.com/@kymusicc",
    color: "#000000",
    gradient: "from-[#000000] via-[#25F4EE] to-[#FE2C55]"
  },
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find((l) => l.isPrimary);
  const others = socialLinks.filter((l) => !l.isPrimary);
  const [instagram, github, tiktok] = others;

  useEffect(() => { AOS.init({ offset: 10 }); }, []);

  const cardBase = "group relative flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-500";

  const SmallCard = ({ link, delay }) => (
    <a href={link.url} target="_blank" rel="noopener noreferrer"
      className={cardBase} data-aos="fade-up" data-aos-delay={delay}>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`} />
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 opacity-10 rounded-lg group-hover:scale-125 group-hover:opacity-20 transition-all duration-500" style={{ backgroundColor: link.color }} />
        <div className="relative p-2 rounded-lg">
          <link.icon className="w-5 h-5 transition-all duration-500 group-hover:scale-110" style={{ color: link.color }} />
        </div>
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{link.displayName}</span>
        <span className="text-xs text-slate-400 truncate group-hover:text-slate-500 transition-colors">{link.subText}</span>
      </div>
      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-700 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
    </a>
  );

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 py-8 backdrop-blur-xl border border-slate-100 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2" data-aos="fade-down">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full" />
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn primary */}
        <a href={linkedIn.url} target="_blank" rel="noopener noreferrer"
          className={`${cardBase} justify-between`} data-aos="fade-up" data-aos-delay="100">
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${linkedIn.gradient}`} />
          <div className="relative flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 rounded-md group-hover:opacity-20 transition-all duration-500" style={{ backgroundColor: linkedIn.color }} />
              <div className="relative p-2 rounded-md">
                <linkedIn.icon className="w-6 h-6 group-hover:scale-105 transition-transform duration-500" style={{ color: linkedIn.color }} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{linkedIn.displayName}</span>
              <span className="text-sm text-slate-400 group-hover:text-slate-500 transition-colors">{linkedIn.subText}</span>
            </div>
          </div>
          <ExternalLink className="relative w-5 h-5 text-slate-400 group-hover:text-slate-700 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
        </a>

        {/* Instagram + GitHub */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SmallCard link={instagram} delay={200} />
          <SmallCard link={github} delay={300} />
        </div>

        {/* TikTok full width */}
        <SmallCard link={tiktok} delay={400} />
      </div>
    </div>
  );
};

export default SocialLinks;