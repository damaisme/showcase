import { Github, Instagram, Linkedin, MapPin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const profile = {
  name: "Damasukma",
  based: "Jakarta",
  picture: "/picture-dama-circle.png",
  bio: "Software & Cloud Engineer who loves building products and systems end-to-end.",
  instagram: "https://www.instagram.com/damaisme/",
  linkedin: "https://www.linkedin.com/in/damasukma/",
  youtube: "https://www.youtube.com/channel/UCqhduRrV4A8ELHikNUNlo4Q",
}

const showcase = [
  {
    name: "Funda.id",
    type: "platform",
    tagline: "Platform belajar IT dengan terminal interaktif.",
    icon: "/funda.png",
    link: "https://funda.id",
    description: "",
    badges: ["Beta"]
  },
  {
    name: "Awanova.cloud",
    type: "platform",
    tagline: "Bangun Cloud Services Dalam Hitungan Detik.",
    icon: "/awanova-logo.png",
    link: "https://awanova.cloud",
    description: "",
    badges: ["Beta"]
  },
  {
    name: "Next-notion-blog",
    type: "open-source",
    tagline: "Notion as Headless CMS for Blog Platform",
    icon: "/",
    link: "https://github.com/damaisme/notion-next-blog",
    description: "",
    badges: ["Opensource"],
  },
  {
    name: "Pongo",
    type: "open-source",
    tagline: "File Transfer Through ICMP",
    icon: "/",
    link: "https://github.com/damaisme/notion-next-blog",
    description: "",
    badges: ["Opensource", "Tools"],
  },
  {
    name: "Si Paling Kopi",
    type: "product",
    tagline: "The best coffee",
    icon: "/logo-sipalingkopi.png",
    link: "https://sipalingkopi.shop/",
    description: "",
    badges: ["Deprecated"],
  },
]



export default function Home() {
  return (
    <div className="flex flex-col md:flex-row space-y-8 space-x-4 p-8 md:p-12 min-h-screen bg-white font-sans dark:bg-black">
      <section id="profile">
        <div className="flex flex-col space-y-4 md:pr-4 md:text-lg">
          <div className="flex md:flex-col md:items-start md:space-y-4  space-x-4 items-center">
            <Image src={profile.picture} alt="picture" width={300} height={300} className="w-24 md:w-47" />
            <div className="flex flex-col space-y-2">
              <h1 className="font-bold text-2xl">{profile.name}</h1>
              <p className="flex items-center space-x-2">
                <MapPin className="block" />
                <span>{profile.based}</span>
              </p>
            </div>
          </div>
          <div>
            <p>{profile.bio}</p>
          </div>
          <div className="flex space-x-8 items-center">
            <Link target="_blank" href={profile.linkedin} > <Linkedin className="block" /></Link>
            <Link target="_blank" href={profile.instagram} > <Instagram className="block" /></Link>
            <Link target="_blank" href={profile.youtube}><Youtube className="block" /></Link>
          </div>
        </div>
      </section >

      <section id="showcase " className="w-full md:text-lg" >
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
          {showcase.map((product) => {
            return (
              <Link target="_blank" className="group" key={product.name} href={product.link}>
                <div key={product.name} className="group-hover:bg-amber-100 w-full bg-white dark:bg-black border border-amber-200  rounded-xl p-4
              flex flex-col space-y-2">

                  <div className="flex items-center space-x-2">
                    {product.type == "open-source" ?
                      (
                        <Github />
                      ) : (
                        <Image src={product.icon} width={50} height={50} alt={product.name} className="w-6 md:w-8 rounded" />
                      )}

                    <p className="font-bold">{product.name}</p>
                  </div>
                  <p className="text-sm md:text-md">{product.tagline}</p>
                  <div className="flex space-x-2 flex-wrap space-y-2">
                    {product.badges.map((text, i) => {
                      return (
                        <div key={i} className="rounded-md text-sm bg-amber-400 px-2">{text}</div>
                      )
                    })}
                    <div></div>
                  </div>

                </div>
              </Link>
            )
          })}
        </div>
      </section >
    </div >
  );
}
