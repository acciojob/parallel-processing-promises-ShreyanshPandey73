//your JS code here. If required.
 function displayImages(images) {
      const outputDiv = document.getElementById('output');
      images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        outputDiv.appendChild(imgElement);
      });
    }

    // Event listener for the "Download Images" button
    document.getElementById('download-images-button').addEventListener('click', () => {
      // Use Promise.all to download all images in parallel
      Promise.all(images.map(downloadImage))
        .then(images => {
          // Call the displayImages function to display the downloaded images
          displayImages(images);
        })
        .catch(error => {
          // Display error message if any image fails to download
          console.error(error);
        });
    });