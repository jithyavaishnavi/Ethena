import Spline from '@splinetool/react-spline';

export function SplineBackground() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <Spline
        scene="https://prod.spline.design/A1tAo0vjb7phuODp/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}
