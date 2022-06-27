const ui = [];
var CD = 0;
var ID ;
var Text;
var UI;
var DATA = 0;
var User_recode = new Array();

AddData();

function AddData(){    
    let text = localStorage.getItem("User");
    let obj = JSON.parse(text);
        Text = "<thread>";
                var i;

                for(i=0; i<obj.length; i++)
                {
                    Text += "<tr> <td>" + obj[i].FirstName + "</td> <td>" + obj[i].LastName +  "</td> <td>" + obj[i].Education_Filed + "</td> <td> " + obj[i].Gender + "</td><td> " + obj[i].Email + " </td> <td>" + obj[i].Password+ " </td> <td> <button type='button' onclick='Edit("+i+")'>Edit</button> </td> <td><button type='button' onclick='Delete("+i+")'>Delete</button> </td></tr>"; 
                }
                Text += "</thread>";

    document.getElementById('UIO').innerHTML = Text; 
}
  

function myfunction(){

    // CD = 1;

    class user{
        constructor(FirstName,LastName,Education_Filed,Email,Password){
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.EducationFiled = Education_Filed;
            this.Email = Email;
            this.Password = Password;

        }
    }
 
    class user1 extends user{
        constructor(FirstName,LastName,Education_Filed,Gender,Email,Password){
            super(FirstName,LastName,Education_Filed,Gender,Email,Password)
            this.Gender = Gender; 
        }

        Usershow(){
            AddData();
        }
    }


    var FirstName,LastName,Education_Filed,Gender,Email,Password;
    var person = {};

    person["FirstName"] = document.getElementById('exampleInputFname1').value;
    FirstName =  person["FirstName"];

    person["LastName"] = document.getElementById('exampleInputlname1').value;
    LastName =  person["LastName"];
    
    person["Education_Filed"] = document.getElementById('exampleInputlfiled').value;
    Education_Filed = person["Education_Filed"];
    
    
    if(document.getElementById('inlineRadio1').checked)
    {
        person["Gender"] = document.getElementById('inlineRadio1').value;
        Gender = person["Gender"];
    }
    else if(document.getElementById('inlineRadio2').checked)
    {
        person["Gender"] = document.getElementById('inlineRadio2').value;
        Gender = person["Gender"];
    }
    else if(document.getElementById('inlineRadio3').checked)
    {
        person["Gender"] = document.getElementById('inlineRadio3').value;
        Gender = person["Gender"];
    }
    
    
    person["Email"] = document.getElementById('exampleInputEmail1').value;
    Email = person["Email"];
    
    person["Password"] = document.getElementById('exampleInputPassword1').value;
    Password = person["Password"];
    

    if(FirstName === '' || LastName === '' || Education_Filed === '' || Gender === '' || Email === '' || Password === ''){
        alert("Some Property are Undefined!");
    }
    else{
            
        User_recode = JSON.parse(localStorage.getItem("User"))?JSON.parse(localStorage.getItem("User")):[]

        if(CD == 1){
            
            User_recode[ID].FirstName = FirstName;
            User_recode[ID].LastName = LastName;
            User_recode[ID].Education_Filed = Education_Filed;
            User_recode[ID].Gender = Gender;
            User_recode[ID].Email = Email;
            User_recode[ID].Password = Password;
            localStorage.setItem("User",JSON.stringify(User_recode));
            CD = 0;
            ID = undefined;

            const myUser = new user1(FirstName,LastName,Education_Filed,Gender,Email,Password);
            myUser.Usershow();
        }else if(CD == 0){
            
            if(User_recode.some((v) => {return v.Email == Email})){
                    alert("Email id is a Already Existed!")
            }else{
                            
                User_recode.push({
                    FirstName : FirstName,
                    LastName : LastName,
                    Education_Filed : Education_Filed,
                    Gender : Gender,
                    Email : Email,
                    Password : Password
                    })
                    localStorage.setItem("User",JSON.stringify(User_recode));

                const myUser = new user1(FirstName,LastName,Education_Filed,Gender,Email,Password);
                myUser.Usershow();
            }
        }
                document.getElementById('exampleInputFname1').value = "";
                document.getElementById('exampleInputlname1').value = "";
                document.getElementById('exampleInputEmail1').value = "";
                document.getElementById('exampleInputPassword1').value = "";
            }
        }

    function Edit(i){
    let User = localStorage.getItem("User");
    User_recode = JSON.parse(User);
    ID = i;
    document.getElementById('exampleInputFname1').value = User_recode[i].FirstName;
    document.getElementById('exampleInputlname1').value = User_recode[i].LastName;
    document.getElementById('exampleInputEmail1').value = User_recode[i].Email;
    document.getElementById('exampleInputPassword1').value = User_recode[i].Password;

    CD = 1;
    }

    function Delete(i){
    let User = localStorage.getItem("User");
    User_recode = JSON.parse(User);
    User_recode.splice(i,1);
    localStorage.setItem("User",JSON.stringify(User_recode));
    AddData();
    }


            // ui.push(person);
            // Text = "<thread>";
            // UI = ui.length;
            // var i;

            // for(i=0; i<UI; i++)
            // {
            //     Text +=  "<tr> <td>" + ui[i].FirstName + "</td> <td>" + ui[i].LastName + "</td> <td> " + ui[i].Education_Filed + "</td> <td> " + ui[i].Gender + " </td> <td>" + ui[i].Email + "</td> <td> " + ui[i].Password + " </td> <td> <button type='button' onclick='Edit("+i+")'>Edit</button> </td> <td><button type='button' onclick='Delete("+i+")'>Delete</button> </td></tr>";
            // }
            // Text += "</thread>";

            // document.getElementById('UIO').innerHTML = Text;