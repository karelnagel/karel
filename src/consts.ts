import streamint from "./images/projects/streamint.png"
import creatures from "./images/projects/creatures.png"
import forexbot from "./images/projects/forexbot.png"
import fudler from "./images/projects/fudler.png"
import tinksmat from "./images/projects/tinksmat.jpeg"
import carwatch from "./images/projects/carwatch.png"
import { GiBrain } from "react-icons/gi";
import { SiJavascript,SiSolidity,SiCsharp, SiFlutter } from "react-icons/si";

export const socials = {
    twitter:"https://twitter.com/karelETH",
    opensea:"https://opensea.io/karelETH",
    github:"https://github.com/karelnagel",
    linkedin:"https://www.linkedin.com/in/karelnagel/",
    youtube:"https://youtube.com/karelETH",
}

export const projects = [
    {link:"https://streamint.xyz/",name:"streamint.xyz",image:streamint, description: "Decentralized opensource platform for accepting crypto donations, with rewarding NFTs."},
    {link:"https://creatures.karel.wtf",name:"Creature game",image:creatures, description: "A game on Polygon, where users have to match Creature NFTs with their corresponding Twitter handle and get an NFT when they catch all the creatures."},
    {link:"https://www.mql5.com/en/users/karelnagel",name:"Forex bots",image:forexbot, description: "Based on the No Nonsense Forex Youtube channel, that backtested and traded live with user's strategy. I also made tutorial videos and a premium version."},
    {link:"https://github.com/karelnagel/autopood",name:"Carwatch.ee",image:carwatch, description: "A website that scrapes new car sales from many websites, shows them on our website, and also sends new offers to Messenger."},
    {link:"https://fudler.ee/home",name:"Fudler.ee",image:fudler, description: "Estonian startup, that sells unsold food from restaurants. I worked there as a tech lead and took care of the websites and the backend."},
    {link:"",name:"Tinksmat", image:tinksmat, description: "Estonian company, that worked on a platform for staff management, I worked there as a junior backend engineer and coded in C#."},
];
export const skills =[
    {name: "Problem solving", percent:95, icon:GiBrain},
    {name: "React / TS / JS", percent:85, icon:SiJavascript},
    {name: "Solidity", percent:85, icon:SiSolidity},
    {name: "C# / ASP.NET", percent:85, icon:SiCsharp},
    {name: "Flutter", percent:75, icon:SiFlutter},
]