//https://api.adviceslip.com/advice

document.addEventListener('DOMContentLoaded', () => {
    const diceButton = document.getElementById("advice-random-btn");
    const adviceIdLabel = document.getElementById("advice-id");
    const adviceTextLabel = document.getElementById("advice-text-id");

    diceButton.addEventListener('click', () => {
        const adviceApi = "https://api.adviceslip.com/advice";
        fetch(adviceApi).then(
            response => {
                if(!response.ok) {
                    throw new Error('Network response was not OK ! ' + response.statusText);
                }
    
                return response.json();
            }
        ).then(
            data => {
                const slipData = data['slip'];

                adviceIdLabel.innerText = "Advice #"+slipData.id;
                adviceTextLabel.innerText = slipData.advice;

            }
        ).catch(
            error => {
                console.error("There has been a problem with your fetch operation: " + error);
            }
        )
    });
})







