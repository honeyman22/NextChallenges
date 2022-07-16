import { useRouter } from "next/router";
import { FaFile } from "react-icons/fa";
export default function Home() {
  const history = useRouter();
  return (
    <div>
      <div className="w-full font-serif  flex-col px-5">
        <div className="w-full capitalize text-[28px] h-[50px] flex justify-center items-center shadow-md">
          Landing Pages
        </div>
        <div className="w-full h-auto py-5 flex flex-col gap-4 items-center">
          <div
            onClick={() => history.push("/digitalLanding")}
            className="w-[600px] cursor-pointer border h-[120px] px-2 flex items-center justify-between"
          >
            <div className="w-[150px] ">
              <FaFile size={60} />
            </div>
            <div className="text-[24px] w-[80%]">Digital Agency Landing</div>
          </div>
          <div
            onClick={() => history.push("/careerLanding")}
            className="w-[600px] cursor-pointer border h-[120px] px-2 flex items-center justify-between"
          >
            <div className="w-[150px] ">
              <FaFile size={60} />
            </div>
            <div className="w-[80%] text-[24px]">Job Finder Landing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
