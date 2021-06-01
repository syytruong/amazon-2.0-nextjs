import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid"
import { TrashIcon } from "@heroicons/react/outline"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import {
  addToBasket,
  removeFromBasket,
  deleteFromBasket,
} from "../slices/basketSlice"

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
  quantity,
}) {
  console.log(id, quantity)
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      rating,
      price,
      description,
      category,
      image,
      hasPrime,
    }

    dispatch(addToBasket(product))
  }

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }))
  }

  const deleteItemFromBasket = () => {
    dispatch(deleteFromBasket({ id }))
  }

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" key={i} />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="EUR" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://i.postimg.cc/2jM2S136/prime-tag.png"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex justify-self-end space-x-2 items-center xl:mb-12">
        <button
          className="plusminus-button w-8 h-6 flex items-center justify-center bg-transparent"
          onClick={removeItemFromBasket}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          className="plusminus-button w-8 h-6 flex items-center justify-center bg-transparent"
          onClick={addItemToBasket}
        >
          +
        </button>
        <div
          className="hidden md:inline-flex cursor-pointer"
          onClick={deleteItemFromBasket}
        >
          <TrashIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct
