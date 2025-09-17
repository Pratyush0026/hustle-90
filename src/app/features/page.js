"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FeaturesPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/coming-soon");
  }, [router]);

  return null;
}
