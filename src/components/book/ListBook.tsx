import { useAppSelector } from "../../app/hooks";
import { books } from "../../constant/datas";
import Book from "./Book";

type Props = {
  title: string;
};

const ListBook = ({ title }: Props) => {
  const isActive = useAppSelector((state) => state.user.isActive);
  const active = isActive === "Buku Saya";
  return (
    <div id="book">
      <div className="flex justify-between items-center">
        <h1 className="text-[#313552] text-[32px] font-[500]">{title}</h1>
        {!active && <p className="text-[#707176] text-[24px]">Lihat Semua</p>}
      </div>
      <div className="mt-[28px] grid grid-cols-4 gap-8 2xl:gap-10">
        {books.map((book) => (
          <Book key={book.id} image={book.img} title={book.title} />
        ))}
      </div>
    </div>
  );
};

export default ListBook;
