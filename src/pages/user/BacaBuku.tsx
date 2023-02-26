import Breadcrumbs from "../../components/book/Breadcrumbs";
import ButtonChangeMode from "../../components/user/BacaBuku/ButtonChangeMode";
import DetailBuku from "../../components/user/BacaBuku/DetailBuku";
import IsiSinopis from "../../components/user/BacaBuku/mode/IsiSinopis";

const BacaBuku = () => {
  return (
    <div className="px-[60px] py-[50px] bg-[#FBFBFB]">
      <Breadcrumbs page="Buku Saya" link="Roman Picisan" />
      <DetailBuku />
      <div className="mt-[30px] flex flex-col">
        <ButtonChangeMode />
        <div className="bg-[#FBF8F1] p-[30px]">
          <IsiSinopis />
        </div>
      </div>
    </div>
  );
};

export default BacaBuku;
