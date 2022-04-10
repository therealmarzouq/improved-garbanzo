import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import {
  Layer,
  Plus,
  ChevronUp,
  Settings,
  Folder,
  History,
  Timer,
  Analytics,
  Dashboard,
  ArrowLeft,
} from '../../icons'
import cn from 'classnames'
import s from './Sidebar.module.css'

const Sidebar = ({ ...props }) => {
  const [sidebarIsOpen, toggleSideBar] = useState(true)
  const router = useRouter()
  const pathHash = router.asPath
  return (
    <aside
      className={s.root + (!sidebarIsOpen ? ' w-20' : ' w-80')}
      style={{ backgroundColor: '#fdfdfd', borderColor: '#f6f6f6' }}
    >
      <header>
        <div
          className={
            'mt-2 flex items-center justify-between' +
            (!sidebarIsOpen ? ' flex-col-reverse' : '')
          }
        >
          <div className={'flex items-center'}>
            <div className="mr-2 cursor-pointer rounded-full bg-blue-600 p-2.5">
              <Layer />
            </div>
            <h1
              className={
                'text-2xl font-extrabold' + (!sidebarIsOpen ? ' hidden' : '')
              }
            >
              PJ
            </h1>
          </div>
          <div
            className={
              'cursor-pointer' +
              (!sidebarIsOpen
                ? ' mb-6 rotate-180 transition-all  duration-100'
                : '')
            }
            onClick={() => {
              toggleSideBar(!sidebarIsOpen)
            }}
          >
            <ArrowLeft />
          </div>
        </div>
      </header>
      <nav className={cn(s['app-l-menu'])}>
        <ul>
          <li className={s['app-l-menu__item']}>
            <Link href="/#Dashboard">
              <a
                className={
                  s['app-l-menu__item-link'] +
                  ' ' +
                  (pathHash == '/#Dashboard' &&
                    s['app-l-menu__item-link--active'])
                }
              >
                <div className={s['app-l-menu__title']}>
                  <Dashboard className={s['app-l-menu__icon']} />
                  <span
                    className={
                      !sidebarIsOpen
                        ? 'opacity-0 transition-opacity delay-75 duration-200'
                        : ''
                    }
                  >
                    Dashboard
                  </span>
                </div>
              </a>
            </Link>
          </li>
          <li className={s['app-l-menu__item']}>
            <Link href="/#Analytics">
              <a
                className={
                  s['app-l-menu__item-link'] +
                  ' ' +
                  (pathHash == '/#Analytics' &&
                    s['app-l-menu__item-link--active'])
                }
              >
                <div className={s['app-l-menu__title']}>
                  <Analytics className={s['app-l-menu__icon']} />
                  <span
                    className={
                      !sidebarIsOpen
                        ? 'w-0 opacity-0 transition-opacity delay-75 duration-200'
                        : ''
                    }
                  >
                    Analytics
                  </span>
                </div>
                <div className="flex items-baseline ">
                  <div className="h-2 w-2 rounded-full bg-red-400"></div>
                </div>
              </a>
            </Link>
          </li>
          <li className={s['app-l-menu__item']}>
            <Link href="/#Projects">
              <a
                className={
                  s['app-l-menu__item-link'] +
                  ' ' +
                  ((pathHash == '/#Projects' ||
                    pathHash == '/' ||
                    pathHash == '') &&
                    s['app-l-menu__item-link--active'])
                }
              >
                <div className={s['app-l-menu__title']}>
                  <Folder className={s['app-l-menu__icon']} />
                  <span
                    className={
                      !sidebarIsOpen
                        ? 'opacity-0 transition-opacity delay-75 duration-200'
                        : ''
                    }
                  >
                    Projects
                  </span>
                </div>
              </a>
            </Link>
          </li>
          <li className={s['app-l-menu__item']}>
            <Link href="/#Tracking">
              <a
                className={
                  s['app-l-menu__item-link'] +
                  ' ' +
                  (pathHash == '/#Tracking' &&
                    s['app-l-menu__item-link--active'])
                }
              >
                <div className={s['app-l-menu__title']}>
                  <Timer className={s['app-l-menu__icon']} />
                  <span
                    className={
                      !sidebarIsOpen
                        ? 'opacity-0 transition-opacity delay-75 duration-200'
                        : ''
                    }
                  >
                    Tracking
                  </span>
                </div>
              </a>
            </Link>
          </li>
          <li className={s['app-l-menu__item']}>
            <Link href="/#History">
              <a
                className={
                  s['app-l-menu__item-link'] +
                  ' ' +
                  (pathHash == '/#History' &&
                    s['app-l-menu__item-link--active'])
                }
              >
                <div className={s['app-l-menu__title']}>
                  <History className={s['app-l-menu__icon']} />
                  <span
                    className={
                      !sidebarIsOpen
                        ? 'opacity-0 transition-opacity delay-75 duration-200'
                        : ''
                    }
                  >
                    History
                  </span>
                </div>
              </a>
            </Link>
          </li>
          <li className={s['app-l-menu__item']}>
            <Link href="/#Settings">
              <a
                className={
                  s['app-l-menu__item-link'] +
                  ' ' +
                  (pathHash == '/#Settings' &&
                    s['app-l-menu__item-link--active'])
                }
              >
                <div className={s['app-l-menu__title']}>
                  <Settings
                    width="18"
                    height="18"
                    className={s['app-l-menu__icon']}
                  />
                  <span
                    className={
                      !sidebarIsOpen
                        ? 'opacity-0 transition-opacity delay-75 duration-200'
                        : ''
                    }
                  >
                    Settings
                  </span>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={
          'my-12  flex cursor-pointer items-center justify-between rounded-xl bg-purple-100 px-5 py-3 transition-transform delay-150 duration-300 ease-in-out  hover:opacity-50' +
          (!sidebarIsOpen ? ' bg-transparent px-0 hover:scale-125' : '')
        }
      >
        <div
          className={
            'flex items-center justify-between text-sm font-medium' +
            (!sidebarIsOpen ? ' hidden' : '')
          }
        >
          Create <br />
          new task
        </div>
        <div className="rounded-full bg-blue-600 p-1">
          <Plus className="text-white" width="20" height="20" />
        </div>
      </div>
      <div
        className={
          'absolute bottom-14 left-0  flex w-full items-center justify-between p-7' +
          (!sidebarIsOpen ? ' px-4' : '')
        }
      >
        <div className="flex items-center">
          <div
            className={
              'relative mr-2 h-9 w-9 rounded-full' + (!sidebarIsOpen && ' mx-2')
            }
          >
            <Image
              src={'https://picsum.photos/200'}
              alt="Picture of the author"
              className="rounded-full"
              layout="fill"
            />
          </div>
          <div
            className={
              !sidebarIsOpen
                ? ' w-0 opacity-0 transition-opacity delay-75 duration-200'
                : ''
            }
          >
            <h6 className="text-xs font-bold">Finna A.</h6>
            <p className="text-gray-500" style={{ fontSize: '10px' }}>
              finna@iksg.com
            </p>
          </div>
        </div>
        <div className={!sidebarIsOpen ? ' hidden' : ''}>
          <ChevronUp width="16" height="16" />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
