"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center">
      Loading map...
    </div>
  ),
});

export default function MapPanel() {
  return (
    <div className="rounded-xl bg-white shadow-md overflow-hidden">
      <div className="p-6 pb-0">
        <h2 className="text-xl font-semibold">
          Tactical Map
        </h2>
      </div>

      <div className="h-[420px] p-6 pt-4">
        <Map />
      </div>
    </div>
  );
}
