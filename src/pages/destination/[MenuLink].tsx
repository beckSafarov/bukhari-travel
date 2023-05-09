import React from "react";
import { useRouter } from "next/router";
import DestinationPage from "@/modules/DestinationPage";
import DestinationPageData from "@/modules/DestinationPage/DestinationsPageData";
import ContactUsPage from "@/modules/ContactUsPage";

const data = {
  id: 1,
  label: "tashkent",
  name: "Tashkent",
  title: "Tashkent Tours",
  heroImage: "",
  shortInfoText:
    "Uzbekistan is a must-visit travel destination for people who want to learn about the rich history and culture of Central Asia. It is the perfect place to travel and explore the fascinating history of the Silk Road trade through the well-preserved architecture of ancient cities like Khiva, Samarkand, and Bukhara.",
  highlightsText:
    "Uzbekistan’s cities tell travelers captivating stories about the Golden Age of Islam and the Silk Road; when pioneering advancements in astrology, mathematics, and medicine took place. Bukhara is where Marco Polo’s father and uncle stayed for three years before moving to the court of the Mongol Khan, and where Avicenna wrote his teachings in medicine, while Samarkand was the capital of the Timurid empire. Marvelous mausoleums, gloriously decorated madrassas, and huge mosques will impress people of all ages. Travelers will feel immersed in the atmosphere of 1001 Nights, yet at the same time, one can explore the Soviet-built cities and visit the forbidden Soviet art expositions at the Savitsky Museum. The best time to travel is Spring and Autumn when temperatures are pleasant for evening tea and for interesting talks with hospitable locals about handicrafts, music, and culture. Read more about our selection of top places to visit in Uzbekistan on our travel blog.",
  photos: [
    "/images/10.png",
    "/images/9.png",
    "/images/8.png",
    "/images/7.png",
    "/images/6.png",
    "/images/5.png",
    "/images/4.png",
    "/images/3.png",
  ],
  video: "https://www.youtube.com/embed/2V-2ABkUREE?showInfo=0",
};
const destination = () => {
  /* eslint-disable-next-line
      react-hooks/rules-of-hooks */
  const router = useRouter();
  const { MenuLink: destName } = router.query;
  const el =
    DestinationPageData.find((element) => element.label === destName) || data;

  return (
    <DestinationPage
      name={el.name}
      id={el.id}
      label={el.label}
      title={el.title}
      heroImage={el.heroImage}
      shortInfoText={el.shortInfoText}
      highlightsText={el.highlightsText}
      video={el.video}
      photos={el.photos}
    />
  );
};

export default destination;
