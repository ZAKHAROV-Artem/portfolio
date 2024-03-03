"use client";
import { Button } from "@/components/ui/button";
import { useEmail } from "@/hooks/mutations/use-email";
import Image from "next/image";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ConcactMeFields,
  ContactMeValidationSchema,
} from "@/validation/contact-me";
import toast from "react-hot-toast";

export default function ContactMe() {
  const { mutateAsync, isPending } = useEmail();
  const { register, handleSubmit, reset } = useForm<ConcactMeFields>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      message: "",
    },
    resolver: zodResolver(ContactMeValidationSchema),
  });
  const onSubmit: SubmitHandler<ConcactMeFields> = async (data) => {
    if (sessionStorage.getItem("sent")) {
      toast("You already wrote me today", {
        icon: "😊",
      });
      return;
    }
    await mutateAsync(data, {
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
    });
  };
  const onError: SubmitErrorHandler<ConcactMeFields> = async (data) => {
    toast((data.email?.message || data.message?.message) as string, {
      icon: "😱",
    });
  };
  return (
    <div className="relative">
      <div className="container space-y-12 py-10 md:py-20">
        <h2 className="relative z-10 max-w-screen-lg font-organic-relief  text-2xl leading-loose text-white mix-blend-difference md:text-4xl md:leading-[2.2]">
          WANT TO HAVE AN AWESOME PROJECT DONE?
        </h2>
        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-5">
          <div className="relative z-10 grid max-w-screen-lg items-center gap-2 overflow-hidden  rounded-2xl border border-black  bg-white p-2 sm:grid-cols-[3fr,1fr] sm:rounded-full md:grid-cols-[4fr,1fr]">
            <input
              placeholder="Enter your e-mail here"
              className="h-full w-full rounded-lg border-none px-2 py-3  outline-none"
              type="email"
              {...register("email")}
            />
            <Button
              type="submit"
              className="h-full w-full rounded-xl sm:rounded-3xl"
              variant="dark"
              disabled={isPending}
            >
              {isPending ? "Sending..." : "Contact me"}
            </Button>
          </div>{" "}
          <textarea
            placeholder="Message"
            className="relative z-10 h-32 w-full max-w-screen-lg resize-none rounded-2xl border px-5 py-3 outline-none sm:rounded-[30px]"
            {...register("message")}
          />
        </form>
      </div>
      <Image
        className="absolute -bottom-[150px] left-0 object-cover sm:-bottom-[200px] md:-bottom-[270px] md:w-[650px]"
        src="/shape-4.png"
        quality={100}
        width={982}
        height={681}
        alt={""}
      />
      <Image
        className="absolute -top-20 right-0 hidden w-80 lg:block"
        src="/shape-5.png"
        quality={100}
        width={485}
        height={753}
        alt={""}
      />
    </div>
  );
}
