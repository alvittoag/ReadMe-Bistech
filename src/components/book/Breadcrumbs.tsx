type Props = {
  page: string;
  link: string;
};

const Breadcrumbs = ({ page, link }: Props) => {
  return (
    <div className="text-[#707176] text-[24px] gap-5 flex items-center hover:cursor-pointer">
      <p>{page}</p>
      <span>{">"}</span>
      <p>{link}</p>
    </div>
  );
};

export default Breadcrumbs;
