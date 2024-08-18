import Link from "next/link";
import CardComponent from "./components/card-component/card-component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-[6rem] ">
      <CardComponent />
      <div className="fixed bottom-1 md:bottom-5">
        Made with ❤️ by <Link href={"https://www.youtube.com/@CodingWithMrM"}
          target="_blank"
        >
          Coding With Mr.M
        </Link>
      </div>
    </main>
  );
}
