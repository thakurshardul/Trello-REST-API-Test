document.addEventListener("DOMContentLoaded", function () {
    const today=new Date().toISOString().split("T")[0]
    document.getElementById("startDate").setAttribute("min",  today);
    document.getElementById("dueDate").setAttribute("min", today);

    document.getElementById("trelloForm").addEventListener("submit", async function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const description = document.getElementById("description").value.trim();
        const startDate = document.getElementById("startDate").value;
        const dueDate = document.getElementById("dueDate").value;
        const errorMessage = document.getElementById("errorMessage");
        const submitButton = document.getElementById("submitButton");
        
        errorMessage.textContent = ""; // Clear previous errors

        if (!name || !description || !startDate || !dueDate) {
            errorMessage.textContent = "All fields are required!";
            return;
        }

        if (startDate > dueDate) {
            errorMessage.textContent = "Start Date must be before the Due Date!";
            return;
        }
        submitButton.disabled = true;
        submitButton.textContent = "Loading...";
        
        const formData = { name, description, startDate, dueDate };

        try {
                const response = await fetch("http://localhost:3000/create-card", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
            // Redirect to success page with card details
            window.location.href = `success.html?name=${encodeURIComponent(formData.name)}&desc=${encodeURIComponent(formData.description)}&start=${encodeURIComponent(formData.startDate)}&due=${encodeURIComponent(formData.dueDate)}`;
        } else {
            // Redirect to failure page
            window.location.href = "failure.html";
        }
        }catch(err){
            window.location.href = "failure.html";
        }
    });
})
