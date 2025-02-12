type TypeText = {
  title: string;
  subTitle: string;
  styleTitle?: string;
  styleSubtitle?: string;
};
export function Title({
  title,
  subTitle,
  styleTitle,
  styleSubtitle,
}: TypeText) {
  return (
    <div
      className={`md:w-full  flex flex-col justify-center items-center mb-10`}
    >
      <h1 className={`font-bold md:text-6xl text-3xl ${styleTitle}`}>
        {title}
      </h1>
      <h3
        className={`text-gray-600 text-xl text-center text-pretty ${styleSubtitle}`}
      >
        {subTitle}
      </h3>
    </div>
  );
}
