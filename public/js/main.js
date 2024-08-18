// document.getElementById('shortenBtn').addEventListener('click', async () => {
//     const originalUrl = document.getElementById('originalUrl').value;
//     if (!originalUrl || !isValidUrl(originalUrl)) {
//         alert('Please enter a valid URL');
//         return;
//     }
//     try {
//         const response = await fetch('/shorten', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ originalUrl })
//         });
//         const data = await response.json();
//         document.getElementById('result').textContent = `Shortened URL : ${window.location.href}${data.shortUrl}`;
//     } catch (err) {
//         console.error('Error shortening the URL : ', err);
//         alert('Error shortening the URL , PLEASE TRY AGAIN');
//     }

// });
// function isValidUrl(string) {
//     try {
//         new URL(string);
//         return true;
//     } catch (_) {
//         return false;
//     }
// }



// // main.js

// document.getElementById('shortenBtn').addEventListener('click', shortenUrl);
// document.getElementById('copyBtn').addEventListener('click', copyToClipboard);

// function shortenUrl() {
//     const originalUrl = document.getElementById('originalUrl').value;

//     // Example of shortened URL generation (replace with your actual shortening logic)
//     const shortenedUrl = `https://short.url/${btoa(originalUrl).slice(0, 8)}`;

//     // Display the shortened URL
//     const resultDiv = document.getElementById('result');
//     resultDiv.textContent = shortenedUrl;

//     // Show the Copy button only if the result contains data
//     const copyBtn = document.getElementById('copyBtn');
//     if (resultDiv.textContent.trim() !== '') {
//         copyBtn.style.display = 'inline-block';
//     } else {
//         copyBtn.style.display = 'none';
//     }
// }

// function copyToClipboard() {
//     const resultDiv = document.getElementById('result');
//     const resultText = resultDiv.textContent;

//     // Extract the URL from the result text
//     const shortenedUrl = resultText.replace('Shortened URL: ', '').trim();

//     // Copy only the URL to clipboard
//     navigator.clipboard.writeText(shortenedUrl).then(() => {
//         alert('Shortened URL copied to clipboard!');
//     }).catch(err => {
//         console.error('Failed to copy: ', err);
//     });
// }




document.getElementById('shortenBtn').addEventListener('click', async () => {
    const originalUrl = document.getElementById('originalUrl').value;
    if (!originalUrl || !isValidUrl(originalUrl)) {
        alert('Please enter a valid URL');
        return;
    }
    try {
        const response = await fetch('/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ originalUrl })
        });
        const data = await response.json();
        
        // Display the shortened URL
        const shortenedUrl = `${window.location.origin}/${data.shortUrl}`;
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = shortenedUrl;

        // Show the Copy button only if the result contains data
        const copyBtn = document.getElementById('copyBtn');
        copyBtn.style.display = shortenedUrl.trim() !== '' ? 'inline-block' : 'none';
    } catch (err) {
        console.error('Error shortening the URL:', err);
        alert('Error shortening the URL. Please try again.');
    }
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const resultDiv = document.getElementById('result');
    const resultText = resultDiv.textContent.trim();

    // Check if resultText is not empty before copying
    if (resultText) {
        navigator.clipboard.writeText(resultText).then(() => {
            alert('Shortened URL copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    } else {
        console.error('No URL to copy');
    }
});

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}
