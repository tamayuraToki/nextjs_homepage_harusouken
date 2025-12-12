
export default async function Page() {
  return (
    <div className="font-sans min-h-screen flex justify-center items-start px-6 sm:px-20 py-14">
      <main className="w-full max-w-xl bg-white/70 backdrop-blur-sm shadow-md p-8 rounded-lg">

        <h1 className="text-4xl font-bold mb-6  pb-2 w-full text-left">
          採用情報
        </h1>

        <p className="text-2xl font-bold mb-6 border-b-2 pb-2 w-full  text-left">
          応募条件
        </p>

        <div className="w-full max-w-xl space-y-4">

          {/* 1行のスタイル：項目名の幅を固定 */}
          {[
            { value: "未経験者歓迎" },
            { value: "普通免許必須" },
          ].map((item) => (
            <div
              className="flex border-b py-2 items-start"
            >
              {/* ✔ 値は残りの幅で右側に配置 */}
              <span className="flex-1 text-left">{item.value}</span>
            </div>
          ))}

        </div>


        <p className="mt-10 text-2xl font-bold mb-6 border-b-2 pb-2 w-full  text-left">
          優遇条件
        </p>

        <div className="w-full max-w-xl space-y-4">

          {/* 1行のスタイル：項目名の幅を固定 */}
          {[
            { value: "経験者優遇" },
            { value: "準中型以上免許" },
          ].map((item) => (
            <div
              className="flex border-b py-2 items-start"
            >
              {/* ✔ 値は残りの幅で右側に配置 */}
              <span className="flex-1 text-left">{item.value}</span>
            </div>
          ))}

        </div>
      </main>
    </div>
  );
}
