import { getUrl } from "aws-amplify/storage";
import Image from "next/image";

export default async function Page() {
  return (
    <div className="font-sans min-h-screen flex justify-center items-start px-6 sm:px-20 py-14">
      <main className="w-full max-w-xl bg-white/70 backdrop-blur-sm shadow-md p-8 rounded-lg">

        <h1 className="text-2xl font-bold mb-6 border-b-2 pb-2 w-full">
          会社情報
        </h1>

        <div className="w-full max-w-xl space-y-4">

          {/* 1行のスタイル：項目名の幅を固定 */}
          {[
            { label: "会社名", value: "晴総建" },
            { label: "代表", value: "浦辺啓太" },
            { label: "創業", value: "2024年" },
            { label: "所在地", value: "兵庫県姫路市夢前町神種540" },
            { label: "TEL", value: "090-5256-7444" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex border-b py-2 items-start"
            >
              {/* ✔ 項目名の幅を固定（例：120px） */}
              <span className="w-28 font-medium">{item.label}</span>

              {/* ✔ 値は残りの幅で右側に配置 */}
              <span className="flex-1 text-left">{item.value}</span>
            </div>
          ))}

        </div>
      </main>
    </div>
  );
}
