import DynamicRenderer from "../../components/DynamicRenderer";

export default function AccordionPage({ params }) {
  const { id } = params;
  return (
    <main style={{ padding: 24 }}>
      <h1>Accordion {id}</h1>

      <h2>Component</h2>
      <DynamicRenderer type="accordion" id={id} />

      <h2>Example preview</h2>
      <DynamicRenderer type="accordion-example" id={id}  />
    </main>
  );
}
