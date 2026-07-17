import { useState } from "react";

import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const contacts = [
  {
    title: "Phone Number",
    value: "+62 889 8357 8571",
    icon: FaPhoneAlt,
  },
  {
    title: "Email Address",
    value: "radhitrasta@gmail.com",
    icon: BiLogoGmail,
  },
  {
    title: "Github",
    value: "github.com/rrasta",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    value: "Radhitya Rasta",
    icon: FaLinkedin,
  },
];

function Contact() {
  return (
    <>
      <div className="text-white pt-30 flex flex-col gap-20 mb-20 mx-48 z-20" id="Contact">
        <div className="text-center ">
          <h2 className=" text-6xl font-medium">Contact Me</h2>
        </div>
        <div className="max-w-screen grid grid-cols-2 gap-8 ">
          {contacts.map((contact) => (
            <ContactFill
              key={contact.title}
              title={contact.title}
              value={contact.value}
              icon={contact.icon}
            ></ContactFill>
          ))}
        </div>
      </div>
    </>
  );
}

function ContactFill({ title, value, icon: Icon }) {
    const [copied,setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div
      onClick={handleCopy}
      className="hover:bg-linear-to-t hover:from-[#595959]/20 hover:to-[#BFBFBF]/20 hover:scale-102 cursor-pointer transition duration-200 rounded-lg border border-white/10 p-12 bg-linear-to-t from-[#BFBFBF]/8 to-[#595959]/5 flex flex-col justify-center items-center gap-4"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <Icon className="w-8 h-8"></Icon>
        <p className="text-xs">{title}</p>
      </div>
      <h2 className="font-bold text-[24px] transition duration-200">{copied?"Successfully Copied!":value}</h2>
    </div>
  );
}

export default Contact;