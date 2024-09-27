async function getDonars(){
    const res=await fetch("http://localhost:3000/api/getdonars");
    const donars=await res.json();
    console.log(donars);
    str=``;
    donars.map((donar)=>{
        str+=`
        <tr>
                    <td>${donar.name}</td>
                    <td>${donar.age}</td>
                    <td>${donar.dob}</td>
                    <td>${donar.place}</td>
                    <td>${donar.phone}</td>
                    <td>${donar.blood_group}</td>
                    <td class="actions">
                          <a href="./pages/edit.html"><button>Edit</button></a>
                          <button>Delete</button>
                    </td>
                </tr>
        
        
        `
    });
    document.getElementById("tbody").innerHTML=str;
}
getDonars();