import React from 'react'; //리액트 라이브러리를 들고옴

class Customer extends React.Component{
    render(){//실제로 화면에 그려지는걸 담는다는 의미
        return( // render함수는 꼭 리턴을 넣어줘야함
        <div>
            <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
            <CustomerInfo birthday={this.props.birthday} />
        </div>
        )
    }

}
class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }

}
class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
            </div>
        )
    }
}


export default Customer;