function Achievement() {
  return (
    <div className="flex flex-col justify-center items-stretch py-0 bg-white">
     
      <div className="flex flex-col items-center px-16 pt-0 mt-6 w-full max-md:px-5 max-md:mt-0 max-md:max-w-full">
        <div className="flex flex-col items-start w-full max-w-[1120px] max-md:max-w-full">
          <div className="flex gap-2.5 items-stretch text-sm tracking-widest leading-4 text-violet-600 uppercase max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto h-px bg-violet-600 w-[81px]" />
            <div className="flex-auto font-bold max-md:max-w-full text">PROJECTS</div>
          </div>
          <div className="mt-2.5 text-4xl font-bold leading-10 text-black w-[638px] max-md:max-w-full">
            More projects,
            <br />
            more experience.
          </div>
          <div className="justify-center self-stretch px-4 mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
              <div className="flex flex-col items-stretch w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-stretch text-center text-neutral-500 max-md:mt-7">
                  <img
                    loading="lazy"
                    srcSet="https://res.cloudinary.com/doyheqz2f/image/upload/v1706689986/shadiwale_rcdcyv.jpg"
                    className="object-center  w-full aspect-[1.61]"
                  />
                  <div className="flex flex-col items-stretch px-8  py-10  bg-neutral-50 max-md:px-5">
                    <div className="text-xs font-semibold leading-6 uppercase whitespace-nowrap">
                      November, 2022
                    </div>
                    <div className="mt-4 text-2xl font-bold tracking-wider leading-8 text-black">
                    SHAADIWALE.COM
                    </div>
                    <div className="mt-4 text-sm tracking-wider leading-5 underline whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch text-center text-neutral-500 max-md:mt-7">
                  <img
                    loading="lazy"
                    srcSet="https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fed175d1f3f5f40308317f91f453719e9%2Fprojects%2F07f6439c45da4506b5ac3fe9f097ddd5%2F82ab2171-1971-41ed-822c-669794355b14.png&w=1440&q=75"
                    className="object-center w-full aspect-[1.61]"
                  />
                  <div className="flex flex-col items-stretch px-8 py-10 bg-neutral-50 max-md:px-5">
                    <div className="text-xs font-semibold leading-6 uppercase whitespace-nowrap">
                    January, 2023
                    </div>
                    <div className="mt-4 text-2xl font-bold tracking-wider leading-8 text-black">
                      {" "}
                      EZCREDIT
                    </div>
                    <div className="mt-4 text-sm tracking-wider leading-5 underline whitespace-nowrap">
                    Read More
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch text-center text-neutral-500 max-md:mt-7">
                  <img
                    loading="lazy"
                    srcSet="data:image/png;base64,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"
                    className="object-center w-full aspect-[1.61]"
                  />
                  <div className="flex flex-col items-stretch px-8 py-10 bg-neutral-50 max-md:px-5">
                    <div className="text-xs font-semibold leading-6 uppercase whitespace-nowrap">
                    January, 2024
                    </div>
                    <div className="mt-4 text-2xl font-bold tracking-wider leading-8 text-black">
                    BTC PREDICTOR
                    </div>
                    <div className="mt-4 text-sm tracking-wider leading-5 underline whitespace-nowrap">
                    Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Achievement;
