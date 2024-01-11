/* eslint-disable no-unused-vars */
type itemType = any;
export const version: string;
export function reduce(arr: itemType[], key: string): itemType[];
export function intersection(
  arr1: itemType[],
  arr2: itemType[],
  key: string
): itemType[];
export function difference(
  arr1: itemType[],
  arr2: itemType[],
  key: string
): itemType[];
export function all(
  arr1: itemType[],
  arr2: itemType[],
  key: string,
  select: string
): itemType[];
export function part(
  arr1: itemType[],
  arr2: itemType[],
  key: string
): itemType[];
export function other(
  arr1: itemType[],
  arr2: itemType[],
  key: string
): itemType[];
