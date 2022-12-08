const Container = (props) => {

     const style = {
         paddingTop: props.spaceY || 60,
         paddingBottom: props.spaceY || 60,
         backgroundColor : props.bgColor || '',  
     } 

     if( props.spaceY === 0){
         style.paddingTop = props.spaceY;
         style.paddingBottom = props.spaceY;
     } 

     return (
           <div className="default-space" style={style}>
                 <div className="css-container">
                        {props.children} 
                 </div>
           </div>    
     )
}

export default Container