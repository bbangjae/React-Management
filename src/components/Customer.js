import React from 'react'; //리액트 라이브러리를 들고옴
import TableRow from  '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
class Customer extends React.Component{
    render(){//실제로 화면에 그려지는걸 담는다는 의미
        return( // render함수는 꼭 리턴을 넣어줘야함
        
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="prfile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
            </TableRow>
          
        )
    }

}
// class CustomerProfile extends React.Component{
//     render(){
//         return(
//             <div>
//                 <img src={this.props.image} alt="profile" />
//                 <h2>{this.props.name}({this.props.id})</h2>
//             </div>
//         )
//     }

// }
// class CustomerInfo extends React.Component{
//     render(){
//         return(
//             <div>
//                 <p>{this.props.birthday}</p>
//             </div>
//         )
//     }
// }


export default Customer;