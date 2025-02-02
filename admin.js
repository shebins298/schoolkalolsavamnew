// admin.js

// Function to fetch data and display it in the table
function fetchData() {
    db.collection("accommodationData").orderBy("timestamp", "desc").get()
      .then(querySnapshot => {
        const tableBody = document.getElementById('dataTable').querySelector('tbody');
        tableBody.innerHTML = ''; // Clear any existing rows
        querySnapshot.forEach(doc => {
          const data = doc.data();
          const tr = document.createElement('tr');
  
          // Create a table row with the data
          tr.innerHTML = `
            <td>${data.school}</td>
            <td>${data.studentCount}</td>
            <td>${data.arrival ? 'Yes' : 'No'}</td>
            <td>${data.departure ? 'Yes' : 'No'}</td>
            <td>${data.timestamp.toDate().toLocaleString()}</td>
            <td>
              <input type="text" id="remark-${doc.id}" value="${data.remark || ''}" placeholder="Add remark">
            </td>
            <td>
              <button onclick="updateData('${doc.id}')">Update</button>
            </td>
          `;
          tableBody.appendChild(tr);
        });
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }
  
  // Function to update a document (e.g., adding/editing a remark)
  function updateData(docId) {
    const remarkInput = document.getElementById(`remark-${docId}`);
    const remark = remarkInput.value;
  
    // Update the document with the new remark and last update timestamp
    db.collection("accommodationData").doc(docId).update({
      remark: remark,
      lastUpdated: new Date()
    })
    .then(() => {
      alert('Data updated successfully');
      fetchData(); // Refresh data after update
    })
    .catch(error => {
      console.error("Error updating document: ", error);
      alert('Error updating data');
    });
  }
  
  // Fetch data when the page loads
  fetchData();
  