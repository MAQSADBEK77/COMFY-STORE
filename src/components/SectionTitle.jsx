function SectionTitle({ text }) {
  return (
    <div className="border-b-2 border-base-300 pb-5">
      <h5 className="text-3xl font-medium tracking-tighter capitalize">
        {text}
      </h5>
    </div>
  );
}
export default SectionTitle;
