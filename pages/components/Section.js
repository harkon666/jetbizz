export default function Section(props) {
  return (
    <>
      <section id={props.id} className="section">
        <section className="section-title">
          <p>{props.word1} <span>{props.word2}</span></p>
          <h1>{props.sentences}</h1>
        </section>
      </section>
    </>
  );
}
