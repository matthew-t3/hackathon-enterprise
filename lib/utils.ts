import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function properName(name: string) {
  const words = name.split('_');
  return words.reduce((acc, word) => {
    return acc + ' ' + word[0].toUpperCase() + word.slice(1);
  }, '');
}
