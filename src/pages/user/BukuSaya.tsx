import ListBook from "../../components/book/DaftarBuku";

const BukuSaya = () => {
  return (
    <div className="px-[60px] py-[50px] space-y-24 bg-[#FBFBFB]">
      <ListBook title="Buku Saya" />
      <ListBook title="Rekomendasi Buku" />
    </div>
  );
};

export default BukuSaya;
