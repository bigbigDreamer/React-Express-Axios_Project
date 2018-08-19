import React,{Component} from 'react'
export default class Right extends Component{
    render () {
        let {data} = this.props;
      return (
        <div>
            <span>{data}</span>
        </div>
      )
    }
}