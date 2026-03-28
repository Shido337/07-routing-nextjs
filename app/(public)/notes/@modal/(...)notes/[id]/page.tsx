import NoteModal from '@/components/NoteModal/NoteModal';
import NotePreview from '@/components/NotePreview/NotePreview';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function InterceptedNotePage({ params }: Props) {
  const { id } = await params;

  return (
    <NoteModal>
      <NotePreview id={id} />
    </NoteModal>
  );
}
