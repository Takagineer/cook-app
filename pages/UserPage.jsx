import React from "react";
import Link from "next/link";

export default function UserPage() {
  return (
    <>
      <h1>マイページ</h1>
      <Link href="/">
        <a>トップページへ</a>
      </Link>
    </>
  );
}
