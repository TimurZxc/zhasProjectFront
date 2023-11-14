import { Link } from "react-router-dom"

const Admin = () => {
    return (
        <section>
            <h1>Админская страница</h1>
            <br />
            <p>У вас должен быть соответственный доступ</p>
            <div className="flexGrow">
                <Link to="/">Главная</Link>
            </div>
        </section>
    )
}

export default Admin
