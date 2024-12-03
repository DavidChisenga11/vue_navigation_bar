// console.log(`first`);

const name ={
    escort_name : 'David',
    escort_ID : 'Number',
    escort_contact_number: '',
  
  }
    
  
  const {escort_name, escort_ID, contact} = name
  
  
  // function generateCredentials()
  
 var  generateCredentials = (()=>{
    // return this.name.escort_ID
    return `
    Name: ${escort_name}
    ID Number: ${escort_ID}

    `
  })

//   console.log(escort_name)
  console.log(generateCredentials(name))