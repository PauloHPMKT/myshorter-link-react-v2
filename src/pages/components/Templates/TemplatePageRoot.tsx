interface TemplatePageRootProps {
  children: React.ReactNode;
}

export const TemplatePageRoot = ({ children }: TemplatePageRootProps) => {
  return (
    <div className="min-h-[90vh]">
      { children }
    </div>
  )
}
