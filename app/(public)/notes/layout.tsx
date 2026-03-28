import css from './layout.module.css';

export default function NotesLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className={css.main}>
      {children}
      {modal}
    </div>
  );
}
