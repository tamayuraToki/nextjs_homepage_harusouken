import { getUrl } from "aws-amplify/storage";
import Image from "next/image";

export default async function Page() {
  const { url } = await getUrl({
    path: "images/top-page-animation/image1.jpg",
  });
  
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <p>
            所在地とか。
          </p>

        </ol>

        <div className="p-10">
          <Image src={url.toString()} width={400} height={300} alt="test" />
        </div>

      </main>

    </div>
  );
}
