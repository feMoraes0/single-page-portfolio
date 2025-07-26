import GridCard from './GridCard';
import {
  CardDetails01,
  CardDetails02,
  CardDetails03,
  CardDetails04,
  CardDetails05,
  CardDetails06,
} from '../assets/cards';

const Grid = () => {
  return (
    <section
      className="
        mx-4 mt-10 grid gap-5 grid-cols-2 grid-rows-6
        md:mx-8 md:mt-16 md:grid-cols-4 md:grid-rows-3
        lg:mx-[165px] lg:mt-20 lg:grid-cols-6 lg:grid-rows-2
      "
    >
      <GridCard
        className="col-span-2 row-span-2 bg-[#755CDE] min-h-[364px]"
        content="Graphic Design"
        image={CardDetails01}
      />
      <GridCard
        className="bg-[#EC9B56] min-h-[182px]"
        content="UI/UX"
        image={CardDetails02}
      />
      <GridCard
        className="bg-[#F39E9E] min-h-[162px] lg:min-h-[158px]"
        content="Apps"
        image={CardDetails03}
      />
      <GridCard
        className="bg-[#E16B5B] min-h-[182px] col-span-2"
        content="Illustrations"
        image={CardDetails04}
      />
      <GridCard
        className="bg-[#61C4B7] min-h-[182px] col-span-2"
        content="Photography"
        image={CardDetails05}
      />
      <GridCard
        className="bg-[#552049] min-h-[182px] col-span-2"
        content="Motion Graphics"
        image={CardDetails06}
      />
    </section>
  );
};

export default Grid;
