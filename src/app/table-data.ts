
export const tableheaderName=[
    
    { key:'rollno',label:'Student Rollnum'},
    { key:'name',label:'Student Name'},
    { key:'age',label:'Student Age'}
     
]
export type data={rollno:number;name:string;age:number}
export const  studentData:data[]=[
  {rollno:116,name:'Lila',age:15},
  {rollno:182,name:'Sita',age:14},
  {rollno:168,name:'Tina',age:14},
]


export const theadNamings=[
  {item :'id' , value:'Employee Id'},
  {item :'name' , value:'Employee Name'},
  {item :'age' , value:'Employee Age'},
  {item :'place' , value:'Employee Place'},
]

export type details={id:number,name:string,age:number,place:string}
export const employeeData:details[]=[
  {id:45,name:'Kali',age:32,place:'chennai'},
  {id:60,name:'Swati',age:22,place:'chennai'},
  {id:18,name:'Nisha',age:20,place:'chennai'},
  {id:81,name:'Manish',age:25,place:'chennai'},
]