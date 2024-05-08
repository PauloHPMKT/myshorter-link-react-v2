export const useTruncate = (text: string | undefined, length: number) => {
  return text!.length > length ? text!.slice(0, length) : text;
}
