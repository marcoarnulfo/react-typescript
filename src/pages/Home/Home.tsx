import { useEffect } from 'react'
import apiService from '../../services/api.service';

import { useCounter } from '../../store/store';

export default function Home() {

const count = useCounter(state => state.count)

const increment = useCounter(state => state.increment)
const decrement = useCounter(state => state.decrement)




    useEffect(() => {
        const controller = new AbortController();
        console.log('Home mounted')
        console.log(import.meta.env.VITE_APP_ENV)
        apiService.getFakeData(controller)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        return () => {
            console.log('Home unmounted')
            controller.abort()
        }
    }, [])

    return (
        <div>
            Home_
            <div>{count}</div>
            <div>
                <button onClick={increment}>
                    +
                </button>
                <button onClick={decrement}>
                    -
                </button>
            </div>
        </div>
    )
}
