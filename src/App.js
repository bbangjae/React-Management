import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday':'970503'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'영재',
  'birthday':'972503'
}
]
function App() {
  return (
    <div>
      {
        customers.map(c=> {
          return <Customer 
            key={c.id} // 키값을 주어야함 (구별짓는)
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}

          />
        })
      }
    {/* <Customer 
      id={customers[0].id}
      image={customers[0].image}
      name={customers[0].name}
      birthday={customers[0].birthday}
    />
    <Customer 
      id={customers[1].id}
      image={customers[1].image}
      name={customers[1].name}
      birthday={customers[1].birthday}
    /> */}
    </div>
  ); 
}
export default App;
