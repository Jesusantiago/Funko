export const imgToBase64 = () => {
	return new Promise((resolve, reject) => {
	  let fileInput = document.getElementById("imageAdd");
	  let urls = [];
  
	  const handleFile = (file) => {
		const fileReader = new FileReader();
  
		fileReader.onload = () => {
		  const srcData = fileReader.result;
		  const urlSplit = srcData.split(",");
		  const url = urlSplit[1];
		  urls.push(url);
  
		  if (urls.length === fileInput.files.length) {
			urls.forEach((url, index) => {
				localStorage.setItem(`url_${index}`, url);})

			resolve(urls); // Resolvemos la promesa con la lista de URLs de datos generadas
		  }
		};
  
		fileReader.readAsDataURL(file);
	  };
  
	  const handleInputChange = () => {
		const selectedFiles = fileInput.files;
		Array.from(selectedFiles).forEach((file) => {
		  handleFile(file);
		});
	  };
  
	  fileInput.addEventListener('change', handleInputChange);
	});
  };

export const retrieveUrlsFromLocalStorage = () => {
	const urls = [];
	const localStorageKeys = Object.keys(localStorage);
  
	localStorageKeys.forEach((key) => {
	  if (key.startsWith("url_")) {
		const url = localStorage.getItem(key);
		urls.push(url);
	  }
	});
  
	return urls;
  };

