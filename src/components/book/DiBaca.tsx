import assets from "../../constant/assets";

type Props = {
  title: string;
  img: string;
};

const DiBaca = ({ title, img }: Props) => {
  const validateTitle =
    title.length >= 15 ? (
      <h1>{title.substring(0, 16)}...</h1>
    ) : (
      <h1>{title}</h1>
    );

  return (
    <div className="text-[20px] font-[400] text-[#313552]">
      <img src={img} alt="buku" />
      <div className="mt-[14px]">{validateTitle}</div>
    </div>
  );
};

export default DiBaca;
