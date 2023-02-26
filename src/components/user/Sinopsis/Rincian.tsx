import assets from "../../../constant/assets";
import RincianBuku from "../../book/RincianBuku";

const Rincian = () => {
  return (
    <div className="absolute top-20 ml-10">
      <h1 className="text-[32px] text-[#313552] font-[600]">Rincian Buku</h1>
      <RincianBuku />
      <div className="mt-[30px] flex flex-col">
        <h1 className="text-[24px] font-[600]">Sinopsis</h1>
        <p className="max-w-[71rem] 2xl:max-w-[77rem] 2xl:tracking-wider text-[16px] text-justify mt-[14px] font-[400]">
          Rompis bercerita tentang pemuda SMA bernama Roman yang terkenal dengan
          julukan Roman Picisan. Ia mendapat julukan itu karena Roman sering
          menjual puisi picisan kepada kawan-kawannya. Selain itu, puisi yang ia
          bikin juga membuat Roman dekat dan menjalin komitmen dengan Wulan.
          Roman dan Wulan tidak terikat dalam status apa pun, hanya komitmen
          untuk terus bersama. Bahkan, keduanya belum pernah menyatakan cinta.
          Alasan Roman belum ingin berpacaran dengan Wulan adalah karena kelas
          sosial mereka yang berbeda. Berada di keluarga menengah ke bawah
          membuat Roman rendah diri. Ia sadar bahwa ia sudah tidak bisa membual
          picisan lagi jika ingin mengikat Wulan dalam komitmen serius. Roman
          hanya akan berpacaran dengan Wulan saat ia sudah merasa siap secara
          ekonomi. Wulan tidak masalah menjalin hubungan tanpa status bersama
          Roman. Ia mempercayai Roman. Setelah lulus SMA, Wulan dan Roman
          terpaksa menjalin hubungan jarak jauh. Wulan kuliah di Indonesia
          sementara Roman di Belanda. Komunikasi Wulan dan Roman berjalan dengan
          baik. Akan tetapi, semuanya mulai berubah ketika Roman dekat dengan
          Meira. Meira adalah gadis Indonesia yang tengah menyelesaikan
          pendidikan S2 di universitas yang sama dengan Roman. Awalnya,
          kedekatan Roman dan Meira hanya terbatas pada perasaan nyaman dalam
          berteman. Namun, hubungan keduanya menjadi lebih intens saat Meira
          membantu Roman memperbaiki satu mata kuliahnya. Roman semakin sibuk
          dan jarang menghubungi Wulan. Lambat laun, Wulan mulai curiga dengan
          perubahan sikap Roman. Apalagi sebelumnya Roman pernah menceritakan
          pertemuannya dengan Meira pada Wulan. Walaupun demikian, Wulan tetap
          uring-uringan saat melihat Meira menginterupsi panggilan videonya
          bersama Roman. Kegalauan Wulan mengantarkannya pergi ke Belanda. Ia
          ingin memastikan komitmen Roman padanya sekaligus memberi kejutan pada
          Roman.
        </p>
      </div>
    </div>
  );
};

export default Rincian;
