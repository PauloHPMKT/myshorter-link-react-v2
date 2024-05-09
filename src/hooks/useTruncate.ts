export const useTruncate = (text: string | undefined, length: number) => {
  return text ? text!.slice(0, length) : text;
}
