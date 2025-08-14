import userData from './data/user.json'
import UserCard from './components/user-card/user-card'

// JSON
// Array Data -> Component(props) -> Rendering -> View

export default function App() {
  return (
    <section className="app demo">
      <h1>UserCard 커스텀 컴포넌트</h1>
      <UserCard
        id={userData[0].id}
        name={userData[0].name}
        phoneNumber={userData[0].phoneNumber}
        address={userData[0].address}
        age={userData[0].age}
      />
      <UserCard
        id={userData[1].id}
        name={userData[1].name}
        phoneNumber={userData[1].phoneNumber}
        address={userData[1].address}
        age={userData[1].age}
      />
      <UserCard
        id={userData[2].id}
        name={userData[2].name}
        phoneNumber={userData[2].phoneNumber}
        address={userData[2].address}
        age={userData[2].age}
      />
    </section>
  )
}
