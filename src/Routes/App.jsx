import CustomCard from "../components/CustomCard.jsx";

const App = () => {
  const Socials = [
    {
      icon: "/github.png",
      url: "https://github.com/peter-calabrese",
      linkTo: "Github",
      delay: 0.6,
      name: "calabree",
    },
    {
      icon: "/linkedin.png",
      url: "https://linkedin.com/in/peter-calabrese/",
      linkTo: "LinkedIn",
      delay: 0.8,
      name: "peter-calabrese",
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-background text-center">
      <h1 className="font-bold text-2xl text-txt px-4">
        Hey there, my names <span className="text-alt-accent">Peter</span>. I&apos;m a software developer based out of New York with a passion for building clean, performant, and responsive web applications.
      </h1>
      <h2 className="font-bold text-xl mb-4 text-txt mt-4 pb-2">
        Checkout my projects on GitHub and lets connect on LinkedIn!
      </h2>
      {Socials.map(({ icon, url, linkTo, delay, name }) => (
        <div key={linkTo} className="md:hover:scale-125 transition ease-out mb-3 md:w-[340px] w-[80%] hover:text-accent-light">
          <CustomCard
            url={url}
            linkTo={linkTo}
            icon={icon}
            delay={delay}
            name={name}
          />
        </div>
      ))}
    </div>
  );
}

export default App;