import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae consectetur dicta doloremque eveniet explicabo fugiat neque sapiente sequi tempore.'
  },
  {
    id: 2,
    rating: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae consectetur dicta doloremque eveniet explicabo fugiat neque sapiente sequi tempore.'
  },
  {
    id: 3,
    rating: 8,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae consectetur dicta doloremque eveniet explicabo fugiat neque sapiente sequi tempore.'
  }
]);
