import Link from 'next/link'
const invoice = () => {
  return (
    <div>
      <p className='m-4 text-yellow-400'>invoice page</p>
      <Link href="/dashboard/setting">Dashboard</Link>
    </div>
  )
}

export default invoice
