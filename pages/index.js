import styles from "@/styles/Home.module.css";

export default function Home() {
  const items = ["React", "Next.js", "TypeScript"];

  return (
    <div className={`${styles.container}`}>
    <section>
      <h1>react-course-2-1</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </section>
    </div>
  );
}
