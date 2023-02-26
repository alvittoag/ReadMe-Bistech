import { useDispatch } from "react-redux";
import { toogleChangeMode } from "../../../app/features/toggleSlice";
import { useAppSelector } from "../../../app/hooks";

const buttonMode = [{ name: "Sinopsis" }, { name: "Baca Buku" }];

const ButtonChangeMode = () => {
  const changeMode = useAppSelector((state) => state.toogle.changeMode);
  const dispatch = useDispatch();
  const isRead = changeMode === "Baca Buku";
  return (
    <div className={`${isRead && "flex justify-between items-center"}`}>
      <div>
        {buttonMode.map((button) => (
          <button
            key={button.name}
            onClick={() => dispatch(toogleChangeMode(button.name))}
            className={`${
              changeMode === button.name ? "bg-[#FBF8F1]" : "bg-[#DBDDE6]"
            }  rounded-t-3xl w-[213px] h-[75px] text-[#313552] text-[24px]`}
          >
            {button.name}
          </button>
        ))}
      </div>
      {isRead && (
        <div className="flex justify- gap-6 mr-6">
          <p className="text-[#707176] font-[600] hover:text-blue-700 cursor-pointer">
            {"<"}
          </p>
          <div className="w-[50px] text-center  text-[#707176] bg-[#DBDDE6] border border-[#DBDDE6]">
            <p>001</p>
          </div>
          <p className="text-[#707176] font-[600]">/</p>
          <p className="text-[#313552] font-[600]">234</p>
          <p className="text-[#313552] font-[600] hover:text-blue-700 cursor-pointer">
            {">"}
          </p>
        </div>
      )}
    </div>
  );
};

export default ButtonChangeMode;
