document.addEventListener("DOMContentLoaded", (event)=>{
    
    setTimeout(() =>{
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31889.19286916332!2d-76.62057649474923!3d2.457427667030952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e300311c028d47d%3A0x880bd67f0987a54e!2zUG9wYXnDoW4sIENhdWNh!5e0!3m2!1ses!2sco!4v1722371973042!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    },500)

    
})
