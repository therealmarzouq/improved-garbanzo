import Link from 'next/link'
import { Chat, ChevronDown, ChevronRight, Notification } from '../../icons'
import { Logo } from '../../ui'
import s from './Navbar.module.css'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  const pathHash = router.asPath.split('#')[1] || 'Projects'
  return (
    <div className={s.nav}>
      <div className="flex items-center justify-between py-2">
        <div className="flex cursor-default items-center">
          <h1 className="font-medium">{pathHash}</h1>
          <ChevronRight
            width="14"
            height="14"
            strokeWidth="3"
            className="mx-2 stroke-gray-300"
          />
          <h1 className="font-medium text-gray-300">GSE Banking app</h1>
        </div>
        <div className="flex items-center">
          <div className="flex items-center border-r px-2">
            <Chat className="mx-4" />
            <Notification className="mx-4" />
          </div>
          <div className="flex items-center pl-2">
            <Logo className="mx-4" />
            <h1 className="text-sm font-medium">RonasIT</h1>
            <ChevronDown
              width="18"
              height="18"
              strokeWidth="5"
              className="ml-2 stroke-gray-500 stroke-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
