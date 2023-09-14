import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 gap-4">
      <div>
        <h1 className="text-6xl font-bold text-center text-white">
          React Video
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full overflow-hidden">
        <div className="border border-neutral-800 overflow-hidden rounded-md p-2 aspect-video w-10/12 bg-neutral-900 group relative">
          <div className="absolute inset-0 top-auto h-10 transition-all group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:via-black/20 group-hover:to-black/0  flex items-center justify-center">
            {/* <Controls left={<Play />} right={<Volume />} /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
