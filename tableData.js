const tabledata={
1 : ["PT001", "John Doe", "2024-10-20", "Dr. Rajesh Kumar","Annual Checkup","Compeleted"],
2:["PT002", "Jane Smith", "2024-10-18", "Dr. Priya Sharma","Cardiac Consultation","Follow-up Required"],
3:["PT003", "Mike Johnson", "2024-10-15", "Dr. Anil Verma","Child Vaccination","Compeleted"],
}
     
// store the table data
const tableDataEleme=document.querySelector(".append_data");
// bulid the table
function bulidTable(matchingID){
// reset table data
tableDataEleme.innerHTML="";

if(typeof matchingID === "undefined"){
    let ind=0;
    let tableInd=1;
    while(ind<Object.keys(tabledata).length){
        tableDataEleme.innerHTML += `
                       <tr>
                            <td data-label="Patient ID">${tableInd}</td>
                              <td data-label="Patient Name">${tabledata[tableInd][0]}</td>
                              <td data-label="Date">${tabledata[tableInd][1]}</td>
                              <td data-label="Doctor">${tabledata[tableInd][2]}</td>
                              <td data-label="Diagnosis">${tabledata[tableInd][3]}</td>
                              <td data-label="Status"><p>${tabledata[tableInd][4]}</p></td>
                           </tr>
        `
        ind++;
        tableInd++;
}
}
else if(matchingID.length !== 0){ //check if matchingIDs array is not empty
        //our loop index
        let ind = 0;
        //our table index
        let tableInd = 1;
        //loop through matching IDs provided
        while(ind < matchingIDs.length){
            //append data by getting ID of the record and using a template literal
            tableDataEleme.innerHTML+=`
                <tr>
                    <td>${tableInd}</td>
                    <td>${tabledata[matchingID[ind]][0]}</td>
                    <td>${tabledata[matchingID[ind]][1]}</td>
                    <td>${tabledata[matchingID[ind]][2]}</td>
                    <td>${tabledata[matchingID[ind]][3]}</td>
                       <td>${tabledata[matchingID[ind]][4]}</td>
                </tr>
            `;
            //increment loop index
            ind++;
            //increment table index
            tableInd++;
        }}
else{
        tableDataEleme.innerHTML+=`
            <tr>
                <td colspan="5">
                    NO DATA FOUND
                </td>
            </tr>
        `;
}

}
bulidTable();

// input search function
document.querySelector(".input-data").addEventListener('input',function(){
        let value = this.value.trim();
        if(value){
            matchingIDs=[];
            let ind=1;
            while(ind<Object.keys(tabledata).length){
                 if(tabledata[ind][0].includes(value) || 
                tabledata[ind][1].includes(value) ||
                 tabledata[ind][2].includes(value) ||
                  tabledata[ind][3].includes(value) ||
               tabledata[ind][3].includes(value) ){
                      matchingIDs.push(ind);
                  }
                  ind++;
                }
                bulidTable(matchingIDs);
        }else{
              bulidTable();
        }
})