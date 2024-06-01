interface TemplatePageTitleContentProps {
  children: React.ReactNode;
}

export const TempletePageTitleContent = ({ children }: TemplatePageTitleContentProps) => {
  return (
    <div className="pb-11 border-b-2 border-slate-300 mb-6">
      { children }
    </div>
  )
}