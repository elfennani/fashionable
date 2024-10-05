/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  rating: number;
  children: string;
  fullname: string;
  city: string;
  profileImage: string;
};

function Testimonial(props: Props) {
  return (
    <div className="flex flex-col gap-4 p-6 border border-neutral-200">
      <div className="flex items-center gap-2">
        {Array(Math.floor(props.rating))
          .fill("")
          .map((index) => (
            <span
              className="iconify teenyicons--star-solid size-4 text-rose-400"
              key={index}
            />
          ))}

        <span className="font-semibold">{props.rating.toFixed(1)}</span>
      </div>

      <p className="font-light tracking-wide leading-loose text-neutral-600">
        {props.children}
      </p>

      <hr className="border-neutral-200" />

      <div className="flex gap-3 items-center">
        <img
          src={props.profileImage}
          alt={props.fullname}
          className="size-10 rounded-full object-cover"
        />
        <div>
          <h4 className=" leading-5 tracking-wide">{props.fullname}</h4>
          <p className="text-xs tracking-wide text-neutral-500">{props.city}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
