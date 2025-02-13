document.addEventListener("DOMContentLoaded", function () {
    const c=new Date()-new Date().getTimezoneOffset()
    console.log(new Date(c).toISOString())
    const today=new Date().toISOString().split("T")[0]
    
    document.getElementById("startDate").setAttribute("min",  today);
    document.getElementById("dueDate").setAttribute("min", today);

    //the below code is working as expected. the aove i have to work upon then after that test all the edge cases.
    document.getElementById("trelloForm").addEventListener("submit", async function(event) {
        event.preventDefault();
        
        const formData = {
            name: document.getElementById("name").value,
            description: document.getElementById("description").value,
            startDate: document.getElementById("startDate").value,
            dueDate: document.getElementById("dueDate").value
        };
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
