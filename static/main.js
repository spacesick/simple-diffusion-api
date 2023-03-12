async function onSubmit() {
    await generateImage().then(async (response) => {
        json = await response.json();
        updateHtml(`${window.location.href}${json['url']}`);
    });
}

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
    container.className = 'col-span-1 px-2 py-4 mx-auto my-auto rounded-lg';
    let image = document.createElement('img');
    image.src = imageUrl;
    const images = document.getElementById('generated')

    container.appendChild(image);
    images.append(container);
}