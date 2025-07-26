type GridCardProps = {
  content: string;
  image: string;
  className?: string;
};

const GridCard = ({ content, className, image }: GridCardProps) => {
  return (
    <article className={`rounded-lg p-5 flex items-end relative ${className}`}>
      <img src={image} alt="card detail" className="absolute top-5 right-5" />
      <p className="text-white text-2xl leading-[130%] tracking-normal font-bold">
        {content}
      </p>
    </article>
  );
};

export default GridCard;
