import { Link } from 'react-router-dom'
import './style.scss'

export default function MainNavbar(): JSX.Element {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/usestate">useState()</Link>
                    <Link to="/useeffect">useEffect()</Link>
                </li>
            </ul>
        </nav>
    )
}
