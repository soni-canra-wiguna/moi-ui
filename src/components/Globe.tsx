import createGlobe from "cobe"
import { useEffect, useRef } from "react"

const SIZE = 1000

const Globe = () => {
  // const canvasRef = useRef<ElementRef<"canvas">>(null)
  const canvasRef: any = useRef()

  useEffect(() => {
    let phi = 0

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: SIZE * 2,
      height: SIZE * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi
        phi += 0.01
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <div className="fixed z-[1] text-white font-bold left-20 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <canvas
        ref={canvasRef}
        style={{ width: SIZE, height: SIZE, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  )
}

export default Globe
