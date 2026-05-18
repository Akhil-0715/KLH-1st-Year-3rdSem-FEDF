// Queue using Closure

function createQueue() {

  let queue = []; // Private data

  return {

    add(name) {

      queue.push(name);

      displayQueue();
    },

    remove() {

      if (queue.length > 0) {

        alert(queue.shift() + " removed");

      } else {

        alert("Queue is empty");

      }

      displayQueue();
    },

    first() {

      if (queue.length > 0) {

        alert("First Customer: " + queue[0]);

      } else {

        alert("Queue is empty");

      }
    },

    total() {

      alert("Total Customers: " + queue.length);
    },

    getQueue() {

      return queue;
    }

  };
}


// Create Queue Object

const customerQueue = createQueue();



// Display Queue

function displayQueue() {

  const list =
    document.getElementById("queueList");

  list.innerHTML = "";

  customerQueue.getQueue().forEach(customer => {

    const li =
      document.createElement("li");

    li.textContent = customer;

    list.appendChild(li);

  });
}



// Add Customer

function addCustomer() {

  const name =
    document.getElementById("customerName").value;

  if (name !== "") {

    customerQueue.add(name);

    document.getElementById("customerName").value = "";

  }
}



// Remove Customer

function removeCustomer() {

  customerQueue.remove();
}



// First Customer

function firstCustomer() {

  customerQueue.first();
}



// Total Customers

function totalCustomers() {

  customerQueue.total();
}