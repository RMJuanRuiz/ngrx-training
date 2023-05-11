import { createAction, props } from '@ngrx/store';
import { BookModel } from '@book-co/shared-models';

export const booksLoaded = createAction(
  '[Books API] Books Loaded Success',
  props<{ books: BookModel[] }>()
);

export const bookCreated = createAction(
  '[Books API] Book Created',
  props<{ book: BookModel }>()
);

export const bookUpdated = createAction(
  '[Books API] Book Updated',
  props<{ book: BookModel }>()
);

export const bookDeleted = createAction(
  '[Books API] Book Deleted',
  props<{ bookId: string }>()
);

// Normaly we should also set here the actions in case of each of the api actions fails
/* export const booksLoadedFails = createAction(
    '[Books API] Books Loaded Fails',
    props<{ errorMessage: string }>()
  ); */