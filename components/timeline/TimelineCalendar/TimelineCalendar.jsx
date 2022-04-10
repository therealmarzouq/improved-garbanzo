import s from './TimelineCalendar.module.css'
import moment from 'moment'
import Image from 'next/image'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Search,
} from '../../icons'

const TimelineCalendar = ({ items, groups }) => {
  const getPastDays = () => {
    let pastDays = []
    for (let i = 9; i > 0; i--) {
      pastDays = [...pastDays, moment().subtract(i, 'days')]
    }
    return pastDays
  }
  const getNextDays = () => {
    let nextDays = []
    for (let i = 1; i <= 7; i++) {
      nextDays = [...nextDays, moment().add(i, 'days')]
    }
    return nextDays
  }
  const getToday = () => {
    return moment()
  }
  const getUserEvents = (user) => {
    user = user || false
    let days = []
    for (let i = 9; i > 0; i--) {
      days = [...days, { day: moment().subtract(i, 'days') }]
    }
    days = [...days, { day: moment() }]
    for (let i = 1; i <= 7; i++) {
      days = [...days, { day: moment().add(i, 'days') }]
    }

    return days
  }
  const getEvent = (day, userId) => {
    let userItems = items.filter((item) => item.group == userId)
    let eventExist = false
    let event = {}
    userItems.forEach((item) => {
      if (item.start_time.date() === day.date()) {
        event.span = item.end_time.diff(item.start_time, 'days') + 1
        event.item = item
        eventExist = true
      }
    })
    return eventExist ? event : false
  }
  const getUserEvent = (userId) => {
    let userItems =
      items.length && items.filter((item) => item.group === userId)
    return userItems[0]
  }
  const compareDate = (a, b, operation) => {
    let result = false
    switch (operation) {
      case '>':
        result = a.date() > b.date()
        break
      case '<=':
        result = a.date() <= b.date()
        break

      default:
        break
    }
    return result
  }

  return (
    <div className={s.root}>
      <div className="my-8 flex items-center justify-between pl-4">
        <div className="flex cursor-pointer items-center">
          <div className="text-sm font-medium">
            {getToday().format('MMMM yy')}
          </div>
          <div className="mx-4 flex items-center">
            <ChevronLeft width="16" height="16" className="mx-1" />
            <ChevronRight width="16" height="16" className="mx-1" />
          </div>
        </div>
        <div className="flex cursor-pointer items-center">
          <div className="mx-10">
            <Search />
          </div>
          <div className="relative">
            <input
              className="rounded-2xl border border-gray-200 px-4 py-2 text-xs font-medium text-black placeholder:font-medium placeholder:text-black"
              type="text"
              id="monthSelect"
              placeholder="Month"
            />
            <ChevronDown
              className="absolute top-2.5 right-4 stroke-gray-400 stroke-2"
              width="14"
              height="14"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <table className="absolute  left-0 right-0 mx-auto">
          <thead>
            <tr>
              {getPastDays().map((pastDays, index) => (
                <th className="w-16 opacity-0" key={index}>
                  <div className="mx-1 text-center text-sm">
                    <span className="mr-0.5 text-gray-400">
                      {pastDays.format('dd').charAt(0)}
                    </span>
                    <span>{pastDays.date()}</span>
                  </div>
                </th>
              ))}
              {
                <div className="w-16 opacity-0">
                  <div className="mx-1 rounded-lg bg-blue-600 px-3 pt-0.5 text-center text-sm text-white">
                    <span className="mr-0.5 text-gray-400">
                      {getToday().format('dd').charAt(0)}
                    </span>
                    <span>{getToday().date()}</span>
                  </div>
                </div>
              }
              {getNextDays().map((nextDays, index) => (
                <th className="w-16 opacity-0" key={index}>
                  <div className="mx-1 text-center text-sm ">
                    <span className="mr-0.5 text-gray-400">
                      {nextDays.format('dd').charAt(0)}
                    </span>
                    <span>{nextDays.date()}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {getPastDays().map((day, index) => (
                <td className={'h-screen w-16'} key={index}>
                  <div
                    className={
                      'mt-10 h-full border-r border-gray-200 text-center'
                    }
                  ></div>
                </td>
              ))}
              <td className={'h-screen w-16'}>
                <div
                  className={
                    'relative mt-10  h-full items-center border-r border-gray-200 text-center'
                  }
                >
                  <div className="absolute left-0 right-0 -top-9 -bottom-2 z-50 m-auto flex h-full flex-col items-center">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                    <div className="h-full w-0.5  border-r-2 border-blue-600"></div>
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  </div>
                </div>
              </td>
              {getNextDays().map((day, index) => (
                <td className={'h-screen w-16'} key={index}>
                  <div
                    className={
                      'mt-10 h-full border-r border-gray-200 text-center'
                    }
                  ></div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <table className="absolute left-0 right-0 z-20 mx-auto">
          <thead>
            <tr>
              {getPastDays().map((pastDays, index) => (
                <th className="w-16 opacity-0" key={index}>
                  <div className="mx-1 text-center text-sm ">
                    <span className="mr-0.5 text-gray-400">
                      {pastDays.format('dd').charAt(0)}
                    </span>
                    <span>{pastDays.date()}</span>
                  </div>
                </th>
              ))}
              {
                <th className="w-16 opacity-0">
                  <div className="mx-1 rounded-lg bg-blue-600 px-3 pt-0.5 text-center text-sm text-white">
                    <span className="mr-0.5 text-gray-400">
                      {getToday().format('dd').charAt(0)}
                    </span>
                    <span>{getToday().date()}</span>
                  </div>
                </th>
              }
              {getNextDays().map((nextDays, index) => (
                <th className="w-16 opacity-0" key={index}>
                  <div className="mx-1 text-center text-sm ">
                    <span className="mr-0.5 text-gray-400">
                      {nextDays.format('dd').charAt(0)}
                    </span>
                    <span>{nextDays.date()}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groups.map((user, index) => (
              <tr key={index}>
                <td className={'w-16 bg-white'} colSpan="4">
                  <div className={'h-full'}>
                    <div className="w-full select-none bg-white">
                      <div className="my-2 flex cursor-pointer items-center justify-between rounded-xl border border-gray-300 px-3 py-2">
                        <div className="flex items-center">
                          <div className="relative mr-2 h-9 w-9 rounded-full">
                            <Image
                              src={`https://picsum.photos/id/${index + 3}/200`}
                              alt="Picture of the author"
                              className="rounded-full"
                              layout="fill"
                            />
                          </div>
                          <div className="">
                            <h6 className="text-xs font-medium">
                              {user.title}.
                            </h6>
                            <p
                              className="text-gray-500"
                              style={{ fontSize: '10px' }}
                            >
                              {user.role}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <MoreVertical width="16" height="16" />
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="absolute left-0 right-0 z-10 mx-auto">
          <thead>
            <tr>
              {getPastDays().map((pastDays, index) => (
                <th className="w-16" key={index}>
                  <div className="mx-1 text-center text-sm font-medium ">
                    <span className="mr-0.5 text-gray-400">
                      {pastDays.format('dd').charAt(0)}
                    </span>
                    <span>{pastDays.date()}</span>
                  </div>
                </th>
              ))}
              {
                <div className="w-16">
                  <div className="mx-1 rounded-lg bg-blue-600 px-3 pt-0.5 text-center text-sm font-medium text-white">
                    <span className="mr-0.5 text-gray-400">
                      {getToday().format('dd').charAt(0)}
                    </span>
                    <span>{getToday().date()}</span>
                  </div>
                </div>
              }
              {getNextDays().map((nextDays, index) => (
                <th className="w-16" key={index}>
                  <div className="mx-1 text-center text-sm font-medium ">
                    <span className="mr-0.5 text-gray-400">
                      {nextDays.format('dd').charAt(0)}
                    </span>
                    <span>{nextDays.date()}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groups.map((user, index) => (
              <tr key={index}>
                {getUserEvents(user).map(({ day, task }, index) => (
                  <td
                    className={
                      'w-16' +
                      (getUserEvent(user.id) &&
                      compareDate(day, getUserEvent(user.id).start_time, '>') &&
                      compareDate(day, getUserEvent(user.id).end_time, '<=')
                        ? ' hidden'
                        : '')
                    }
                    colSpan={
                      getEvent(day, user.id) ? getEvent(day, user.id).span : 1
                    }
                    key={index}
                  >
                    <div className={'h-full border-r  text-center'}>
                      <div className="select-none">
                        <div className="relative my-2 flex cursor-pointer items-center justify-between rounded-xl border border-transparent  py-2 text-xs">
                          {getEvent(day, user.id).item && (
                            <>
                              <div className="absolute h-9 w-full rounded-full border border-transparent bg-white"></div>
                              <div
                                className="relative h-9 w-full rounded-full bg-slate-400/30"
                                style={{
                                  backgroundColor:
                                    getEvent(day, user.id).item.color + '33',
                                }}
                              >
                                <div className="absolute left-3 top-2 z-10 flex h-5 w-5 flex-col items-center justify-center rounded-full bg-white/25">
                                  <div className="h-2 w-2 rounded-full bg-white"></div>
                                </div>
                                <span className="absolute left-10 top-2.5 z-10 text-white">
                                  {getEvent(day, user.id).item &&
                                    getEvent(day, user.id).item.title}
                                </span>
                                <span
                                  className="absolute right-3 top-2.5 z-10 text-white mix-blend-difference"
                                  // style={{
                                  //   color: getEvent(day, user.id).item.color,
                                  // }}
                                >
                                  {getEvent(day, user.id).item &&
                                    getEvent(day, user.id).item
                                      .percentageReady + '%'}
                                </span>
                                <div
                                  className="relative  h-9 w-9 rounded-full bg-slate-400 transition-all duration-1000 ease-in"
                                  style={{
                                    width:
                                      getEvent(day, user.id).item
                                        .percentageReady + '%',
                                    backgroundColor: getEvent(day, user.id).item
                                      .color,
                                  }}
                                ></div>
                              </div>
                            </>
                          )}
                          {!getEvent(day, user.id).item && (
                            <div className="relative h-9 w-full"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TimelineCalendar
