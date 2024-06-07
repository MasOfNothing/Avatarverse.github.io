document.addEventListener("DOMContentLoaded", () => {

    function copyText(text) {
        navigator.clipboard.writeText(text).then(() => {
        }).catch(err => {
            console.error("Failed to copy", err);
        });
    }

    function showCopiedMessage(element) {
        if (document.querySelector(".copiedMessage") != null) {
            document.querySelector(".copiedMessage").remove();
        }
        const message = document.createElement('div');
        message.classList.add('copiedMessage');
        message.innerText = 'Copied to clipboard';

        element.appendChild(message);
        setTimeout(() => {
            message.classList.add("show");
        }, 10);

        setTimeout(() => {
            message.classList.remove("show");
            setTimeout(() => {
                element.removeChild(message);
            }, 300);
        }, 1000);
    }

    const copyElements = document.querySelectorAll('.copyText');

    copyElements.forEach(element => {
        element.addEventListener('click', () => {
            const text = element.innerText;
            copyText(text);
            showCopiedMessage(element);
        });
    });
});