import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "80vh" }}
      >
        <h1>Hello coming user 👋</h1>
        <p>Welcome to our website. We are excited to have you here!</p>
      </div>
    </>
  );
}
