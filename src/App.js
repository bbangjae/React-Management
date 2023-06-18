import Customer from './components/Customer';
import './App.css';

const customer = {
  'name':'홍길동',
  'birthday':'970503'
}
function App() {
  return (
    <Customer 
      name={customer.name}
      birthday={customer.birthday}
    />
  );
}
export default App;
