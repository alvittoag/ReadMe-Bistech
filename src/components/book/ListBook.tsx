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
        <h1 className="text-[#313552] text-[32px] font-medium">{title}</h1>
        {!active && <p className="text-[#707176] text-[24px]">Lihat Semua</p>}
      </div>
      <div className="mt-[28px] grid grid-cols-4 items-stretch gap-8">
        {books.map((book) => (
          <Book image={book.img} title={book.title} />
        ))}
      </div>
    </div>
  );
};

export default ListBook;
