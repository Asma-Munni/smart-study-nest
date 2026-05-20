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
import toast, { Toaster } from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }

    if (data) {
      toast.success("Registration successful! Please login.");

      setTimeout(() => {
        router.push("/login");
        router.refresh();
      }, 800);
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Google registration failed");
    }
  };

  return (
    <section className="min-h-screen bg-[#f8f4ea] px-4 py-12">
      <Toaster position="top-center" />

      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#d8a84f]">
            Library Room Booking
          </p>

          <h1 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
            Create Your{" "}
            <span className="text-[#d8a84f]">Library Account</span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
            Join our study room management system to book quiet study spaces,
            manage reservations, and access comfortable library rooms with ease.
          </p>
        </div>

        <Card className="mx-auto max-w-2xl rounded-3xl border border-[#eadfca] bg-white p-6 shadow-xl md:p-10">
          <div className="mb-6 rounded-2xl bg-[#0f172a] px-5 py-5 text-center">
            <h2 className="text-2xl font-bold text-[#f5ecd7]">
              Register for Room Access
            </h2>

            <p className="mt-2 text-sm text-[#f5ecd7]/80">
              Create an account to reserve library rooms and manage your study
              bookings.
            </p>
          </div>

          <Form onSubmit={onSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <TextField isRequired name="name" type="text">
              <Label className="font-semibold text-[#0f172a]">
                Full Name
              </Label>

              <Input
                placeholder="Enter your full name"
                className="rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none transition focus:border-[#d8a84f] focus:ring-2 focus:ring-[#d8a84f]/30"
              />

              <FieldError />
            </TextField>

            {/* Photo URL */}
            <TextField
              isRequired
              name="image"
              type="url"
              validate={(value) => {
                if (!value) {
                  return "Photo URL is required";
                }

                return null;
              }}
            >
              <Label className="font-semibold text-[#0f172a]">
                Photo URL
              </Label>

              <Input
                placeholder="Paste your profile image URL"
                className="rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none transition focus:border-[#d8a84f] focus:ring-2 focus:ring-[#d8a84f]/30"
              />

              <Description className="text-gray-500">
                Please provide a valid image URL for your profile photo.
              </Description>

              <FieldError />
            </TextField>

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
                placeholder="Type your email"
                className="rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none transition focus:border-[#d8a84f] focus:ring-2 focus:ring-[#d8a84f]/30"
              />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={6}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[a-z]/.test(value)) {
                  return "Password must contain at least one lowercase letter";
                }

                return null;
              }}
            >
              <Label className="font-semibold text-[#0f172a]">
                Password
              </Label>

              <Input
                placeholder="Create a secure password"
                className="rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-4 py-3 text-[#0f172a] outline-none transition focus:border-[#d8a84f] focus:ring-2 focus:ring-[#d8a84f]/30"
              />

              <Description className="text-gray-500">
                Must be at least 6 characters with 1 uppercase and 1 lowercase
                letter.
              </Description>

              <FieldError />
            </TextField>

            {/* Register Button */}
            <Button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#0f172a] px-6 py-3 font-semibold text-[#f5ecd7] transition duration-300 hover:bg-[#d8a84f] hover:text-[#0f172a]"
            >
              <Check />
              Register
            </Button>
          </Form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#eadfca]" />
            <span className="text-sm font-medium text-gray-500">OR</span>
            <div className="h-px flex-1 bg-[#eadfca]" />
          </div>

          {/* Google Register */}
          <Button
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full rounded-xl border border-[#eadfca] bg-[#f8f4ea] px-6 py-3 font-semibold text-[#0f172a] transition duration-300 hover:border-[#d8a84f] hover:bg-[#d8a84f]/20"
          >
            Continue with Google
          </Button>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#d8a84f] hover:underline"
            >
              Login
            </Link>
          </p>
        </Card>
      </div>
    </section>
  );
};

export default RegisterPage;