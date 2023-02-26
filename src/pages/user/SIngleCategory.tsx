import Book from "../../components/book/Book";
import Breadcrumbs from "../../components/book/Breadcrumbs";
import { books } from "../../constant/datas";

const SIngleCategory = () => {
  return (
    <div className="px-[60px] py-[50px]">
      <Breadcrumbs page="Daftar Buku" link="Buku Cerita" />
      <div className="mt-[28px] grid grid-cols-4 gap-8 2xl:gap-10">
        {books.map((book) => (
          <>
            <Book key={book.id} image={book.img} title={book.title} />
            <Book key={book.id} image={book.img} title={book.title} />
            <Book key={book.id} image={book.img} title={book.title} />
            <Book key={book.id} image={book.img} title={book.title} />
          </>
        ))}
      </div>
    </div>
  );
};

export default SIngleCategory;
