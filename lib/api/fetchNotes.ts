import { api } from './client';
import type { Note, NoteTag } from '@/types/note';

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  search = '',
  page = 1,
  perPage = 12,
  tag?: NoteTag
): Promise<FetchNotesResponse> => {
  const params: Record<string, string | number> = { page, perPage };
  if (search.trim()) params.search = search.trim();
  if (tag) params.tag = tag;
  const { data } = await api.get<FetchNotesResponse>('/notes', { params });
  return data;
};
