import assets from "../../../constant/assets";

const Rincian = () => {
  return (
    <div className="mt-[20px] flex gap-7">
      <img src={assets.bookKonfirmasi} alt="buku" />
      <div className="space-y-6">
        <div>
          <p className="judul-konfirmasi">Judul</p>
          <h2 className="isi-konfirmasi">Roman Picisan</h2>
        </div>
        <div>
          <p className="judul-konfirmasi">Penulis</p>
          <h2 className="isi-konfirmasi">Eddy D. Iskandar</h2>
        </div>
        <div>
          <p className="judul-konfirmasi">Tahun Rilis</p>
          <h2 className="isi-konfirmasi">2017</h2>
        </div>
        <div>
          <p className="judul-konfirmasi">Kategori</p>
          <h2 className="isi-konfirmasi">Buku Novel</h2>
        </div>
      </div>
      <div className="flex-1 ml-[3rem]">
        <h1 className="judul-konfirmasi">Sinopsis</h1>
        <p className="isi-konfirmasi py-[14px]">
          Rompis bercerita tentang pemuda SMA bernama Roman yang terkenal dengan
          julukan Roman Picisan. Ia mendapat julukan itu karena Roman sering
          menjual puisi picisan kepada kawan-kawannya. Selain itu, puisi yang ia
          bikin juga membuat Roman dekat dan menjalin komitmen dengan Wulan.
          Roman dan Wulan tidak terikat dalam status apa pun, hanya komitmen
          untuk terus bersama. Bahkan, keduanya belum pernah menyatakan cinta.{" "}
        </p>
        <div className="text-[16px]">
          <p className="text-[#B4CADC] ">Catatan :</p>
          <p className="text-[#FBF8F1] py-[9px] font-[400]">
            Batas waktu peminjaman buku yaitu 7 hari, dan bisa menambah waktu
            jika masa peminjaman buku telah habis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rincian;
