import React,{Component} from 'react'
class Leapyear extends Component{
   constructor(props){
       super(props);

       this.state={
           year:'',
       };
       this.handleChange=this.handleChange.bind(this);
   }

   handleChange= (e)=>{
       let y=e.target.value;
       let yr= y.slice(0,4);
      this.setState({
          [e.target.name]:yr
         });

        }
    
   check=()=>{
   let data = this.state.year;
   if (data.length == 4){
    if((data % 4 === 0)&&(data % 100 !== 0)||(data %400 === 0)){

      return (<h1>Leap year</h1>);

    }else{
       return (<h1>Not a Leap year</h1>);
    }
}
   }

    render(){
        const {year} = this.state
        return(
            <form>
            <div>
      <p>enter year:</p>      
     <input type="number" required maxLength="4" name="year"  value={this.state.year} onChange={this.handleChange} />
        
        {this.check()}
      </div>
      </form>
        );
        }
}
export default Leapyear