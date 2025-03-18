import Image from "next/image";
import Button from "./ButtonCommon";

interface BoxProps {
  imageSrc: string;
  numberImage: string;
  buttonText: string;
  text: string;
  maintext: string;
  width: string;
  height: string;
  expandContent?: React.ReactNode;
  isExpand: boolean;
  onClick?: () => void;
}

export default function Box({
  imageSrc,
  numberImage,
  buttonText,
  text,
  maintext,
  width,
  isExpand,
  expandContent,
  onClick,
}: BoxProps) {
  return (
    <div className="flex items-center justify-center mb-[10px] ">
      <div
        className={`flex flex-col items-center justify-center rounded-md bg-[#E5EBFD] pt-[30px] pr-[25px] pb-[30px] pl-[25px] transition-all duration-500 ${
          isExpand ? "h-auto" : "h-[250px]"
        }`}
        style={{ width }}
      >
        {isExpand ? (
          <div>{expandContent}</div>
        ) : (
          <>
            <div className="w-full flex justify-end items-end mb-[10px]">
              <p
                className="text-2xl pr-[7px] font-semibold text-black break-words whitespace-normal"
                dangerouslySetInnerHTML={{ __html: maintext }}
              ></p>
              <Image
                src={numberImage}
                alt="numberImage"
                width={30}
                height={30}
                className="self-center"
              />
            </div>

            <div className="flex flex-row items-start justify-start w-full h-[130px] pt-[13px]">
              <Image src={imageSrc} alt="logo" width={130} height={100} />

              <div className="flex flex-col items-start justify-start h-full w-[360px] ml-[20px]">
                <p
                  className="text-gray-700 text-left mb-[10px] text-[17px] break-words whitespace-normal"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
                <Button
                  className="cursor-pointer"
                  text={buttonText}
                  onClick={onClick || (() => {})}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
