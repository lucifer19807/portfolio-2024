import Navbar from "../navbar/navbar";

function ContactPage() {
  return (
    <div className="bg-black h-screen ">
      <Navbar />
      <div className=" w-full flex justify-start py-12 mt-40">
        <div className="flex flex-container w-full max-w-[50%] flex-col  m-5 p-20 pr-2.5 pt-2.5 pb-2.5 pl-2.5">
          <div className="text-violet-800  flex text3 line-height-88  font-[Space Grotesk] font-medium tracking-normal  uppercase mt-5 max-md:max-w-full max-md:mt-10">
            <div className="  bg-violet-600 w-[115px]  shrink-0 h-px my-auto" />

            <p className="pl-2 text-2xl font-[drummer] leading-[88px]  tracking-normal ">
              GET CONNECTED{" "}
            </p>
          </div>

          <div className="text-8xl font-bold leading-[88px] tracking-tighter text-white mr-0 my-2.5 max-md:max-w-[50%] max-md:text-4xl max-md:leading-[50px]">
            let’s connect and Create. <br />
            Reach Out Now! ✨
          </div>
        </div>
        <div class="container mx-auto px-4 max-w-lg">
  <form className="h-400px w-400px " class="bg-black-900 mr-auto shadow-md rounded-lg p-6">
    <div class="mb-6">
      <label for="name" class="block text-white text-sm font-bold mb-2">Name <span class="text-red-500">*</span></label>
      <input type="text" id="name" name="name" placeholder="Your Name" class="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"></input>
    </div>
    <div class="mb-6">
      <label for="email" class="block text-white text-sm font-bold mb-2">Email <span class="text-red-500">*</span></label>
      <input type="email" id="email" name="email" placeholder="example@email.com" class="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"></input>
    </div>
    <div class="mb-6">
      <label for="message" class="block text-white text-sm font-bold mb-2">Message</label>
      <textarea id="message" name="message" placeholder="Leave us a message..." class="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"></textarea>
    </div>
    <div class="flex justify-between items-center">
      <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      <p class="text-xs text-gray-500">*Required</p>
    </div>
  </form>
</div>

      </div>
    </div>
  );
}

export default ContactPage;
