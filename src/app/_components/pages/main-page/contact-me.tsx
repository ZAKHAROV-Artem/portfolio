"use client";
import { Button } from "@/components/ui/button";
import { useEmail } from "@/hooks/mutations/use-email";
import Image from "next/image";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailFields, EmailValidationSchema } from "@/validation/email";
import toast from "react-hot-toast";

export default function ContactMe() {
  const { mutateAsync, isPending } = useEmail();
  const { register, handleSubmit, reset } = useForm<EmailFields>({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(EmailValidationSchema),
  });
  const onSubmit: SubmitHandler<EmailFields> = async ({ email }) => {
    if (sessionStorage.getItem("sent")) {
      toast("You already wrote me today", {
        icon: "😊",
      });
      return;
    }
    await mutateAsync(
      { email },
      {
        onSuccess: (res) => {
          if (res.error) {
            toast(res.error, {
              icon: "😨",
            });
          }
          if (res.success) {
            toast.success(res.success);
            sessionStorage.setItem("sent", "yes");
          }
          reset();
        },
      }
    );
  };
  const onError: SubmitErrorHandler<EmailFields> = async () => {
    toast("Invalid email", {
      icon: "😱",
    });
  };
  return (
    <div className="relative">
      <div className="container py-10 md:py-20 space-y-12">
        <h2 className="font-organic-relief max-w-screen-lg relative z-10  mix-blend-difference text-white text-2xl md:text-4xl leading-loose md:leading-[2.2]">
          WANT TO HAVE AN AWESOME PROJECT DONE?
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="grid sm:grid-cols-[3fr,1fr] md:grid-cols-[4fr,1fr] gap-2 relative max-w-screen-lg z-10  items-center p-2 bg-white  border rounded-2xl sm:rounded-full overflow-hidden border-black"
        >
          <input
            placeholder="Enter your e-mail here"
            className="w-full px-2 py-3 h-full border-none rounded-lg  outline-none"
            type="email"
            {...register("email")}
          />
          <Button
            type="submit"
            className="w-full h-full rounded-xl sm:rounded-3xl"
            variant="dark"
            disabled={isPending}
          >
            {isPending ? "Sending..." : "Contact me"}
          </Button>
        </form>
      </div>
      <Image
        className="absolute md:w-[650px] object-cover -bottom-[150px] sm:-bottom-[200px] md:-bottom-[270px] left-0"
        src="/shape-4.png"
        quality={100}
        width={982}
        height={681}
        alt={""}
      />
      <Image
        className="absolute right-0 hidden lg:block -top-20 w-80"
        src="/shape-5.png"
        quality={100}
        width={485}
        height={753}
        alt={""}
      />
    </div>
  );
}
