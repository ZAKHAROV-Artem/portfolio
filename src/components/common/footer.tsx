"use client";
import getPlaylist from "#/actions/get/getPlaylist";
import { Button } from "@/components/ui/button";
import { usePlaylist } from "@/hooks/queries/usePlaylist";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useUpdateEffect } from "usehooks-ts";
import SocialMedia from "../complex/social-media";
import { random } from "@/lib/utils";

export default function Footer() {
  const { data, isSuccess } = usePlaylist();
  const [randomIndex, setRandomIndex] = useState<number | null>(null);

  useUpdateEffect(() => {
    if (isSuccess && typeof data.data !== "string") {
      setRandomIndex(random(0, data?.data.items.length));
    }
  }, [isSuccess]);
  return (
    <div className="py-10 relative z-10 bg-black">
      <div className="container flex flex-col sm:flex-row gap-y-10 justify-between items-center">
        {typeof data?.data !== "string" && data && randomIndex !== null ? (
          <div className="text-white   font-light ">
            <span className="sm:text-left text-center">
              A song from my current playlist{" "}
            </span>
            <br />
            <div className="flex items-center gap-x-3">
              <Image
                src={
                  data?.data.items[randomIndex]?.snippet.thumbnails.default.url
                }
                width={
                  data?.data.items[randomIndex]?.snippet.thumbnails.default
                    .width
                }
                height={
                  data?.data.items[randomIndex]?.snippet.thumbnails.default
                    .height
                }
                alt="Song cover"
              />{" "}
              <div className="font-mono space-y-2">
                <div>{data?.data.items[randomIndex]?.snippet.title}</div>
                <Link
                  className="uppercase block w-fit bg-white text-black px-2 py-1 rounded-lg"
                  href={`https://music.youtube.com/watch?v=${data?.data.items[randomIndex]?.snippet.resourceId.videoId}`}
                  target="_blank"
                >
                  Listen
                </Link>
              </div>
            </div>{" "}
          </div>
        ) : (
          <div>
            Something wen wrong and you will not know what i am listening to
          </div>
        )}
        <SocialMedia />
      </div>
    </div>
  );
}
