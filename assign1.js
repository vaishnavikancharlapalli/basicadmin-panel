$(function()
{
console.log("dom is ready")

$(".formaction").submit(function(e)
{
    e.preventDefault()
})
$("#search-box").on("input",function()
{
   let searchstring = this.value
  
   var gettr = $("tr")
   for(var i=1;i<gettr.length;i++)
   {
    var datastring =""
       for(j=0;j<5;j++)
       {
            datastring += gettr[i].childNodes[j].innerText+" ";
       }
      console.log(datastring,searchstring)
      var isPresent = (datastring.toLowerCase()).includes(searchstring.toLowerCase())
     
      console.log(isPresent)
      if(isPresent)
      {
          gettr[i].classList.remove('display-class')
      }
      else{
          gettr[i].classList.add('display-class')
      }
      
   }

//    if(isPresent)
//    {
//        var lenofstr = searchstring.length
//        for(var i = 1;i<gettr.length;i++)
//        {
//            for(var j=0;j<5;j++)
//            {
//                if((gettr[i].childNodes[j].innerText).includes(searchstring))
//                {
//                    var substr = gettr[i].childNodes[j].innerText
//                    var getpos = substr.indexOf(searchstring)
//                    var store = substr.substring(getpos,getpos+lenofstr)
                  
              
//                }
//                else{
//                    gettr[i].childNodes[j].classList.remove('add-color')
//                }
//            }
//        }
//    }

})


$.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",function(response)
    {
     let objectdata = response
     console.log(objectdata)
  for(var i=0;i<objectdata.length;i++)
  {
      if(i==0)
      {
      rowsrender(objectdata[i],i)
      }
      else{
          rowsrender(objectdata[i])
      }

  }
  var getallrows = $(".data-row")
  for(var i=0;i<getallrows.length;i++)
  {
    getallrows[i].addEventListener("click",function(event)
    {
      let getid = event.currentTarget.firstChild.innerText
      let getdetails =  objectdata.filter((item) =>
    
      item.id == getid
      )[0]
      console.log(event.currentTarget.className)
      $(".data-row").removeClass('active')
      event.currentTarget.className = "data-row active"
      console.log(getdetails)
      changerightside(getdetails)
    
    })
  }
 function changerightside(getdetails)
  {
    var { firstName, lastName, description, address } = getdetails;
    var { streetAddress, city, state, zip } = address;
  $(".info-name").html(`<b>User Selected </b> ${firstName} ${lastName}`)
     $("textarea").text(`description ${description}`);
     $(".adress").html(`<b>Address:</b> ${streetAddress}`);
     $(".city").html(`<b>City:</b> ${city}`);
     $(".state").html(`<b>State:</b> ${state} `);
     $(".zipcode").html(`<b>Zip:</b> ${zip}`);   
  }





    })



})


/*
 <table>
                        <tbody>
                            
                            <tr class="data-row">
                                <td class="column1">856</td>
                                <td class="column2">Yeqing</td>
                                <td class="column3">Elshoff</td>
                                <td class="column4">RKimmel@tincidunt.com</td>
                                <td class="column5">(230)488-3157</td>
                            </tr>

                        </tbody>
                    </table>
*/

    function rowsrender(persondata,index)
    {
        if(index == 0)
        {
 var trows = $("<tr>").addClass("data-row active")
        }
        else{
            var trows = $("<tr>").addClass("data-row")
        }
 var td1 = $("<td>").addClass("column1").text(persondata.id)
 var td2 = $("<td>").addClass("column2").text(persondata.firstName)
 var td3 = $("<td>").addClass("column3").text(persondata.lastName)
 var td4 = $("<td>").addClass("column4").text(persondata.email)
 var td5 = $("<td>").addClass("column5").text(persondata.phone)
trows.append(td1,td2,td3,td4,td5)

$("tbody").append(trows)

}




// var getform = document.getElementsByClassName('formaction')
// getform[0].onsubmit = function(e)
// {
//  e.preventDefault()
// }



// let http = new XMLHttpRequest()
// http.open("GET","http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",true);
// http.onreadystatechange = function(response)
// {
// if(http.readyState === 4)
// {
//     var objectdata = JSON.parse(this.response)
//     var gettablediv = document.getElementById("table-data")
// var createtable = document.createElement('table')
// var createbody = document.createElement('tbody')
// gettablediv.appendChild(createtable)
// createtable.appendChild(createbody)

// for(var i = 0; i< objectdata.length;i++)
// {
// var createtr = document.createElement('tr')
// createtr.className = "data-row"
// createtr.id = i
// var createtd0 = document.createElement('td')
// createtd0.className = "column1"
// createtd0.innerText = objectdata[i].id
// createtd0.id = i
// createtr.appendChild(createtd0)

// var createtd1 = document.createElement('td')
// createtd1.className = "column2"
// createtd1.innerText = objectdata[i].firstname
// createtd1.id = i
// createtr.appendChild(createtd1)

// var createtd2 = document.createElement('td')
// createtd2.className = "column3"
// createtd2.innerText = objectdata[i].lastname
// createtd2.id = i
// createtr.appendChild(createtd2)

// var createtd3 = document.createElement('td')
// createtd3.className = "column4"
// createtd3.innerText = objectdata[i].email
// createtd3.id = i
// createtr.appendChild(createtd3)

// var createtd4 = document.createElement('td')
// createtd4.className = "column5"
// createtd4.innerText = objectdata[i].phone
// createtd4.id = i
// createtr.appendChild(createtd4)

// createbody.appendChild(createtr)

// }
// console.log(createbody)



// var getallrows = document.querySelectorAll(".data-row")
// console.log(getallrows[0])
// var infovisible = document.getElementById("info-content")
// var getchangename = document.querySelector('.info-name')

// let array= []
// var getinput  = document.getElementById('search-box')
// getinput.oninput = function()
// {
//     for(var i =0 ;i<getallrows.length;i++)
//     {
//     let getsearch = getinput.value
//     console.log(getallrows[i])
   
//   }
 

// }


// for(var i=0;i< getallrows.length;i++)
// {
   
//     getallrows[i].addEventListener("click",function(event)
//     {
//         // var getrow = event.target
//         // console.log(getrow)
//         // for(var i=0;i<getallrows.length;i++)
//         // {
//         //     getallrows.classList.remove("active")
//         // }
//         // getrow.classList.add('active')
//         getrow = event.target.id
        
//         for(var i = 0; i< getallrows.length;i++)
//         {
//             getallrows[i].classList.remove('active')
//         }
//        getallrows[getrow].classList.add('active')
//        var firstname = objectdata[getrow].firstName
//        var lastname = objectdata[getrow].lastName
//        console.log(firstname,lastname)
//        infovisible.style.display = "block";
//        getchangename.innerText = "User Selected"+" "+firstname+ " "+lastname
//        var getadd = document.getElementsByClassName('adress')
//        getadd[0].innerText ="Address : "+objectdata[getrow].address.streetAddress
//        var getcity  = document.getElementsByClassName('city')
//        var getstate = document.getElementsByClassName('state')
//        var getzipcode = document.getElementsByClassName('zipcode')
     
//        getcity[0].innerText = "City : "+objectdata[getrow].address.city
//        getstate[0].innerText = "State : "+objectdata[getrow].address.state
//        getzipcode[0].innerText = "ZIP : "+objectdata[getrow].address.zip
       
        
//     })
// }




// }
// }
// http.send()



