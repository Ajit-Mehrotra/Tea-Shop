export default function Navbar() {
    return (

        <nav className="border p-4">
            <h1 className="text-normal text-center">Hello</h1>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>

            </ul>
        </nav>
    )
}