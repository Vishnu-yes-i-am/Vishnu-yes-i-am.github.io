<?php
if(isset($_POST['name'])){
    $server="localhost";
    $username ="root";
    $password ="";
    $con = mysqli_connect($server, $username, $password);
    if(!$con){
        die("connection to this database failed due to ". mysqli_connect_error());
    }
    echo "success connecting to the database";
    $name = $_POST['name'];
    $mno = $_POST['mno'];
    $email = $_POST['email'];
    $state = $_POST['state'];
    $sql = "INSERT INTO `hlo`.`hlo` ( `name`, `mno`, `email`, `state`, `date`) VALUES ('$name', '$mno', '$email', '$state',current_timestamp());";
    if($con->query($sql)== true){
        echo "success";
    }
    else{
        echo "ERROR: $sql <br> $con->error";
    }
    $con->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        input{
            background-color: bisque;
            width: 400px;
            height: 50px;
            border-radius: 30px;
            font-size: xx-large;
        }
        body{
            background-color: hotpink;
        }
    </style>
    <title>Document</title>
    <script>
        const fsLibrary  = require('fs')
        
        function myfunction(){
           
        var name=document.getElementById("name").value;
        var mno=document.getElementById("mno").value;
        var email=document.getElementById("email").value;
        var state=document.getElementById("state").value;
        let data = name+" "+mno+"  "+email+"  "+state
        fsLibrary.writeFile('newfile.txt', data, (error)  => {
      if(error) throw err;
})
        document.getElementById("name").value="";
        document.getElementById("mno").value="";
        document.getElementById("email").value="";
        document.getElementById("state").value="";
        if (name==""){
            document.getElementById("info").innerHTML="Information Incomplete:"
            }
        else if (mno==""){
            document.getElementById("info").innerHTML="Information Incomplete:"
            }
        else if (state==""){
            document.getElementById("info").innerHTML="Information Incomplete:"
            }
        else if (email==""){
            document.getElementById("info").innerHTML="Information Incomplete:"
            }
        else{
        var para=document.createElement("div")
        var line=document.createTextNode("Details Submitted Successfully:");
        var line1=document.createTextNode("your name is :-->"+ name );
        var b=document.createElement('br');
        var b1=document.createElement('br');
        var b2=document.createElement('br');
        var b3=document.createElement('br');
        var line2=document.createTextNode("mobile number is :-->"+mno);
        var line3=document.createTextNode("your email is :-->"+email);
        var line4=document.createTextNode("And you are from "+state);
        para.appendChild(line);
        para.appendChild(b);
        para.appendChild(line1);
        para.appendChild(b1);
        para.appendChild(line2);
        para.appendChild(b2);
        para.appendChild(line3);
        para.appendChild(b3);
        para.appendChild(line4);
        console.log(para);
        DataTransfer
        document.getElementById("info").appendChild(para);
        }
    }

        
    </script>
</head>
<body>
    <a href="index.html">Home</a>
    <div style="background-color: rgb(241, 129, 195);border-radius: 25px;border-width: 40px; border-style: double;border-color: rgb(245, 95, 140); width: 900px;  margin-left: 300px; margin-top: 100px; font-size: xx-large;">
    <form action="index.php" method="POST" >
        <table style="font-size: 45px;"  width="800" >
            <caption>fill form so that owner of this website can contact you:</caption>
            <tr>
                <td>Name</td>
                <td>
                    <input required="true" name="name" id="name" type="text" placeholder="max 20 characters" maxlength="20">
                </td>
            </tr>
            <tr>
                <td>Mobile Number</td>
                <td>
                    <input name="mno"  id="mno" type="text" placeholder="without +91" maxlength="10">
                </td>
            </tr>
            <tr>
                <td>E-mail</td>
                <td>
                    <input name="email" id="email" type="email" placeholder="must be yours" >
                </td>
            </tr>
            <tr>
                <td>State</td>
                <td>
                    <input name="state" id="state" type="text" >
                </td>
            </tr>
            <tr>
               <td>
                    <button style="border-radius: 30px;margin-left: 280px;position: relative; border-style: double; font-size: xx-large ;color: blue;width: 190px; background-color: cornflowerblue;" onclick="myfunction()"type="submit">SUBMIT</button>
                </td>
            </tr>
        </table>
    </form>
</div>
    <div style="margin-left: 300px; color: blueviolet; font-size: larger;" id="info"></div>

</body>
</html>