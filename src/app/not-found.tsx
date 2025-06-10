import { Navbar } from './home/components/Navbar'
import NotFoundAnimation from '@/components/NotFoundAnimation'

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center bg-black text-white py-60 relative">
                <h2 className='text-4xl font-bold'>404</h2>
                <h2 className='text-2xl font-bold'>No se encontró la página</h2>
                <NotFoundAnimation />
            </div>
        </>
    )
}
