import { atom } from "jotai";

export const seqAtom = atom(1);

//TODO: 하드코딩된 값 바꾸기
export const bookIdAtom = atom(10);

export const storyAtom = atom(
  [{},
  ]
);
