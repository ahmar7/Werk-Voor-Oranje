const AccordionItem = ({ faq, onToggle, active }) => {
  const { question, answer } = faq;
  return (
    <div className="faq-active faq-main" onClick={onToggle}>
      <dt className="text-lg faq-title leading-6 font-medium text-gray-900">
        <span> {question}</span>{" "}
        <span className="sign">{active ? "+" : "-"}</span>
      </dt>{" "}
      {active ? (
        <dd className="mt-2 text-base faq-desc text-gray-500">
          <span>{answer}</span>
        </dd>
      ) : (
        ""
      )}
    </div>
  );
};
export default AccordionItem;
