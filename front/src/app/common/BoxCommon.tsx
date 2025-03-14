import Button from "./ButtonCommon";
import Image from 'next/image';

interface BoxProps {
  imageSrc: string;
  numberImage : string;
  buttonText: string; 
  maintext: string;
  text: string; 
  width: string; 
  height: string; 
}

export default function Box({
  imageSrc,
  numberImage,
  buttonText,
  text,
  maintext,
  width,
  height,
}: BoxProps) {
  return (
    <div className="flex items-center justify-center mb-[10px]">

      <div
        className="flex flex-col items-center justify-center rounded-md bg-[#E5EBFD] w-[540px] h-[250px] pt-[30px] pr-[25px] pb-[30px] pl-[25px]"
        style={{ width, height }}
      >
        <div className="w-full flex justify-end items-end mb-[15px]">
          <p className="text-2xl pr-[7px] font-semibold" dangerouslySetInnerHTML={{ __html: maintext }}></p>
          <Image 
            src={numberImage} 
            alt="numberImage" 
            width={30}
            height={30}
            className="self-center"
          />
        </div>
        
        <div className="flex flex-row items-center justify-between w-full h-[130px] w-[486px]">
          <Image 
            src={imageSrc} 
            alt="logo" 
            width={130}
            height={130}
          />
          
          <div className="flex flex-col items-start justify-start">
            <p className="text-gray-700 text-center mb-[16px] text-[18px]" dangerouslySetInnerHTML={{ __html: text }} />
            <Button text={buttonText} onClick={() => alert('Button clicked!')} />
          </div>
        </div>
      </div>
    </div>
  );
}
