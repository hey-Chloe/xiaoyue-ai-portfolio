import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "联系",
  description: "通过邮件或 GitHub 联系小悦。",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt=""
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            一起做值得落地的 AI 系统
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            如果你正在寻找 AI 应用、Agent、RAG 或平台工程方向的合作伙伴，欢迎联系我。提交后会调用你的邮件客户端，不会把内容发送给第三方表单服务。
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
