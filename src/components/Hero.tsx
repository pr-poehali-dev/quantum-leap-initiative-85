import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/0d2ac45b-d53d-4aaf-927e-ee54eb8e46f6/files/f3dff45f-9997-434d-b540-5f7441cab504.jpg"
          alt="Подготовка к экзаменам"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4">
        <p className="uppercase tracking-widest text-sm md:text-base mb-4 opacity-80">Подготовка к ОГЭ и ЕГЭ</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ОБЩЕСТВОЗНАНИЕ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Сдай экзамен на высокий балл с опытным преподавателем. Разбираем теорию, решаем задания, готовимся системно.
        </p>
        <button className="bg-white text-black px-8 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
          Записаться на пробный урок
        </button>
      </div>
    </div>
  );
}