"use client";

import React from "react";
import {
  Card,
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    console.log(data, error);

    if (data) {
      router.push("/");
      router.refresh();
    }

    if (error) {
      alert(error.message);
    }
  };

  return (
    <section className="min-h-screen bg-[#f8f4ea] px-4 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Page Heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#d8a84f]">
            Library Room Booking
          </p>

          <h1 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
            Login to Your <span className="text-[#d8a84f]">Library Account</span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
            Access your account to book study rooms, manage reservations, and
            explore available library spaces.
          </p>
        </div>

        {/* Login Card */}
        <Card className="mx-auto max-w-2xl rounded-3xl border border-[#eadfca] bg-white p-6 shadow-xl md:p-10">
          <div className="mb-6 rounded-2xl bg-[#0f172a] px-5 py-5 text-center">
            <h2 className="text-2xl font-bold text-[#f5ecd7]">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-[#f5ecd7]/80">
              Login to continue your library room booking experience.
            </p>
          </div>

          <Form onSubmit={onSubmit} className="flex flex-col gap-5">
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="font-semibold text-[#0f172a]">
                Email Address
              </Label>

              <Input
                placeholder="student@example.com"
                className="rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none transition focus:border-[#d8a84f] focus:ring-2 focus:ring-[#d8a84f]/30"
              />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <Label className="font-semibold text-[#0f172a]">
                Password
              </Label>

              <Input
                placeholder="Enter your password"
                className="rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none transition focus:border-[#d8a84f] focus:ring-2 focus:ring-[#d8a84f]/30"
              />

              <Description className="text-gray-500">
                Enter the password you used while creating your account.
              </Description>

              <FieldError />
            </TextField>

            {/* Login Button */}
            <Button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#0f172a] px-6 py-3 font-semibold text-[#f5ecd7] transition duration-300 hover:bg-[#d8a84f] hover:text-[#0f172a]"
            >
              <Check />
              Login
            </Button>
          </Form>

          {/* Signup Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Do not have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-[#d8a84f] hover:underline"
            >
              Create an account
            </Link>
          </p>
        </Card>
      </div>
    </section>
  );
};

export default LoginPage;