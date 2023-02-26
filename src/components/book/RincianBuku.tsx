import assets from "../../constant/assets";

const RincianBuku = () => {
  return (
    <div className="flex gap-5 mt-[30px]">
      <img src={assets.sinopsis1} alt="buku" />
      <div className="space-y-3">
        <div>
          <p className="judul-sinopsis">Judul</p>
          <h2 className="isi-sinopsis">Roman Picisan</h2>
        </div>
        <div>
          <p className="judul-sinopsis">Penulis</p>
          <h2 className="isi-sinopsis">Eddy D. Iskandar</h2>
        </div>
        <div>
          <p className="judul-sinopsis">Tahun Rilis</p>
          <h2 className="isi-sinopsis">2017</h2>
        </div>
        <div>
          <p className="judul-sinopsis">Kategori</p>
          <h2 className="isi-sinopsis">Buku Novel</h2>
        </div>
      </div>
    </div>
  );
};

export default RincianBuku;
