import assets from "../../constant/assets";
import Book from "./Book";

type Props = {
  title: string;
};

const books = [
  { title: "Cerita asli indonesia vol.1", img: assets.book1 },
  { title: "Cerita asli indonesia vol.2", img: assets.book2 },
  { title: "Angkasa Dan 56 Hari", img: assets.book3 },
  { title: "Roman Picisan", img: assets.book4 },
];

const ListBook = ({ title }: Props) => {
  return (
    <div id="book">
      <div className="flex justify-between items-center">
        <h1 className="text-[#313552] text-[32px] font-medium">{title}</h1>
        <p className="text-[#707176] text-[24px]">Lihat Semua</p>
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
