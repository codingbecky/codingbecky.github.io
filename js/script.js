document.addEventListener('DOMContentLoaded', function () {
    // Get the contact list and pagination container
    const contactList = document.querySelector('.contact-list');
    const paginationContainer = document.querySelector('.pagination');
  
    // Set the number of items per page
    const itemsPerPage = 10;
  
    // Calculate the total number of pages
    const totalPages = Math.ceil(users.length / itemsPerPage);
    
  
    // Display the total number of contacts
    document.querySelector('.page-header h3').innerText = `Total: ${users.length}`;
  
    // Display contacts based on the current page
    function displayContacts(page) {
      contactList.innerHTML = ''; // Clear the contact list
  
      // Calculate the start and end indices for the current page
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
  
      // Display contacts for the current page
      for (let i = startIndex; i < endIndex && i < users.length; i++) {
        const user = users[i];
        const listItem = document.createElement('li');
        listItem.classList.add('contact-item', 'cf');

        const joinedDate = new Date(user.registered.date);
        const month = String(joinedDate.getMonth() + 1).padStart(2, '0');
        const day = String(joinedDate.getDate()).padStart(2, '0');
        const year = String(joinedDate.getFullYear()).slice(-2);

  
        listItem.innerHTML = `
          <div class="contact-details">
            <img class="avatar" src="${user.picture.thumbnail}">
            <h3>${user.name.first + ' ' + user.name.last}</h3>
            <span class="email">${user.email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${month}/${day}/${year}</span>
          </div>
        `;
  
        contactList.appendChild(listItem);
      }
    }
  
    // Create pagination links
    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement('a');
      pageLink.href = '#';
      pageLink.innerText = i + '  ';
  
      pageLink.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedPage = parseInt(event.target.innerText);
        displayContacts(selectedPage);
      });
  
      const listItem = document.createElement('li');
      listItem.appendChild(pageLink);
      paginationContainer.appendChild(listItem);
    }
  
    // Display the initial contacts on the first page
    displayContacts(1);
  });
  