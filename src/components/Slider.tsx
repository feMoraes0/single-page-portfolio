import { useEffect, useRef, useState } from 'react';
import Arrow from '../assets/arrow.svg';
import WorkImages from '../assets/works';

type ComponentDefinition = {
  children: Array<{
    scrollIntoView: ({
      inline,
      behavior,
    }: {
      inline: string;
      behavior: string;
    }) => null;
  }>;
} | null;

const elements = [
  {
    id: 1,
    image: WorkImages.Work1,
  },
  {
    id: 2,
    image: WorkImages.Work2,
  },
  {
    id: 3,
    image: WorkImages.Work3,
  },
];

const Slider = () => {
  const mainComponent = useRef(null);
  const [, setCurrentElementIndex] = useState(1);

  const goLeft = () => {
    setCurrentElementIndex((prev) => {
      if (prev > 0) {
        move(prev - 1);
        return prev - 1;
      }
      return prev;
    });
  };

  const goRight = () => {
    setCurrentElementIndex((prev) => {
      if (prev + 1 <= elements.length - 1) {
        move(prev + 1);
        return prev + 1;
      }
      return prev;
    });
  };

  const move = (to: number) => {
    (mainComponent.current as ComponentDefinition)?.children[to].scrollIntoView(
      {
        inline: 'center',
        behavior: 'smooth',
      },
    );
  };

  useEffect(() => {
    move(1);
  }, []);

  return (
    <section className="mt-16 flex flex-col items-center md:mt-20  lg:mt-[120px]">
      <h4 className="text-[40px] leading-[130%] tracking-normal font-bold">
        My Work
      </h4>
      <div
        ref={mainComponent}
        className="mt-10 w-full relative flex overflow-x-auto snap-x gap-5 md:mt-12"
      >
        {elements.map(({ image, id }) => {
          return (
            <article key={id} className="shrink-0 snap-center">
              <img
                src={image}
                alt={`work image ${id}`}
                className="w-[270px] h-[180px] object-cover rounded-md md:w-[540px] md:h-[360px]"
              />
            </article>
          );
        })}
      </div>
      <div className="mt-10 flex flex-row items-center gap-4 md:mt-12">
        <button
          onClick={goLeft}
          className="rounded-full bg-[#030303] w-12 h-12 flex items-center justify-center"
        >
          <img src={Arrow} alt="arrow left" className="w-[14.61px] h-4" />
        </button>
        <button
          onClick={goRight}
          className="rounded-full bg-[#030303] w-12 h-12 flex items-center justify-center"
        >
          <img
            src={Arrow}
            alt="arrow left"
            className="w-[14.61px] h-4 rotate-180"
          />
        </button>
      </div>
    </section>
  );
};

export default Slider;
