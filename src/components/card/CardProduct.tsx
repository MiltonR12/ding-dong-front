import { Button } from "../ui/button"
import { Card } from "../ui/card"

type Props = {
  children?: React.ReactNode
  title: string
  description: string
  price: number
  image?: string
}

function CardProduct({ children, description, price, title, image }: Props) {
  return (
    <Card className="bg-white rounded-lg shadow-lg p-5 overflow-hidden">
      <div className="px-6 py-4">
        {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
        <h4 className="text-2xl font-semibold text-gray-800">{title}</h4>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        <p className="mt-1 text-sm text-gray-600">{price}</p>
      </div>
      <Button>
        Add to Cart
      </Button>
      <div className="px-6 py-4">{children}</div>
    </Card>
  )
}

export default CardProduct