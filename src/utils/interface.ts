export interface IProps{
    name:string;
    age:number;
  }
  
  export interface ITodo{
    title:string,
    address:{
      floor:number
    },
    id:number
  }

  export interface ITheme{
    theme:string,
    setTheme:(theme:string)=> void,
  }