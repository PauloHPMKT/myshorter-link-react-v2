import { useToastify } from "../hooks/useToastify";

export const clipboardCopy = async (text: string) => {
  const { clipboard } = navigator;
  await clipboard.writeText(text);
  useToastify("success", "Link copiado com sucesso!");
}
