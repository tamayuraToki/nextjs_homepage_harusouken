"use client"; 

import { list, getUrl } from "aws-amplify/storage";
import Image from "next/image";

import { Amplify } from "aws-amplify";
import ImageSlider from "@/app/components/ImageSlider";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

export default async function Page() {

  // 対象フォルダ内のすべての画像を取得
  const listResult = await list({
    path: "images/top-page-animation/",
    options: { listAll: true }
  });

  // 画像のみ抽出
  const imageItems = listResult.items.filter(item =>
    item.path.endsWith(".jpg") ||
    item.path.endsWith(".png") ||
    item.path.endsWith(".jpeg") ||
    item.path.endsWith(".webp")
  );

  //各画像のURLを取得
  const images = await Promise.all(
    imageItems.map(async (item) => {
      const { url } = await getUrl({ path: item.path });
      return { path: item.path, url: url.toString() };
    })
  );

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-16 items-center sm:items-start">

        {/* --- 画像のスライドショー作成--- */}
        <ImageSlider images={images.map(img => img.url)} />

        <section className="w-full text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide mb-6">
            - 挨拶 -
          </h1>

          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800">
            <p>
              晴総建は主に住宅基礎工事、外構工事、造成や擁壁等の土木工事等を行っています。
            </p>
            <p>
              高品質なモノ作りを追求する為、丁寧で正確な仕事を日々心がけています。
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
