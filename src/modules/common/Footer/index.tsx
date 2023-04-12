import SectionsContainer from '@/modules/Home/components/SectionsContainer'
import React from 'react'
import Para from '../Typography/Para'
import SmallTitle from '../Typography/SmallTitle'
import Circle from '../Circle'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa'
import { IconType } from 'react-icons'
import Link from 'next/link'

type SocialIconObj = {
  Icon: IconType
  path: string
}

const socialIcons = [
  { Icon: IoLogoInstagram, path: '/' },
  { Icon: FaFacebookF, path: '/' },
  { Icon: FaTelegramPlane, path: '/' },
]

type LinkType = {
  label: string
  path: string
}

const Links = [
  { label: "About Us", path: "/" },
  { label: "Services", path: "/" },
  { label: "News", path: "/" },
  { label: "Careers", path: "/" },
  { label: "Contact", path: "/" },
];
const Company = [
  { label: "About Us", path: "/" },
  { label: "Services", path: "/" },
  { label: "News", path: "/" },
  { label: "Careers", path: "/" },
  { label: "Contact", path: "/" },
];
const contact = {
  address: "43 Raymond Rd.Baltemoer, London 3910",
  phones: ["+998957003022", "+9987777777"],
  email: "info@bukharitravel.com",
};

const FooterCol = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col space-y-6">{children}</div>;
};

const Footer = () => {
  return (
    <div className="bg-gray-footer w-full">
      <SectionsContainer className="py-10 bg-gray-footer my-0 mx-ato">
        <div className="lg:flex  justify-between">
          {/* info block */}
          <FooterCol>
            <FooterCol>
              <SmallTitle>About Al-Bukhari travel</SmallTitle>
              <div className="flex space-x-1 xl:max-w-[500px]">
                <Para className="text-gray max-w-[300px] xl:max-w-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vitae voluptate ratione beatae, neque inventore culpa.
                </Para>
              </div>
            </FooterCol>
            {/* socials */}
            <div className="flex flex-col space-y-4 lg:pb-0 pb-8">
              <SmallTitle>Connect</SmallTitle>
              <div className="flex space-x-1">
                {socialIcons.map((Social: SocialIconObj, i: number) => (
                  <Circle
                    key={i}
                    size="35px"
                    className="bg-[#777] text-white cursor-pointer"
                  >
                    {<Social.Icon />}
                  </Circle>
                ))}
              </div>
            </div>
          </FooterCol>
          <FooterCol>
            <SmallTitle>Links</SmallTitle>
            <div className="flex flex-col space-y-2 lg:pb-0 pb-8">
              {Links.map((link: LinkType, i: number) => (
                <Link
                  className="font-sans text-gray"
                  key={i}
                  href={`${link.path}${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </FooterCol>
          <FooterCol>
            <SmallTitle>Company</SmallTitle>
            <div className="flex flex-col space-y-2 lg:pb-0 pb-8">
              {Company.map((link: LinkType, i: number) => (
                <Link
                  className="font-sans text-gray"
                  key={i}
                  href={`${link.path}${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </FooterCol>
          <FooterCol>
            <SmallTitle>Contact</SmallTitle>
            <div className="flex flex-col space-y-2">
              <Para className="text-gray">{contact.address}</Para>
              {contact.phones.map((phone: string, i: number) => (
                <Para className="text-gray" key={i}>
                  {phone}
                </Para>
              ))}
              <Para className="text-gray">{contact.email}</Para>
            </div>
          </FooterCol>
        </div>
      </SectionsContainer>
    </div>
  );
};

export default Footer
