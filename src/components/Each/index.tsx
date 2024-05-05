import { Children, ReactNode } from "react";

type ItemType<T> = T;
type RenderType<T> = (item: T, index?: number) => ReactNode;

interface EachProps<T> {
  of: ItemType<T>[];
  render: RenderType<T>;
}

export const Each = <T,>({ of, render }: EachProps<T>) => (
  Children.toArray(of.map(item => render(item)))
)