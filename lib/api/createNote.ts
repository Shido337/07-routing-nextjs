import { api } from './client';
import type { Note } from '@/types/note';

export const createNote = async (noteData: {
  title: string;
  content: string;
  tag: string;
}): Promise<Note> => {
  const { data } = await api.post<Note>('/notes', noteData);
  return data;
};
