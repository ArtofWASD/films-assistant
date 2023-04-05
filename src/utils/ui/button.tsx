'use client'
import { useRouter } from 'next/navigation';

const Button = () => {
const router = useRouter()
  return (
    <>
      <button className="rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 py-2 px-5 text-white" onClick={() =>router.back()}>Назад</button>
    </>
  )
}

export default Button
