async function getDonar(){

    const url=window.location.href;
    const urlParams = new URLSearchParams(url.split("?")[1]);
    const id=urlParams.get("id");
    const res=await fetch(`http://localhost:3000/api/getdonar/${id}`)
    const donar=await res.json();
    console.log(donar);

    document.getElementById("frm").innerHTML=`
    
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="${donar.name}">

            <label for="age">Age:</label>
            <input type="number" id="age" name="age" value="${donar.age}">

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value="dob">

            <label for="place">Place:</label>
            <input type="text" id="place" name="place" value="place">

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" value="phone">

            <label for="blood_group">Blood Group:</label>
            <select id="blood_group" name="blood_group" value="blood_group">
    
           <option value="${donar.blood_group}">${donar.blood_group}</option>
                <option value="A+ve">A+ve</option>
                <option value="A-ve">A-ve</option>
                <option value="B+ve">B+ve</option>
                <option value="B-ve">B-ve</option>
                <option value="AB+ve">AB+ve</option>
                <option value="AB-ve">AB-ve</option>
                <option value="O+ve">O+ve</option>
                <option value="O-ve">O-ve</option>
            </select>

            <div class="buttons">
                <button >Submit</button>
                <button type="reset">Reset</button>
            </div>
        </form>
    
    
    
    
    `
}
    getDonar()
