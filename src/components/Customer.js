import React from 'react'; //리액트 라이브러리를 들고옴

class Customer extends React.Component{
    render(){//실제로 화면에 그려지는걸 담는다는 의미
        return( // render함수는 꼭 리턴을 넣어줘야함
        <div>
            <h2> {this.props.name}</h2>
            <p>{this.props.birthday}</p>
        </div>
        )
    }

}


export default Customer;