type Props = {
  page: string;
  link: string;
};

const Breadcrumbs = ({ page, link }: Props) => {
  return (
    <div className="text-[#707176] text-[24px] gap-6 flex items-center ">
      <p>{page}</p>
      <span>{">"}</span>
      <p>{link}</p>
    </div>
  );
};

export default Breadcrumbs;
