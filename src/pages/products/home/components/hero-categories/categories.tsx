import { arrayCategories } from './model-categorie';

export function Categories() {
  return (
    <section className="w-full min-h-52 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 my-20">
      {arrayCategories.map((categorie) => {
        return (
          <div
            className="h-32 w-36 rounded-lg flex flex-col justify-center items-center bg-black text-orange-500 text-lg"
            key={categorie.title}
          >
            {categorie.icon}
            <h1>{categorie.title}</h1>
          </div>
        );
      })}
    </section>
  );
}
