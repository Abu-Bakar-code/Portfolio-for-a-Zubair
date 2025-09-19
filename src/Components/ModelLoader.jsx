import React from "react"
import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-gray-800/70 px-4 py-3 rounded-xl shadow-lg">
        {/* Small spinning ring */}
        <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Percentage */}
        <p className="text-violet-400 font-medium mt-2 text-sm">
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  )
}

export default Loader
