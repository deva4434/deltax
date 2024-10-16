const leads = [
    { name: 'John Doe', status: 'New', source: 'Google', contactDate: '2024-10-12' },
    { name: 'Jane Smith', status: 'Contacted', source: 'Facebook', contactDate: '2024-10-10' },
    { name: 'Sam Wilson', status: 'Not Interested', source: 'Twitter', contactDate: '2024-10-09' }
  ];
  
  const leadBody = document.getElementById('leadBody');
  
  function loadLeads() {
    leadBody.innerHTML = '';
    leads.forEach((lead, index) => {
      const row = `<tr>
                    <td>${lead.name}</td>
                    <td>${lead.status}</td>
                    <td>${lead.source}</td>
                    <td>${lead.contactDate}</td>
                    <td><button onclick="viewLead(${index})">View</button></td>
                  </tr>`;
      leadBody.innerHTML += row;
    });
  }
  
  function viewLead(index) {
    const lead = leads[index];
    alert(`Lead Details:\nName: ${lead.name}\nStatus: ${lead.status}\nSource: ${lead.source}`);
  }
  
  document.addEventListener('DOMContentLoaded', loadLeads);
  