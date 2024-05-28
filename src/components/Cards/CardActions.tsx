import { FiTrash } from "react-icons/fi"

interface CardActionsProps {
  removeShortenLink: (id: string) => void;
}

export const CardActions = ({ removeShortenLink }: CardActionsProps) => {
  const removeLink = () => {
    removeShortenLink("id");
  }

  return (
    <div className="flex gap-5 shadow-md bg-white rounded-md items-center w-56 absolute top-8 right-0">
      <ul>
        <li className="p-4 flex cursor-pointer" onClick={removeLink}>
          <FiTrash size={24} color="red" className="mr-2"/>
          Remover
        </li>
      </ul>
    </div>
  )
}