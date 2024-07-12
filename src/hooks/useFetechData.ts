import { useState, useEffect } from 'react'
import axios from '@/src/lib/axios'
import { AxiosResponse } from 'axios'

const useFetchData = <T>(
  query: string,
  pageSize: number,
  orderBy: string,
  keyword?: string
) => {
  const [data, setData] = useState<T>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${query}&pageSize=${pageSize}&orderBy=${orderBy}${
          keyword ? `&keyword=${keyword}` : ''
        }`

        const result: AxiosResponse<T> = await axios.get(url)
        setData(result.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [query, pageSize, orderBy, keyword])

  return { data, isLoading }
}

export default useFetchData
