import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import moment from 'moment'
import { TimelineCalendar } from '../components/timeline'
import { faker } from '@faker-js/faker'

export default function Home() {
  const groups = [
    {
      id: 1,
      title: 'Finna A.',
      role: 'UX Designer',
    },
    { id: 2, title: 'Emma F.', role: 'UI Designer' },
    { id: 3, title: 'Alex B.', role: 'UX Analyst' },
    { id: 4, title: 'Cody  D.', role: 'UX Analyst' },
    { id: 5, title: 'Samantu G.', role: 'Senior UI/UX Designer' },
    { id: 6, title: 'Erik F.', role: 'UI Designer' },
    { id: 7, title: 'Anna s.', role: 'Devops' },
    { id: 8, title: 'Shola W.', role: 'Embeded Systems' },
    { id: 9, title: 'Sandra T.', role: 'Product Manager' },
    { id: 10, title: 'Kawu M.', role: 'Business Analyst' },
  ]
  const [items, setItems] = useState([])
  useEffect(() => {
    const colors = [
      '#fd7e2e',
      '#f9d018',
      '#131e3a',
      '#131e3a',
      '#1bd3fc',
      '#fd7e2e',
      '#f9d018',
      '#131e3a',
      '#1bd3fc',
      '#fd7e2e',
      '#f9d018',
      '#131e3a',
      '#1bd3fc',
    ]
    setItems((items) => [])
    groups.forEach((group, i) => {
      let item = {
        id: i + 1,
        group: group.id,
        title: faker.random.words(2),
        start_time: moment().subtract(
          faker.datatype.number({ min: 3, max: 6 }),
          'days'
        ),
        end_time: moment().add(
          faker.datatype.number({ min: 3, max: 6 }),
          'days'
        ),
        percentageReady: faker.datatype.number({ min: 30, max: 60 }),
        color: colors[i],
      }
      setItems((items) => [...items, item])
    })
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      if (items) {
        let increments = []
        for (let index = 0; index < items.length; index++) {
          increments = [
            ...increments,
            faker.datatype.number({ min: 10, max: 30 }),
          ]
        }
        for (let index = 0; index < items.length; index++) {
          const element = items[index]
          if (element.percentageReady < 100) {
            element.percentageReady += increments[index]
            if (element.percentageReady >= 100) {
              element.percentageReady = 100
            }
            let newArr = [...items]
            newArr[index] = element
            setItems(newArr)
          }
        }
      }
    }, 10000)
    return () => clearInterval(interval)
  }, [items.length])
  const getWorkDoneSummary = () => {
    let result = (
      (items.reduce(function (acc, obj) {
        return acc + obj.percentageReady
      }, 0) /
        (items.length * 100)) *
      100
    ).toFixed(0)

    return Number(result)
  }

  return (
    <div className={styles.container}>
      <main className={styles.root}>
        <section className="flex justify-between">
          <div className="">
            <div className="mb-2">
              <h1 className="text-2xl font-medium">GSE Banking app</h1>
            </div>
            <div className="flex items-center">
              <span className="text-xs text-gray-400">
                {getWorkDoneSummary()}%
              </span>
              <div className="mx-3 h-1 w-20 rounded-xl bg-slate-200">
                <div
                  className="h-full w-4/6 rounded-xl bg-gradient-to-r from-violet-300 to-blue-600 transition-all duration-1000 ease-in"
                  style={{ width: getWorkDoneSummary() + '%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className=" flex cursor-pointer items-center rounded-xl border border-dashed border-gray-300 px-4 py-1 text-gray-500">
              <span className="mr-3 text-xl"> &#43;</span> invite
            </div>
            <div className="relative flex cursor-pointer">
              <div className="relative -right-9 h-7 w-7">
                <Image
                  src={`https://picsum.photos/200`}
                  alt="Picture of the author"
                  className="rounded-full"
                  layout="fill"
                />
              </div>
              <div className="relative -right-6 h-7 w-7 rounded-full  border border-white">
                <Image
                  src={`https://picsum.photos/id/56/200`}
                  alt="Picture of the author"
                  className="rounded-full"
                  layout="fill"
                />
              </div>
              <div className="relative -right-3 h-7 w-7 rounded-full  border border-white">
                <Image
                  src={`https://picsum.photos/id/34/200`}
                  alt="Picture of the author"
                  className="rounded-full"
                  layout="fill"
                />
              </div>
              <div className="relative right-0 h-7 w-7 rounded-full  border border-white">
                <div
                  className="flex h-full w-full flex-col items-center justify-center rounded-full bg-sky-900 text-white"
                  style={{ fontSize: '10px' }}
                >
                  + 15
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="">
          <TimelineCalendar groups={groups} items={items} />
        </div>
      </main>
    </div>
  )
}
