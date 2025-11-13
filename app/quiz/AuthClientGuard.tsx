"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function AuthClientGuard() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const check = () => {
      const authToken = Cookies.get("authToken");
      if (!authToken) {
        router.replace("/login");
      }
    };
    check();
  }, [pathname, router]);

  return null;
}
