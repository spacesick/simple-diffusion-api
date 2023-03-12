// const submitButton = document.getElementById('submitb')
// const textarea = document.getElementById('textarea')
// const images = document.getElementById('generated')

// console.log(submitButton)

async function onSubmit() {
    await generateImage().then(async (response) => {
        json = await response.json();
        updateHtml(`${window.location.href}${json['url']}`);
    });
}

// submitButton.addEventListener('click', async (e) => {
//     await generateImage().then((response) => {
//         updateHtml(URL.createObjectURL(response));
//     });
// })

async function generateImage() {
    const textarea = document.getElementById('textarea')
    console.log(textarea.value)
    const request = new Request('generate', {
        method: 'POST',
        mode: 'no-cors',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            prompt: textarea.value
        })
    });

    return await fetch(request)
}

async function updateHtml(imageUrl) {
    let container = document.createElement('div');
    container.className = 'col-span-1 px-2 py-2';
    let image = document.createElement('img');
    image.src = imageUrl;
    const images = document.getElementById('generated')

    container.appendChild(image);
    images.append(container);
}