export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6  md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Full Stack Developer ",
    description: "",
    className: "lg:col-span-2 text-center md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Realtime Splitwise Application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SplitEase",
    des: "SplitEase is a smart expense-splitting and group finance management application that makes it easy to split bills, track expenses, and settle debts among friends, roommates, or colleagues.",
    img: "/SplitEase.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fir.png"],
    link: "https://split-ease-nine.vercel.app/",
  },
  {
    id: 2,
    title: "PersonalizedPro",
    des: "Your AI-powered personalized content dashboard.",
    img: "/PersonalisedPro.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fir.png", "/c.svg"],
    link: "https://github.com/Siddharth-singh2111/personalized-pro",
  },
  {
    id: 3,
    title: "Intelligent RAG System",
    des: "Intelligent Query Retrieval System",
    img: "/RAG.png",
    iconLists: ["/Python.png","/Node.png","/llm.png","/FastApi.png"],
    link: "https://github.com/Siddharth-singh2111/Intelligent-Retrieval-System",
  },
  {
    id: 4,
    title: "VectorShift",
    des: "A React-based interactive pipeline builder built using ReactFlow, featuring custom node abstraction, smart variable parsing, light/dark themes, and dynamic graph validation via backend integration.",
    img: "/VectorShift.png",
    iconLists: ["/Node.png", "/tail.svg", "/FastApi.png", "/Python.png", "/re.svg"],
    link: "https://github.com/Siddharth-singh2111/Vector-Shift-project",
  },
];

export const testimonials = [
  {
    quote:
      "I've worked with Siddharth on a couple of semester projects, and his ability to handle complex backend logic is seriously impressive. He’s the kind of teammate who doesn't just write code but actually thinks about the architecture. A super reliable guy to have in your corner during crunch time.",
    name: "Shreyaan Loke",
    title: "Student @IIITS",
  },
  {
    quote:
      "Siddharth has a crazy eye for detail when it comes to UI/UX. He transformed our rough hackathon prototype into a smooth, responsive application in record time. If you want someone who cares about the 'feel' of a product as much as the function, he's your guy.",
    name: "Keshav Sachdeva",
    title: "Student @IIITS",
  },
  {
    quote:
      "The best thing about collaborating with Siddharth is his debugging skills. When the rest of us were stuck on a critical error hours before the deadline, he stayed cool and figured it out. He brings a level of calmness and clarity that every dev team needs.",
    name: "Ashutosh Sinha",
    title: "Student @IIITS",
  },
  {
    quote:
      "I've seen Siddharth pick up new tech stacks on the fly faster than anyone else in our batch. Whether it's a new JS framework or cloud integration, he’s always ahead of the curve. He pushes the whole team to write cleaner, more efficient code.",
    name: "Aayush Soni",
    title: "Student @IIITS",
  },
  {
    quote:
      "Beyond just being a solid developer, Siddharth is genuinely fun to work with. No ego, always open to feedback, and constantly looking for ways to optimize our workflow. Definitely one of the sharpest minds I've met at IIITS.",
    name: "Ansh Mishra",
    title: "Student @IIITS",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern @Qbtrix Innovations",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/Qbtrix.png",
  },
  {
    id: 2,
    title: "Team Lead @Web3SSH",
    desc: "Led a 40 member team for a 1 week web3 bootcamp and 2 day hackathon with over 100+ participants.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/web3ssh.png",
  },
  
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/Siddharth-singh2111"
  },
  {
    id: 2,
    img: "/leetcode.png",
    link:"https://leetcode.com/u/Siddharth_Singh2711/"
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/siddharth-singh-dev/"
  },
];