var imgToBase64 = () => {
    var url = [];
    let file = document.querySelector(".input-img")
    file.addEventListener('change', (e) => {
        const selectedfiles = e.target.files;
        if (selectedfiles.length > 0) {
            selectedfiles.forEach(selectedFile => {
                [selectedFile] = selectedfiles;
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    const srcData = fileReader.result;
                    const urlSplit = srcData.split(",");
                    var urlIndex = urlSplit[1];
                    url.push(urlIndex);
                    console.log(srcData)
                    console.log(url)
                    localStorage.setItem('url', url);
                };

            fileReader.readAsDataURL(selectedFile);
            })
        }
    })
}