import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Circle from "@/modules/common/Circle";
interface SlideType {
  slickNext(): void;
  slickPrev(): void;
}
const TestPage = () => {
  const slidesToShow = 3;
  const cards = [1, 2, 3, 4, 5, 6];
  const [slick, setSlick] = useState<SlideType>();
  const [currLastCardIdx, setCurrLastCardIdx] = useState(slidesToShow);

  const handlePrev = (): void => {
    if (!slick?.slickPrev) return;
    slick.slickPrev();
  };
  const handleNext = (): void => {
    if (!slick?.slickNext) return;
    slick.slickNext();
  };

  const handleSliderRef = (c: any): void => {
    if (!c || slick?.slickNext) return;
    setSlick({
      slickNext: c.slickNext,
      slickPrev: c.slickPrev,
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    beforeChange: (_: number, newIdx: number) => {
      if (newIdx <= cards.length / 2) {
        setCurrLastCardIdx(newIdx + slidesToShow);
      } else {
        setCurrLastCardIdx(newIdx + slidesToShow - cards.length);
      }
    },
  };
  return (
    <>
      {/* <StaticHero
        title='Test Page'
        subtitle='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
      /> */}
      <h1>Welcome to Test Page</h1>
      <div className='flex w-full items-center justify-end space-x-2 text-lg p-5'>
        <span onClick={handlePrev} className='cursor-pointer'>
          ⬅️ Prev
        </span>
        <span onClick={handleNext} className='cursor-pointer'>
          Next ➡️
        </span>
      </div>
      <div className='px-10 bg-blue w-full overflow-x-hidden'>
        <Slider ref={handleSliderRef} {...settings} className='px-20 py-10'>
          {cards.map((text: number, i: number) => (
            <div key={i}>
              <h1>{text}</h1>
            </div>
          ))}
        </Slider>
      </div>
      <div className='flex space-x-2 w-full pt-5 items-center justify-center'>
        {cards.map((_: number, i: number) => {
          const bg = i + 1 === currLastCardIdx ? 'bg-gray-dark' : 'bg-gray'
          return <Circle key={i} className={bg} size='10px' />
        })}
      </div>
    </>
  )
};

export default TestPage;
