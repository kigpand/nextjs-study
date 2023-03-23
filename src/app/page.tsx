import Image from "next/image";
import styles from "./page.module.css";
import os from "os";
import Counter from "@/components/Counter";

export default function Home() {
  console.log("123");
  console.log(os.hostname());
  return (
    <h1>
      Homepage
      <Counter />
    </h1>
  );
}
