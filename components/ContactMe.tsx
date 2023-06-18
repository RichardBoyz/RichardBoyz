import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:r1382333@gmail?subject=${formData.subject}&body=哈囉，我叫 ${formData.name}。 ${formData.message} 聯絡信箱是: ${formData.email}`;
  };
  return (
    <div
      className="h-screen w-screen flex flex-col text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto
    items-center relative dark:text-slate-200"
    >
      <h3
        className="absolute top-28 uppercase tracking-[20px]
       text-gray-500 text-2xl"
      >
        Contact
      </h3>
      <div className="flex flex-col space-y-10 pt-40">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          如果有任何機會~{" "}
          <span className="decoration-[#04aef5]/50 underline">歡迎聯繫</span>
        </h4>

        <div className="space-y-2 md:text-2xl ">
          <div className="flex justify-center space-x-5">
            <PhoneIcon className="text-[#5f9ea0] h-7 w-7 animate-pulse" />
            <p className="">+886 975412010</p>
          </div>
          <div className="flex justify-center space-x-5">
            <EnvelopeIcon className="text-[#5f9ea0] h-7 w-7 animate-pulse" />
            <p className="">r1382333@gmail.com</p>
          </div>
          <div className="flex justify-center space-x-5">
            <MapPinIcon className="text-[#5f9ea0] h-7 w-7 animate-pulse" />
            <p className="">花蓮國</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full space-y-2 mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              className="contactInput"
              placeholder="姓名"
            />
            <input
              {...register("email")}
              type="text"
              className="contactInput"
              placeholder="電子信箱"
            />
          </div>

          <input
            {...register("subject")}
            type="text"
            className="contactInput"
            placeholder="標題"
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="訊息內容"
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] dark:bg-[#5f9ea0] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            送出
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
