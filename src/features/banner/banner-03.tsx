import React from "react";
import type { Section } from "../../type";

type Props = {
  data?: Section;
};

export const Banner03 = ({ data }: Props) => {
  return (
    <div
      className="relative h-[500px] w-full overflow-hidden rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${data?.bgURL})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex h-full max-w-3xl flex-col justify-center px-8 md:px-16">
        {data?.subTitle && (
          <span className="mb-4 inline-block rounded-full bg-primary/90 px-4 py-1 text-sm font-medium text-primary-foreground">
            {data?.subTitle}
          </span>
        )}
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          {data?.title}
        </h1>
        <p className="mb-8 max-w-xl text-lg text-white/90">
          {data?.description}
        </p>
        <div>
          <a
            href={data?.buttonUrl}
            className="inline-block rounded-md bg-white px-8 py-4 font-medium text-gray-900 transition-colors hover:bg-gray-100"
          >
            {data?.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};
