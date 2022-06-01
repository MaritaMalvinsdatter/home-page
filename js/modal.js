

    const images = document.querySelectorAll(".image");
        let imgSrc;
      
        images.forEach((img) => {
          img.addEventListener("click", (e) => {
            imgSrc = e.target.src;
            popUpModal(imgSrc);
            console.log(imgSrc)
          });
        });

        

        let popUpModal = (src) => {
            const modal = document.createElement("div");
            modal.setAttribute("class", "modal");
            document.querySelector(".card-img").append(modal);
            const newImage = document.createElement("img");
            newImage.setAttribute("src", src);

            // Removes img when clicking outside img

            window.onclick = function (event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              };
              modal.append(newImage);
        };

       
