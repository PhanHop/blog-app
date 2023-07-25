import Image from "next/image";
import React from "react";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  image?: string;
  title?: string;
  size?: "small" | "large";
  id?: string;
  classNameImage?: string;
};

export default function NewsItem({
  image,
  title,
  size = "small",
  id,
  classNameImage,
}: Props) {
  return (
    <Link href={`/blog/${id}` || ""} legacyBehavior>
      <div className="relative w-full h-full hover:cursor-pointer">
        <Image
          src={image || ""}
          alt={title || ""}
          layout="fill"
          objectFit="cover"
          className={classNames(classNameImage, "h-full w-full")}
        />
        <div
          className={classNames(
            "absolute font-medium text-white",
            size === "large"
              ? "bottom-5 left-5 text-4xl w-[70%]"
              : " bottom-3 left-3"
          )}
        >
          {title}
        </div>
      </div>
    </Link>
  );
}
