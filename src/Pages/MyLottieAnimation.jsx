import animationData from "../assets/my-animation.json"; // JSON, not .lottie

const MyLottieAnimation = () => {
  return (
    <div className="w-64 h-64 mx-auto">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};
export default MyLottieAnimation;