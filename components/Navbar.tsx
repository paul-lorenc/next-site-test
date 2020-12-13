import Link from 'next/link'

function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </li>
    </ul>
  )
}

export default Navbar
