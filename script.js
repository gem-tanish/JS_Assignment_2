let serial_num = 1;
let nor = 5;

function addData(){

    const firstName = document.getElementById("FirstName");
    const lastName = document.getElementById("LastName");
    const email = document.getElementById("Email");
    const contact = document.getElementById("Contact");
    const gender = document.getElementById("Gender");

    let check = isvalidate(firstName,lastName,email,gender,contact);

    if(check){
        const FirstName = firstName.value;
        const LastName = lastName.value;
        const Email = email.value;
        const Contact = contact.value;
        const Gender = gender.value;

        sendDataToLocal(FirstName,LastName,Email,Gender,Contact);
        
        let data = getDataFromLocal();
    
        let arr=[serial_num].concat(data);
    
        if(serial_num<=nor){
            for(var i =0; i<5; i++){
                var col = document.getElementById("col_"+serial_num+"_"+(i+1));
                var text = document.createTextNode(arr[i]);
                col.appendChild(text);
            }
    
        }
        else{
            var tblbody = document.getElementById('tbody');
    
            var row = document.createElement('tr');
            row.id='row_'+serial_num
            row.className='text-center'
        
            for(var i=0; i<5; i++){
                var column = document.createElement('td');
                column.id='column_'+serial_num+"_"+(i+1)
                var text = document.createTextNode(arr[i]);
                column.appendChild(text);
                row.appendChild(column);
            }
    
            tblbody.appendChild(row);
    
            console.log("row added");
            nor++;
        }
        serial_num++;
        
        document.getElementById("form").reset();
    }
    else{
        alert("ERROR ! Please fill the details correctly")
    }
}

const sendDataToLocal = (FirstName,LastName, Email, Gender,Contact)=>{
        localStorage.setItem('Name',FirstName + " " + LastName);
        localStorage.setItem('Email',Email);
        localStorage.setItem('Gender',Gender); 
        localStorage.setItem('Contact',Contact); 
}

const getDataFromLocal = ()=>{
    let username = localStorage.getItem('Name');
    let useremail = localStorage.getItem('Email');
    let usergender = localStorage.getItem('Gender');
    let usercontact = localStorage.getItem('Contact');

    return [username,useremail,usergender,usercontact]
}




const isvalidate = (firstName,lastName, email, gender, contact)=>{

    firstname_value = firstName.value;
    lastname_value = lastName.value;
    email_value = email.value;
    gender_value = gender.value;
    contact_value = contact.value;

    return (validate_FIRSTName(firstname_value) && (validate_LASTName(lastname_value)) && (validate_Email(email_value) && validate_Contact(contact_value)));

}


const validate_FIRSTName = (firstname_value)=>{
    
    var name_f = /^[a-zA-Z ]*$/;
   
    if(firstname_value===""){
        alert("Name can't be empty!")
        return false;
    }

    else if (name_f.test(firstname_value)){
        return true;
    }
    else{
        alert("Name can only contain Alphabets and ' '");
        return false;
    }
}
const validate_LASTName = (lastname_value)=>{
    
    var name_l = /^[a-zA-Z ]*$/;
   
    if(lastname_value===""){
        alert("Name can't be empty!")
        return false;
    }

    else if (name_l.test(lastname_value)){
        return true;
    }
    else{
        alert("Name can only contain Alphabets and ' '");
        return false;
    }
}

const validate_Email = (email_value)=>{

    var email_re = /^\w+@[a-zA-Z_.]+?\.[a-zA-Z]{2,3}$/;

    if(email_value===""){
        alert("Email can't be empty!")
        return false;
    }
    else if (email_re.test(email_value)){
        return true;
    }
    else{
        alert("Please enter a valid mail id");
        return false;
    }

}


const validate_Contact= (contact_value)=>{
    var contact_re = /^\d{10}$/;

    if (contact_re.test(contact_value)){
        return true;
    }
    else if(contact_value === "" )
    {
        return true;
    }
    else{
        alert("Phone number must be of 10 digits");
        return false;
    }
}