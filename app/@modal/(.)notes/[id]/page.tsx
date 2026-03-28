'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import NotePreviewClient from './NotePreview.client';

type Props = {
  params: Promise<{ id: string }>;
};

export default function InterceptedNotePage({ params }: Props) {
  const { id } = use(params);
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NotePreviewClient id={id} />
    </Modal>
  );
}
