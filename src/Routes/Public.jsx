import CustomCard from "../components/CustomCard.jsx";

const Public = () => {
    const Socials = [
        {
            icon: "/instagram.png",
            url: "https://instagram.com/pete_calabrese",
            linkTo: "Instagram",
            delay: 0.2,
            name: "pete_calabrese",
        },
        {
            icon: "/twitter.png",
            url: "https://twitter.com/calabreez",
            linkTo: "Twitter",
            delay: 0.4,
            name: "calabreez",
        },
        {
            icon: "/github.png",
            url: "https://github.com/peter=calabrese",
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
        },
        {
            icon: "/discord.png",
            url: "https://discordapp.com/users/892579407229747270",
            linkTo: "Discord",
            delay: 1,
            name: "Calabreez#0340",
        },
        {
            icon: "/twitch.png",
            url: "https://twitch.tv/calabreez ",
            linkTo: "Twitch",
            delay: 1.2,
            name: "calabreez",
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-background text-center">
            <h1 className="font-bold text-2xl text-txt px-4">
                Hey there, my names <span className="text-alt-accent">Pete</span>. I&apos;m a developer with a passion for building things.
            </h1>
            <h2 className="font-bold text-xl mb-4 text-txt mt-4 pb-2">
                Connect with me on my socials!
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

export default Public;