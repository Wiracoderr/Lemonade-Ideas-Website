"use client";
import React from "react";
import BlogEn from "./en";
import BlogEs from "./es";

export default function BlogPost({ params }: { params: { locale: string } }) {
  const locale = params.locale;

  if (locale === "es") {
    return <BlogEs />;
  }

  return <BlogEn />;
}
