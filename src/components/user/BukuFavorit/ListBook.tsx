import assets from "../../../constant/assets";
import { books } from "../../../constant/datas";
import Book from "../../book/Book";

const ListBook = () => {
  return (
    <div id="book">
      <div className="flex flex-col gap-10">
        <img src={assets.bannerBukuFavorite} alt="buku favorite" />
      </div>
      <div className="mt-[28px] grid grid-cols-4 items-stretch gap-8">
        {books.map((book) => (
          <div key={book.id} className="space-y-28">
            <Book image={book.img} title={book.title} />
            <Book image={book.img} title={book.title} />
            <Book image={book.img} title={book.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBook;
