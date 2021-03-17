import "./NoNotes.scss";

const NoNotes = () => {
  return (
    <section className="no-notes">
      <h1 className="no-notes-heading">
        You don&apos;t have a to-do list yet{"      "}
        <i className="fas fa-list-ul no-notes-emoji">
          <span className="sr-only">List emoji</span>
        </i>
      </h1>
    </section>
  );
};

export default NoNotes;
