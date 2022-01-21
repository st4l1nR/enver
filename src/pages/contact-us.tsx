import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, TextArea } from "../components";
import Image from "next/image";
import { Snackbar, Alert } from "@mui/material";

type formData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const contactUs = () => {
  const [messageSent, setMessageSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();
  
  const onSubmit = (data: formData) => {
    setMessageSent(true);
  };
  const example = { usename: "dsfa" };
  return (
    <>
      <form
        className="relative max-w-6xl px-5 mx-auto mt-16 md:px-0 min-h-[80vh]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex space-x-12">
          <div className="basis-full md:basis-1/2">
            <div className="flex flex-col max-w-md space-y-6">
              <span className="text-3xl font-bold text-white md:text-5xl">
                Contact Us
              </span>
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between space-x-2">
                  <TextField
                    placeholder="First Name"
                    error={errors.firstName?.message}
                    {...register("firstName", { required: "Required" })}
                  />
                  <TextField
                    placeholder="Last Name"
                    error={errors.lastName?.message}
                    {...register("lastName", { required: "Required" })}
                  />
                </div>
                <TextField
                  placeholder="Email"
                  error={errors.email?.message}
                  {...register("email", {
                    required: "Required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email",
                    },
                  })}
                />
                <TextArea
                  rows={10}
                  placeholder="Message"
                  error={errors.message?.message}
                  {...register("message", {
                    required: "Required",
                    minLength: {
                      value: 20,
                      message: "Min lenght of 20 characters",
                    },
                    maxLength: {
                      value: 400,
                      message: "Max lenght of 400 characters",
                    },
                  })}
                />
                <div className="flex justify-center md:justify-end">
                  <input
                    className="h-12 space-x-2 font-bold text-center text-white align-middle transition-shadow rounded-lg cursor-pointer w-36 bg-primary filter hover:brightness-125 md:mx-0 hover:shadow-md hover:shadow-primary/50"
                    type="submit"
                    name="Send"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block basis-1/2">
            <Image
              src="/images/stroke-man.png"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
          <img
            className="absolute w-10 -top-2 right-10 md:hidden"
            src="/icons/twice-triangle.svg"
            alt=""
          />
          <img
            className="absolute w-10 -left-10 -bottom-10 md:hidden"
            src="/icons/twice-round.svg"
            alt=""
          />
        </div>
      </form>
      <>
        <Snackbar
          open={messageSent}
          autoHideDuration={6000}
          onClose={() => setMessageSent(false)}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <Alert severity="success" onClose={() => setMessageSent(true)}>
            Message sent
          </Alert>
        </Snackbar>
      </>
    </>
  );
};

export default contactUs;
